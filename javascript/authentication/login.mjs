import { loginUser } from "./login_function.mjs";

const queryString = document.location.search;

//console.log(queryString);

const params = new URLSearchParams(queryString);

//console.log(params);

const email = params.get("email");
//console.log(email);
const password = params.get("pswd");
//console.log(pswd);



const user = {
    email: email,
    password: password,
};

const userProfile = JSON.stringify(user);
//console.log(userProfile);


export function loginFormListener() {
    const loginForm = document.querySelector("#loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const userProfile = Object.fromEntries(formData.entries());
            console.log(userProfile);

            loginUser(userProfile);
        });
    }
}

