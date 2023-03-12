import { API_LOGIN_URL } from "../api_url.js";





const userToLogin = {
    email: 'AudRoa43553@2stud.noroff.no',
    password: '12345678',
};

const loginURL = `${API_LOGIN_URL}`;


export async function loginUser(url, userData) {
    console.log(url, userData);
    try{
        const postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        }
        const response = await fetch(url, postData);
        console.log(response);
        const json = await response.json();
        console.log(json);

        // console.log(json.accessToken);
        // const accessToken = json.accessToken;

        // localStorage.setItem('accessToken', accessToken);

    } catch(error) {
        console.log(error);
    }
}







loginUser(loginURL, userToLogin);


