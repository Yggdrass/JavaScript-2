

/**
 * This is first part imports the API_URL from api_constants.mjs.
 * This function is then used later to post the users inputs when registering on the website.
 */

import { API_BASE_SOCIAL_URL } from "../api/api_constants.mjs";

const action = "/auth/register";
const method = "post";


/**
 * 
 * @param {*} profile User data that will be sent to the functions "POST" request.
 * 
 */

export async function register(userProfile) {
    const registerURL = API_BASE_SOCIAL_URL + action;

    const response = await fetch(registerURL, {
        method,
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(userProfile),
    });

    const result = await response.json();
    if(response) {
        alert("You registered successfully.");
        window.location.href = "../../index.html";
    }
    else {
        alert("ERROR! Your account was not registered.")
    }
    return result;
}



