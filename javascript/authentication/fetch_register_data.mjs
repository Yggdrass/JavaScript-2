import { register } from "./register_profile_function.mjs";

/**
 * @param {element} form This is the element where the form is located on the website, and where the user inputs their information to register.
 * @param {object} formData This is the data which the user inputs in the form.
 * @param {object} userProfile This is the collection of all the data that the user sends in using the form on submit.
 */

export function RegisterFormListener() {
    const form = document.querySelector("#registerForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const userProfile = Object.fromEntries(formData.entries());

            register(userProfile);
        });
    }
}