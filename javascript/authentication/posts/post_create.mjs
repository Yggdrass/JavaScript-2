import { createOnePost } from "../api_functions/createpost_to_api.mjs"
import { API_ALL_POSTS_URL } from "../../api_url.mjs";

const createPostURL = `${API_ALL_POSTS_URL}`;

/**
 * This function creates a post using the create form on the feed_page.html.
 * @params {Element} createForm This is the element where the create a post is located.
 * @params {Object} formData This is the collection of data to form an object.
 * @params {Object} postToCreate This is the collection of data from the form.
 * @function createOnePost() This is the function that sends the users input values to an API using a "POST" method and creates a post.
 */

export function registerFormListener() {
    const createForm = document.querySelector(".createPost");

    if (createForm) {
        createForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            //console.log(form);
            const formData = new FormData(form);
            const postToCreate = Object.fromEntries(formData.entries());
            //console.log(userToRegister);

            createOnePost(createPostURL, postToCreate);
            //console.log(registerUser);
        });
    }
}

createPostFormListener();