import { API_BASE_SOCIAL_URL } from "../api/api_constants.mjs";

const queryString = document.location.search;

console.log(queryString);

const params = new URLSearchParams(queryString);

console.log(params);

const email = params.get("email");
console.log(email);
const password = params.get("pswd");
console.log(password);



const userToLogin = {
    email: email,
    password: password,
};

console.log(userToLogin);


const loginURL = `${API_BASE_SOCIAL_URL}/auth/login`;


export async function loginUser(url, userData) {
    try{
        console.log(url, userData);
        const postData = {
            method: 'POST',
            haders:  {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch(url, postData);
        console.log(response);
        const json = await response.json();
        console.log(json);
    }
    catch(error){
        console.log(error);
    }
}

loginUser(loginURL, userToLogin);