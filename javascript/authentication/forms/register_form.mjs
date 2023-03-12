import { registerUser } from "../api_functions/register_to_api.mjs";
import { API_REGISTER_URL } from "../../api_url.mjs";


const registerURL = `${API_REGISTER_URL}`;

/**
 * This function gets the input values the user enters into the Register Form, and then it is sent into the function called "registerUser();".
 * @params {Element} loginForm This is the form where the user can input values in order to register.
 * @params {Object} formData This is the collection of data to form an object.
 * @params {Object} userToRegister This is the collection of data from the form.
 * @function loginUser() This is the function that sends the users input values to an API using a "POST" method and informs the user if the registration was successful or not.
 */

export function registerFormListener() {
    const registerForm = document.querySelector("#registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            //console.log(form);
            const formData = new FormData(form);
            const userToRegister = Object.fromEntries(formData.entries());
            //console.log(userToRegister);

            registerUser(registerURL, userToRegister);
            //console.log(registerUser);
        });
    }
}

registerFormListener();

