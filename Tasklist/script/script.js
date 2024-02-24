// local storage
const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []

console.log(itemsArray);

document.querySelector('.input-title').addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        // menyiapkan data waktu dari new Date()
        let date = new Date()
        date = date.toString().split(' ')

        // translate hari ke bahasa
        let translateDay = ''
        if (date[0] == 'Sun') {
            translateDay = 'Min' 
        } else if (date[0] == 'Mon') {
            translateDay = 'Sen' 
        } else if (date[0] == 'Tue') {
            translateDay = 'Sel' 
        } else if (date[0] == 'Wed') {
            translateDay = 'Rab' 
        } else if (date[0] == 'Thu') {
            translateDay = 'Kam' 
        } else if (date[0] == 'Fri') {
            translateDay = 'Jum' 
        } else if (date[0] == 'Sat') {
            translateDay = 'Sab' 
        };

        const displayDate = `${translateDay}, ${date[2]} ${date[1]} ${date[3]}`
        // function displayDate () {
        //     return `${date[0]}, ${date[2]} ${date[1]} ${date[3]}`
        // }
            console.log(displayDate) 
        // menyiapkan data judul hasil input
        const item = document.querySelector('.input-title')
        // menyiapkan data deskripsi hasil input
        const description = document.querySelector('.input-description')
        
        // masukan data tanggal, judul dan deskp kedalam function
        createItem(displayDate, item.value, description.value)
    }
});
document.querySelector('.input-description').addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        // menyiapkan data waktu dari new Date()
        let date = new Date()
        date = date.toString().split(' ')

        // translate hari ke bahasa
        let translateDay = ''
        if (date[0] == 'Sun') {
            translateDay = 'Min' 
        } else if (date[0] == 'Mon') {
            translateDay = 'Sen' 
        } else if (date[0] == 'Tue') {
            translateDay = 'Sel' 
        } else if (date[0] == 'Wed') {
            translateDay = 'Rab' 
        } else if (date[0] == 'Thu') {
            translateDay = 'Kam' 
        } else if (date[0] == 'Fri') {
            translateDay = 'Jum' 
        } else if (date[0] == 'Sat') {
            translateDay = 'Sab' 
        };

        const displayDate = `${translateDay}, ${date[2]} ${date[1]} ${date[3]}`
        // function displayDate () {
        //     return `${date[0]}, ${date[2]} ${date[1]} ${date[3]}`
        // }
            console.log(displayDate) 
        // menyiapkan data judul hasil input
        const item = document.querySelector('.input-title')
        // menyiapkan data deskripsi hasil input
        const description = document.querySelector('.input-description')
        
        // masukan data tanggal, judul dan deskp kedalam function
        createItem(displayDate, item.value, description.value)
    }
});

// perintah pada tombol selesai/enter
document.querySelector('.btn-selesai').addEventListener("click", () => {
    // menyiapkan data waktu dari new Date()
    let date = new Date()
    date = date.toString().split(' ')

    // translate hari ke bahasa
    let translateDay = ''
    if (date[0] == 'Sun') {
        translateDay = 'Min' 
    } else if (date[0] == 'Mon') {
        translateDay = 'Sen' 
    } else if (date[0] == 'Tue') {
        translateDay = 'Sel' 
    } else if (date[0] == 'Wed') {
        translateDay = 'Rab' 
    } else if (date[0] == 'Thu') {
        translateDay = 'Kam' 
    } else if (date[0] == 'Fri') {
        translateDay = 'Jum' 
    } else if (date[0] == 'Sat') {
        translateDay = 'Sab' 
    };

    const displayDate = `${translateDay}, ${date[2]} ${date[1]} ${date[3]}`
    // function displayDate () {
    //     return `${date[0]}, ${date[2]} ${date[1]} ${date[3]}`
    // }
        console.log(displayDate) 
    // menyiapkan data judul hasil input
    const item = document.querySelector('.input-title')
    // menyiapkan data deskripsi hasil input
    const description = document.querySelector('.input-description')
     
    // masukan data tanggal, judul dan deskp kedalam function
    createItem(displayDate, item.value, description.value)
})

// function itemAll () {

// }
// fungsi createItem saat tombol selesai di-klik, untuk memasukan data input ke dalam itemsArray di local storage
function createItem(date, item, description) {
    const Item = {
        date : date ,
        title : item ,
        description : description
    } 
    itemsArray.push(Item)
    localStorage.setItem("items",JSON.stringify(itemsArray))
    location.reload()
};

function editItem (text, i) {
    const objectOfData = itemsArray[i]
//    logika untuk hasil dari editanya
    if ( text.title.length == 0) {
        itemsArray[i] = itemsArray[i]
    }  else {objectOfData.title = text.title}
        
    if ( text.description.length == 0) {
        itemsArray[i] = itemsArray[i]
    }  else {objectOfData.description = text.description}
     
    itemsArray[i] = objectOfData    
    localStorage.setItem("items",JSON.stringify(itemsArray))
    location.reload()
};


// fungsi untuk menampilkan data dari local storage berupa array dgn looping
function displayItems() {
    let items = '';
    itemsArray.forEach((e,i) => {
        const objectOfData = itemsArray[i]
        // console.log(objectOfData)
        items +=    `<div class="tasklist-row">
                        <div class="tasklist">
                            <div class="task-date">${objectOfData.date}</div>
                            <div class="task-title">${objectOfData.title}</div>
                            <div class="task-description">${objectOfData.description}</div>
                        </div>
                        <i class="fa-solid fa-trash-can"></i>
                        <i class="fa-solid fa-pen-to-square"></i>

                        <div class="edit-section">
                        <div class="edit-text">Edit judul</div>
                        <input type="text" placeholder="${objectOfData.title}" class="edit-title-input">    

                        <div class="edit-description-text">Edit Deskripsi</div>       
                        <input type="text" placeholder="${objectOfData.description}" class="edit-description-input"> 
                        <br>
                        <i class="fa-solid fa-check"></i>
                        <i class="fa-solid fa-x"></i>

                        </div>      
                        
                    </div>` 
    });
    // memasukan datanya ke html
    document.querySelector('.tasklist-container').innerHTML = items

    activateDeleteListener();
    activateEditListener();

    activateSaveAfterEditListener();
    cancelEditListener();
};



function activateDeleteListener() {
    let deleteBtn = document.querySelectorAll('.fa-trash-can')
    deleteBtn.forEach((e,i) => {
        e.addEventListener("click" , () => { deleteItem(i) })
    });
};

function activateEditListener () {
    const editBtn = document.querySelectorAll('.fa-pen-to-square')
    const editSection = document.querySelectorAll('.edit-section')
    editBtn.forEach((e,i) => {
        e.addEventListener("click", () => {
            editSection[i].classList.toggle('edit-section-toggle');
            // editSection[i].style.display = "block"

        })

        document.addEventListener('click', function(e){
            if(!editBtn[i].contains(e.target) && !editSection[i].contains(e.target)) {
                editSection[i].classList.remove('edit-section-toggle');
            }
        })
    });

};

function activateSaveAfterEditListener () {
    const saveEditBtn = document.querySelectorAll('.fa-check');
    const editTitle = document.querySelectorAll('.edit-title-input')
    const editDescription = document.querySelectorAll('.edit-description-input')
   
    saveEditBtn.forEach((e,i) => {
        e.addEventListener("click", () => { 
            const editInput = {
                title : editTitle[i].value,
                description : editDescription[i].value
            }
            console.log(editInput)
            editItem(editInput, i);

        })
    });
};

function cancelEditListener () {
    const cancelEdit = document.querySelectorAll('.fa-x')
    const editSection = document.querySelectorAll('.edit-section')
    cancelEdit.forEach((e,i) => {
        e.addEventListener("click", () => {
            editSection[i].classList.toggle('edit-section-toggle');
        })
    })
};


function deleteItem(i) {
    itemsArray.splice(i, 1)
    localStorage.setItem("items",JSON.stringify(itemsArray))
    location.reload()
};


window.onload = function() {
displayItems()
};