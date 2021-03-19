fetch('user.json')
    .then(response => response.json())
    .then(json =>{
        getUser(json);
    })
    // handling error
    .catch(err => console.log(err))
    
    
function getUser(data) {
    let output = "";
    
    data.forEach((element) => {

        if((element.status) === 'Active'){
            output += `
            <tr>
                <td>${element.no}</td>
                <td>${element.id_user}</td>
                <td>${element.name}</td>
                <td>${element.email}</td>
                <td>${element.phone_number}</td>
                <td>${element.member}</td>
                <td class="text-center"><a onclick="deactive('${element.no-1}')" type="button" class="badge badge-primary">${element.status}</a></td>
                <td class="text-center">
                    <a href="#" data-toggle="modal" data-target="#resetPasswordModal" onclick="resetPassword('${element.no-1}')" class="badge badge-warning text-uppercase"><i class="fas fa-key"></i>&nbsp;Reset Password</a><br />
                    <a href="#" class="badge badge-primary text-uppercase"  data-bs-toggle="modal" data-bs-target="#editUserModal" onclick="editUser('${element.no-1}')"><i class="fas fa-edit"></i>&nbsp;Edit Detail</a>
                </td>
            </tr>
            `;
        }
        else{
            output += `
            <tr>
                <td>${element.no}</td>
                <td>${element.id_user}</td>
                <td>${element.name}</td>
                <td>${element.email}</td>
                <td>${element.phone_number}</td>
                <td>${element.member}</td>
                <td class="text-center"><a onclick="active('${element.no-1}')" type="button" class="badge badge-danger">${element.status}</a></td>
                <td class="text-center">
                    <a href="#" data-toggle="modal" data-target="#resetPasswordModal" onclick="resetPassword('${element.no-1}')" class="badge badge-warning text-uppercase"><i class="fas fa-key"></i>&nbsp;Reset Password</a><br />
                    <a href="#" class="badge badge-primary text-uppercase"  data-bs-toggle="modal" data-bs-target="#editUserModal" onclick="editUser('${element.no-1}')"><i class="fas fa-edit"></i>&nbsp;Edit Detail</a>
                </td>
            </tr>
            `;
        }
        
    
    });
    
    const bodyTable = document.getElementById("bodyTable-user");
    bodyTable.innerHTML = output;
}

function editUser(no){
    fetch("user.json")
    .then((response) => response.json())
    .then((json) => {
        document.getElementById('id_user').value=json[no].id_user;
        document.getElementById('name').value=json[no].name;
        document.getElementById('email').value=json[no].email;
        document.getElementById('phone_number').value=json[no].phone_number;
        document.getElementById('member').value=json[no].member;
        document.getElementById('status').value=json[no].status;
    })

    // handling error
    .catch((err) => console.log(err));
}

function resetPassword(no){
    fetch("user.json")
    .then((response) => response.json())
    .then((json) => {
        swal({
            title: "Are you sure to reset password?",
            text: "You won't be able to revert this!",
            icon: "warning",
            dangerMode: true,
            buttons: true,
        })
        .then((reset) => {
            if (reset) {
                swal("Password Reset!", "", "success");
            }
        });
    })
    // handling error
    .catch((err) => console.log(err));
}

function deactive(no){
    fetch("user.json")
    .then((response) => response.json())
    .then((json) => {
        swal({
            title: "Are you sure you want to deactivate the user?",
            text: "You won't be able to revert this!",
            icon: "warning",
            dangerMode: true,
            buttons: true,
        })
        .then((reset) => {
            if (reset) {
                swal("User has been deactived!", "", "success");
            }
        });
    })
    // handling error
    .catch((err) => console.log(err));
}

function active(no){
    fetch("user.json")
    .then((response) => response.json())
    .then((json) => {
        swal({
            title: "Are you sure you want to activate the user?",
            text: "You won't be able to revert this!",
            icon: "warning",
            dangerMode: true,
            buttons: true,
        })
        .then((reset) => {
            if (reset) {
                swal("User has been actived!", "", "success");
            }
        });
    })
    // handling error
    .catch((err) => console.log(err));
}

