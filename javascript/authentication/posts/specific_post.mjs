import { API_ONE_POST_URL } from "../../api_url.mjs"


const postsGetOneUrl = `${API_ONE_POST_URL}`;
const feedContainer = document.querySelector(".postfeed");

/**
 * 
 * @param {*} url This is the where the url to get access to posts are set.
 */

export async function getOnePost(url) {
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

            feedContainer.innerHTML += `<a href="/post.html?${json[i].id}"><div class="bg-primary border-5"><h2>${json[i].title}</h2>
                                               <img src="${json[i].media}" class="img-fluid"/>
                                               <p class="card-text bg-secondary">"${json[i].body}"</p>
                                               <p>Post id: ${json[i].id}</p>
                                               </a></div>`;
            
        }
    } catch (error) {
        console.log(error);
    }
};

getOnePost(postsGetOneUrl);