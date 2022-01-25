const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/giglist"
);

const gigSeed =
    [{
        gigs: {
            userName: "test",
            email: "test@test.com",
            gigType: "Santa",
            gigDate: "2002-12-09",
            userNotes: "I like to test the Database",
            accepted: true,
            duration: 2,
            price: 100
        }
    },
    {
        gigs: {
            userName: "Rockie Beatty",
            email: "test@test.com",
            gigType: "Santa",
            gigDate: "2002-12-09",
            userNotes: "I like to test the Database",
            accepted: true,
            duration: 2,
            price: 1200
        }
    }];


db.Gig
    .remove({})
    .then(() => db.Gig.collection.insertMany(gigSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
