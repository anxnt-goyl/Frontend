fetch("https://jsonplaceholder.typicode.com/users")
.then((Response) =>{
    return Response.json();
})
.then((users)=>{
    const table = document.createElement("table");
    table.innerHTML=`<thead>
    <tr><th>Serial number</th>
    <th>Users</th><th>Email</th><th>City</th>
    </tr></thead>`;
    users.forEach((user,idx) => {
        const t = document.createElement("tr");
        t.innerHTML = `<td>${idx+1}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.address}</td>`
    table.appendChild(t);
    });
    const u = document.querySelector(".users-data");
    u.appendChild(table);
})
.catch((err)=>{console.log(err)});