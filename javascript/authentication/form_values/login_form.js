import { loginUser } from "../../api/api_functions/login_to_api_function.js";
import { API_LOGIN_URL } from "../../api/api_constants.js";


const loginURL = `${API_LOGIN_URL}`;

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