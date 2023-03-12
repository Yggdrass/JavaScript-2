import { registerUser } from "../../api/api_functions/register_to_api_function.js";
import { API_REGISTER_URL } from "../api/api_constants.js";


const registerURL = `${API_REGISTER_URL}`;


export function registerFormListener() {
    const registerForm = document.querySelector("#registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            console.log(form);
            const formData = new FormData(form);
            const userToRegister = Object.fromEntries(formData.entries());
            console.log(userToRegister);

            registerUser(registerURL, userToRegister);
            console.log(registerUser);
        });
    }
}

registerFormListener();
