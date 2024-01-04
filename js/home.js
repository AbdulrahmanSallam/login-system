const logOutBtn = document.getElementById('logOutBtn');
const h1 = document.getElementById('h1');


logOutBtn.addEventListener('click',function(){
    location = './index.html';
})

let name = 'Welcome ' + sessionStorage.getItem('name');

h1.innerHTML = name;


