import { register } from "./register_profile_function.mjs";

/**
 * @param {element} form This is the element where the form is located on the website, and where the user inputs their information to register.
 * @param {object} formData This is the data which the user inputs in the form.
 * @param {object} userProfile This is the collection of all the data that the user sends in using the form on submit.
 */


const registerForm = document.getElementById('registerForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');


const usernameValue = username.value.trim();
const emailValue = email.value.trim();
const passwordValue = password.value.trim(); 



const user = {
    username: 'usernameValue',
    email: emailValue,
    password: passwordValue
};

const userProfile = JSON.stringify(user);
console.log(userProfile);


export function RegisterFormListener() {
    const registerForm = document.querySelector("#registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const userProfile = Object.fromEntries(formData.entries());

            register(userProfile);
        });
    }
}