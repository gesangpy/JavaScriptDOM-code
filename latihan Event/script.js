// DOM Event
const p3 = document.querySelector('.p3');

function ubahWarnaP2() {
    p2.style.backgroundColor = 'lightblue';    
}
function ubahWarnaP3() {
    p3.style.backgroundColor = 'lightblue';    
}
//event hadler
const p2 = document.querySelector('.p2');
// p2.onclick= ubahWarnaP2;

//contoh addEventListener

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
    //ambil parent
    const ul = document.querySelector('section#b ul');
    //di rangkai
    const libaru = document.createElement('li');
    const textLiBaru = document.createTextNode('item baru');
    libaru.appendChild(textLiBaru);
    // simpan didalam ul
    ul.appendChild(libaru);
});

