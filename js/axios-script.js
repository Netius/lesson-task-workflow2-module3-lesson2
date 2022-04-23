import axios from "axios";

async function postRequestAxios(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(response.data);
}
postRequestAxios();

console.log("AXIOS");