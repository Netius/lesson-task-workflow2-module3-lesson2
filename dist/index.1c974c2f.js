async function postRequest() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    const json = await response.json();
    console.log(json);
}
postRequest();
async function putRequest() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        body: JSON.stringify({
            id: 1,
            title: "foot",
            body: "bart",
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    const json = await response.json();
    console.log(json);
}
putRequest();
function deleteRequest() {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE"
    });
}
deleteRequest();

//# sourceMappingURL=index.1c974c2f.js.map
