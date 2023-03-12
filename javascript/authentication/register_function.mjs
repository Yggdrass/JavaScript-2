
/**
 * This is first part imports the API_URL from api_constants.mjs.
 * This function is then used later to post the users inputs when registering on the website.
 */

import { API_BASE_SOCIAL_URL } from "../api/api_constants.mjs";

const registerURL = `${API_BASE_SOCIAL_URL}/auth/register`;


export async function registerUser(url, userData) {
    console.log(url, userData);

    try{
        const postData = {
            method: 'POST',
            headers:  {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        };

        const response = await fetch(url, postData);
        console.log(response);
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
}


//registerUser(registerURL, userToRegister);



