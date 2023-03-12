import { API_BASE_SOCIAL_URL } from "../api/api_constants.mjs";







const loginURL = `${API_BASE_SOCIAL_URL}/auth/login`;


export async function loginUser(url, userData) {
    try{
        //console.log(url, userData);
        const postData = {
            method: 'POST',
            haders:  {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch(url, postData);
        //console.log(response);
        const json = await response.json();
        //console.log(json);
        //console.log(accessToken);
        const accessToken = json.accessToken;
        localStorage.setItem('accessToken', accessToken);
    }
    catch(error){
        console.log(error);
    }
}

//loginUser(loginURL, userToLogin);


