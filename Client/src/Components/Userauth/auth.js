
const auth = {
    isAuthenticated: false,
    login(callback) {
      this.isAuthenticated = true;
      callback();
    },
    logout(callback) {
      this.isAuthenticated = false;
      callback();
    },
    isAuthenticated() {
      return this.isAuthenticated;
    }
  };
  
  export default auth;
  