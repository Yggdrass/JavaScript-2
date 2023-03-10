
import { API_SOCIAL_POST_URL } from "./api_url.mjs";

export async function getAllPosts(url) {
    try {
        console.log(url);
        const token = localStorage.getItem('accessToken');
        console.log(token);
        const fetchOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${token}` ,
            },
        }
        const response = await fetch(url, fetchOptions);
        console.log(response);
        const json = await response.json();
        console.log(json);
    }
    catch(error) {
        console.log(error);
    }
}

getAllPosts();