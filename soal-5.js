let api = 'https://jsonplaceholder.typicode.com/users';
fetch(api)
    .then(response => response.json())
    .then(data => {
        const names = data.map(user => user.name);
        console.log(names);
    })
    .catch(error => console.log(error));