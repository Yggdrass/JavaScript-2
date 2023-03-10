import { API_LOGIN_URL } from "../api/api_constants.mjs";


export async function loginUser(url, userData) {
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
        console.log(json.accesstoken);
        const accessToken = json.accessToken;
        localStorage.setItem('accessToken', accessToken);
    }
    catch(error){
        console.log(error);
    }
}


loginUser(API_LOGIN_URL, userToLogin);