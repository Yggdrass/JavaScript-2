import { loginUser } from "../api_functions/login_to_api.mjs";
import { API_LOGIN_URL } from "../../api_url.mjs";


const loginURL = `${API_LOGIN_URL}`;
console.log(loginURL);

/**
 * This function gets the input values the user enters into the Login Form, and then it is sent into the function called "loginUser();".
 * @params {Element} loginForm This is the form where the user can input values in order to login.
 * @params {Object} formData This is the collection of data to form an object.
 * @params {Object} userToLogin This is the collection of data from the form.
 * @function loginUser() This is the function that sends the users input values to an API using a "POST" method and informs the user if the login was successful or not.
 */

export function loginFormListener() {
    const loginForm = document.querySelector("#loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const userToLogin = Object.fromEntries(formData.entries());
            console.log(userToLogin);

            // Sends to the API
            loginUser(loginURL, userToLogin);
        });
    }
}

loginFormListener();