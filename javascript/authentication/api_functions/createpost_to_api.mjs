import { API_ALL_POSTS_URL } from "../../api_url.mjs";

const createPostURL = `${API_ALL_POSTS_URL}`;

/**
 * This function sends the input that the user enters into the Create Form on the feed_page.html page,
 * through an API-call in order to create a post.
 * @param {*} url this is the target url that needs to be passed into the function, in this case it is the createPostURL found in api_urls.mjs.
 * @param {*} userData This is the inputs from the Create Form found on the feed_page.html.
 * @returns 
 */

export async function createOnePost(url, userData) {
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
        
    } catch(error) {
        console.log(error);
    }
}