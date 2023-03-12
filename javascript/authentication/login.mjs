import { loginUser } from "./login_function.mjs";

const queryString = document.location.search;

//console.log(queryString);

const params = new URLSearchParams(queryString);

//console.log(params);

const email = params.get("email");
//console.log(email);
const password = params.get("pswd");
//console.log(pswd);



const userParams = {
    email: email,
    password: password,
};

//const userToLogin = JSON.stringify(userParams);
//console.log(userProfile);


export function loginFormListener() {
    const form = document.querySelector("#loginForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const userToLogin = Object.fromEntries(formData.entries());
            console.log(userProfile);

            loginUser(loginURL, userToLogin);
        });
    }
}

