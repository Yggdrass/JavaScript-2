import { API_REGISTER_URL } from "../../api_url.mjs";

const registerURL = `${API_REGISTER_URL}`;

/**
 * This function sends the input that the user enters into the Register Form on the Index.html page,
 * through an API-call in order to register on the API-server.
 * @param {*} url this is the target url that needs to be passed into the function, in this case it is the registerURL found in api_urls.mjs.
 * @param {*} userData This is the inputs from the Register Form.
 * @returns 
 */

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
        if (response.ok) {
            alert("You have successfully registered with our website!");
        } else {
            alert("Error! Registration failed!");
        }
        return result;
    } catch (error) {
        console.log(error);
    }
}


//registerUser(registerURL, userToRegister);
