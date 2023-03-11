import { registerUser } from "./register_function.mjs";
import { API_BASE_SOCIAL_URL } from "../api/api_constants.mjs";

/**
 * @param {element} form This is the element where the form is located on the website, and where the user inputs their information to register.
 * @param {object} formData This is the data which the user inputs in the form.
 * @param {object} userProfile This is the collection of all the data that the user sends in using the form on submit.
 */


/*const registerForm = document.getElementById('registerForm');
let username = document.getElementById('username').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

console.log(username);*/


const registerURL = `${API_BASE_SOCIAL_URL}/auth/register`;



const queryString = document.location.search;

//console.log(queryString);

const params = new URLSearchParams(queryString);

//console.log(params);

const username = params.get("username");
//console.log(username);
const email = params.get("email");
//console.log(email);
const password = params.get("password");
//console.log(password);



const userToRegister = {
    name: username,
    email: email,
    password: password
};
//console.log(userToRegister);

const userProfile = JSON.stringify(userToRegister);
//console.log(userProfile);






export function registerFormListener() {
    const form = document.querySelector("#registerForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const userProfile = Object.fromEntries(formData.entries());
            //console.log(userProfile);

            registerUser(registerURL, userToRegister);
            console.log(registerUser);
        });
    }
}
