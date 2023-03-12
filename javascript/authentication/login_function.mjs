import { API_BASE_SOCIAL_URL } from "../api/api_constants.mjs";

const parameterString = window.location.search;
console.log(parameterString);

const searchParameters = new URLSearchParams(parameterString);
console.log(searchParameters);

for (const parameter of searchParameters) {
    console.log(parameter);
}



const [email, password] = searchParameters;
console.log(email, password);



const userToLogin = {
    email: searchParameters.get('email'),
    password: searchParameters.get('pswd'),
};


/*const userToLogin = {
    email: 'AudRoa43553@stud.noroff.no',
    password: '12345678',
};*/

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
        console.log(accessToken);
        const accessToken = json.accessToken;
        localStorage.setItem('accessToken', accessToken);
    }
    catch(error){
        console.log(error);
    }
}

loginUser(loginURL, userToLogin);