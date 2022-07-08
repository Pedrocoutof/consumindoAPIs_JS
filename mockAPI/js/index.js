const urlBase = "https://62a24570cc8c0118ef5ff57a.mockapi.io/";
const endpointGetAll = 'mockCliente/';

const imprimeTabela = async () => {
    const result = await fetch(urlBase + endpointGetAll)
                            .then(response =>response.json())

    var tamArray = result.length;

    var tr = "";
    const tbody = document.getElementById('body-table');


    for(var indexArray = 0 ; indexArray < tamArray ; indexArray++){
        tr = tr + `<tr>
            <th>${result[indexArray]['id']}</th>
            <th>${result[indexArray]['name']}</th>
            <th>${result[indexArray]['email']}</th>
            <th>${result[indexArray]['city']}</th>
        </tr>`;
    }

    tbody.innerHTML = tr;
}

const deleteUser = async () => {

    var id = document.getElementById('_idForm').value;

    const resp = await fetch(urlBase + endpointGetAll + `${id}`,
    {
        method: "DELETE"
    }
    ).then(response => response.json());

    imprimeTabela();
}

const addUser = async () =>{
    
    var id = document.getElementById('_idForm').value;
    var nome = document.getElementById('_nomeForm').value;
    var email = document.getElementById('_emailForm').value;
    var cidade = document.getElementById('_cidadeForm').value;

    const user = {
        name: `${nome}`,
        city: `${cidade}`,
        email: `${email}`,
        id: `${id}`,
    }

    fetch(urlBase + endpointGetAll , {
        method: "POST",
        body: user,
    })

    imprimeTabela();
}

imprimeTabela();

const addButton = document.getElementById('_addButton');
const editButton = document.getElementById('_editButton');
const deleteButton = document.getElementById('_deleteButton');

addButton.addEventListener('click', addUser);
editButton.addEventListener('click', addUser);
deleteButton.addEventListener('click', deleteUser)
