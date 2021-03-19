// Dom Manipulatation Node

// buat elemen baru
const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('Paragraf Baru');
//simpan tulisan ke dalam paragraf
pBaru.appendChild(textPBaru);
//simpan pBaru di akhir section A
const sectionA= document.getElementById('a');
sectionA.appendChild(pBaru);




//contoh  node.insertBefore
const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('Item Baru');
// node.appendChild
liBaru.appendChild(textLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);


//cara menghapus child parent.removeChild
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

//cara mengganti node
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('marquee');
const textH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(textH2Baru);

//node baru h2 baru mereplace p4
sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';

