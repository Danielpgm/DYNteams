fetch('book.json')
    .then(response => response.json())
    .then(json =>{
        getBook(json);
    })
    // handling error
    .catch(err => console.log(err))
    
    
function getBook(data) {
    let output = "";
    
    data.forEach((element) => {
        output += `
        <tr>
            <td class="text-center">${element.no}</td>
            <td>${element.id_book}</td>
            <td><img src="../assets/book/${element.id_book}.jpg" alt="" class="img-thumbnail" style="width: 100px; height: auto;"></td>
            <td>${element.category}</td>
            <td>${element.title}</td>
            <td>${element.author}</td>
            <td>${element.publisher}</td>
            <td>${element.year}</td>
            <td><p class="synopsis text-muted">${element.synopsis}</p></td>
            <td class="text-center">${element.stock}</td>
            <td class="text-center">
                <a data-bs-toggle="modal" data-bs-target="#editModal" onclick="editBook('${element.no-1}')"><img src="../assets/edit2.png" alt="" style="width: 25px;"></a>
                <a data-bs-toggle="modal" data-bs-target="#deleteModal" onclick="deleteBook('${element.no-1}')" data-placement="top" ><img src="../assets/delete.png" alt="" style="width: 25px;"></a>
            </td>
        </tr>
        `;
    
    });
    
    const bodyTable = document.getElementById("body-table");
    bodyTable.innerHTML = output;
}

function editBook(no){
    fetch("book.json")
    .then((response) => response.json())
    .then((json) => {
        document.getElementById('id_book').value=json[no].id_book;
        document.getElementById('category').value=json[no].category;
        document.getElementById('title').value=json[no].title;
        document.getElementById('author').value=json[no].author;
        document.getElementById('publisher').value=json[no].publisher;
        document.getElementById('year').value=json[no].year;
        document.getElementById('synopsis').value=json[no].synopsis;
        document.getElementById('stock').value=json[no].stock;
    })

    // handling error
    .catch((err) => console.log(err));
}

function deleteBook(no){
    fetch("book.json")
    .then((response) => response.json())
    .then((json) => {
        swal({
            title: "Are you sure to delete data?",
            text: "You won't be able to revert this!",
            icon: "warning",
            dangerMode: true,
            buttons: true,
        })
        .then((deleted) => {
            if (deleted) {
                swal("Deleted!", "Data " + json[no].id_book +" has been deleted. ", "success");
            }
        });
    })
    // handling error
    .catch((err) => console.log(err));
}