import { API_ALL_POSTS_URL } from "../../api_url.mjs"

/**
 * Tis function gets all posts and shows them on the feed_page.html and the profile.html pages.
 * @params {} feedContainer This is the <div> located on the pages where the posts will be displayed.
 * @params {} token This is the token that the user gets, and is stored in localstorage.
 * @params {} fetchOptions This is the options for sending the token in order to get access to the API-url.
 * @params {} feedContainer.innerHTML This how the posts will be displayed on the page.
 * */


const postsGetAllUrl = `${API_ALL_POSTS_URL}`;
const feedContainer = document.querySelector(".postfeed");




export async function getAllPosts(url) {
    try {
        console.log(url);
        const token = localStorage.getItem('accessToken');
        console.log(token);
        const fetchOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'aplication/json',
                'Authorization': `Bearer ${token}`,
            },
        };

        const response = await fetch(url, fetchOptions);
        console.log(response);
        const json = await response.json();
        console.log(json);
        
        for(let i = 0; i < json.length; i++) {
            console.log(json[i]);

            if (i === 100) {
                break;
            }

            feedContainer.innerHTML += `<a href="/post.html?postID=${json[i].id}"><div class="bg-primary border-5"><h2>${json[i].title}</h2>
                                               <img src="${json[i].media}" class="img-fluid"/>
                                               <p class="card-text bg-secondary">"${json[i].body}"</p>
                                               <p>Post id: ${json[i].id}</p>
                                               </a></div>`;
            
        }
    } catch (error) {
        console.log(error);
    }
};

getAllPosts(postsGetAllUrl);