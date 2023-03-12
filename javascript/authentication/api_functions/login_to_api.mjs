import { API_LOGIN_URL } from "../../api_url.mjs";





// const userToLogin = {
//     email: 'audunMMH@stud.noroff.no',
//     password: '12345678',
// };

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


