async function postRequestAxios() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(response.data);
}
postRequestAxios();
console.log("AXIOS");

//# sourceMappingURL=index.5a454965.js.map
