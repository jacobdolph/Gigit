const faker = require("Faker");

const db = require("../config/connection");
const { Gig, User } = require("../models");

db.once("open", async () => {
  await Gig.deleteMany({});
  await User.deleteMany({});

  const gigTypes = [
    "Santa",
    "Musician",
    "Magician",
    "Band",
    "Birthday",
    "Chef",
  ];
  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const userName = `${faker.name.firstName()} ${faker.name.lastName()}`;
    const email = faker.internet.email(userName);
    const password = faker.internet.password();

    userData.push({ userName, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create thoughts
  let createdGigs = [];
  for (let i = 0; i < 100; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const gigName = gigTypes[Math.floor(Math.random() * gigTypes.length)];
    const gigType = gigTypes[Math.floor(Math.random() * gigTypes.length)];
    const { userName, _id: userId, email } = createdUsers.ops[randomUserIndex];
    const phoneNum = faker.phone.phoneNumber();
    const dateBooked = faker.date.recent();
    const date = faker.date.recent();
    const city = faker.address.city();
    const endTime = faker.date.recent();
    const startTime = faker.date.recent();
    const usState = faker.address.state();
    const zip = faker.locale.zip;
    const gigDate = faker.date.recent();
    const userNotes = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const createdGig = await Gig.create({
      gigName,
      gigType,
      userName,
      phoneNum,
      email,
      dateBooked,
      date,
      city,
      endTime,
      startTime,
      usState,
      zip,
      gigDate,
      userNotes,
    });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { gigs: createdGig._id } }
    );

    createdGigs.push(createdGig);
  }

  console.log("all done!");
  process.exit(0);
});
