import axios from "axios";

export const fetchPosts = id => dispatch => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      dispatch({
        type: "FETCH_POSTS",
        payload: response.data
      });
    })
    .catch(error => {
      console.log(error);
    });
};
