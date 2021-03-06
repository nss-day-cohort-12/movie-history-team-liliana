"use strict";

MovieApp.factory("authFactory", function () {

  let ref = new Firebase("https://movie-history-proj.firebaseio.com/");

  return {
    /*
      Determine if the client is authenticated
     */
    isAuthenticated () {
      let authData = ref.getAuth();

      if (authData) {
        return true;
      } else {
        return false;
      }
    },
    /*
      Authenticate the client via Firebase
     */
    authenticate (credentials) {
      return new Promise((resolve, reject) => {
        ref.authWithPassword({
          "email": credentials.email,
          "password": credentials.password,
        }, (error, authData) => {
          if (error) {
            reject(error);
          } else {
            console.log("Successfully completed authorization.");
            resolve(authData);
          }
        });
      });
    }
  };
});