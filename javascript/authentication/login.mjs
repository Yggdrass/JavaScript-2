import { loginUser } from "./login_function.mjs";



const loginURL = `${API_BASE_SOCIAL_URL}/auth/login`;

export function loginFormListener() {
    const loginForm = document.querySelector("#loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const userToLogin = Object.fromEntries(formData.entries());
            console.log(userToLogin);

            loginUser(loginURL, userToLogin);
        });
    }
}

loginFormListener();


