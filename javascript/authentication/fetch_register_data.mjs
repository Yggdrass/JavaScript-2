import { registerUser } from "./register_function.mjs";
import { API_BASE_SOCIAL_URL } from "../api/api_constants.mjs";



const registerURL = `${API_BASE_SOCIAL_URL}/auth/register`;






export function registerFormListener() {
    const registerForm = document.querySelector("#registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            //console.log(form);
            const formData = new FormData(form);
            const userToRegister = Object.fromEntries(formData.entries());
            console.log(userToRegister);

            registerUser(registerURL, userToRegister);
            console.log(registerUser);
        });
    }
}

registerFormListener();