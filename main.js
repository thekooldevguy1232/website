let navContainer = document.querySelector('.navparent');
let searchBox = document.getElementById('searchfield');
let search = document.getElementById('search');
let ulList = document.querySelector('.listclass');
let addBookBtn = document.querySelector('.add #addbtn');



//######### to filter the data through the search field ##########
searchBox.addEventListener('keyup', (e) => {
    //console.log(e.target.value);
    let searchVal = e.target.value.toLowerCase();
    let list = document.querySelectorAll('.listclass li');
    list.forEach((listItem) => {
        if (!(listItem.innerText.toLowerCase().indexOf(searchVal) !== -1) && searchVal) {
            listItem.classList.add('remove');
        } else {
            listItem.classList.remove('remove');
        }
    })
})


//########## To shuffle throught the tabs to get the hide and show the tabs #########
navContainer.addEventListener('click', (e) => {
    console.log(e.target.innerText);

    if (e.target.tagName === 'LI') {
        let tab = document.getElementsByClassName('pages');
        Array.from(tab).forEach((item) => {
            if (item.getAttribute('id') === e.target.getAttribute('data-target')) {
                item.classList.add('active')
            } else {
                item.classList.remove('active');
            }
        })
    }
});


// ####### delete the items from with in the list
ulList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        //console.log('clicked');
        let parent = e.target.parentElement;
        parent.remove();
    }
})


// ####### Add the book to the list
addBookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let id = document.getElementById('add-field');
    if (id.value) {
        let liElement = document.createElement('li');
        let textSpan = document.createElement('span');
        let deletebtn = document.createElement('button');

        deletebtn.innerText = 'delete';
        textSpan.textContent = id.value;

        liElement.appendChild(textSpan);
        liElement.appendChild(deletebtn);

        ulList.appendChild(liElement);
        id.value = '';
    }
})




