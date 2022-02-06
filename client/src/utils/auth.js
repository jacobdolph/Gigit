import decode from "jwt-decode";

class AuthService {
  // retrieve data save in token
  getProfile() {
    return decode(this.getToken());
  }

  //check if the user is still logged in
  loggedIn() {
    const token = this.getToken();
    // use type coersion to check if token is NOT undefined and the token is Not expired
    return !!token && !this.isTokenExpired(token);
  }

  //check if the token has expired
  isTokenExpired(token) {
    try {
      const decode = decode(token);
      if (decode.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  // retrieve token from local storage
  getToken() {
    //retrieves the user token from localStorage
    return localStorage.getItem("id_token");
  }

  //set token to localStorage and reload page to homepage
  login(idToken) {
    localStorage.setItem("id_token", idToken);

    window.location.assign("/");
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
    // this will reload the page and reset the state of the application
    window.location.assign("/");
  }
}

export default new AuthService();
