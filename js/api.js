const url = "https://jsonplaceholder.typicode.com/todos";
const table = document.querySelector('table');
// fetch(url)
// .then(response => response.json())
// .then(data => {
//     data.forEach(element => {
//         if(element.id < 20) {
//             const {userId, id, title, completed} = element;
//             table.innerHTML += 
//             `
//                 <tr>
//                     <td>${userId}</td>
//                     <td>${id}</td>
//                     <td>${title}</td>
//                     <td>${completed}</td>
//                 </tr>
//             `
//         }
//     });
// })
const syn = true;
const method = "GET";
const request = new XMLHttpRequest();
request.open(method, url, syn);
request.onload = () => {
    const data = JSON.parse(request.response);
    console.log(data);
    data.forEach(element => {
        if(element.id < 30) {
            const {userId, id, title, completed} = element;
            table.innerHTML += 
            `
                <tr>
                    <td>${userId}</td>
                    <td>${id}</td>
                    <td>${title}</td>
                    <td>${completed}</td>
                </tr>
            `
        }
    });
}
request.send();