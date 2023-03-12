import { loginUser } from "../api_functions/login_to_api.mjs";
import { API_LOGIN_URL } from "../../api_url.mjs";


const loginURL = `${API_LOGIN_URL}`;
console.log(loginURL);

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