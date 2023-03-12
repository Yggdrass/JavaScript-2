import { API_LOGIN_URL } from "../../api_url.mjs";

const loginURL = `${API_LOGIN_URL}`;


/**
 * This function sends the input that the user enters into the Login Form on the Index.html page,
 * through an API-call in order to get access to the API-server in order to view posts, create them and edit them.
 * @param {*} url this is the target url that needs to be passed into the function, in this case it is the loginURL found in api_urls.mjs.
 * @param {*} userData This is the inputs from the Login Form.
 * @returns 
 */

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
        //console.log(response);
        const json = await response.json();
        //console.log(json);

        //console.log(json.accessToken);
        const accessToken = json.accessToken;

        localStorage.setItem('accessToken', accessToken);

        if (response.ok) {
            alert("You have successfully logged in!");
        } else {
            alert("Error! Login failed!");
        }
        return result;
    } catch(error) {
        console.log(error);
    }
}







//loginUser(loginURL, userToLogin);


