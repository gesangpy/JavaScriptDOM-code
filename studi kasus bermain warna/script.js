//menangkap element
const tUbah = document.getElementById('tUbahWarna');
tUbah.onclick = function(){
    // document.body.style.backgroundColor = "lightBlue";
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');    
}

const acakWarna = document.createElement('button');
const textTombol = document.createTextNode('acak Warna');
acakWarna.appendChild(textTombol);
acakWarna.setAttribute('tyoe', 'button');
tUbah.after(acakWarna);

acakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 * 1);
    const g = Math.round(Math.random() * 255 * 1);
    const b = Math.round(Math.random() * 255 * 1);
    console.log(r);
    document.body.style.backgroundColor = 'rgb('+ r +','+g+','+b+')';
});


const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
sMerah.addEventListener('input', function(){
    const r = sMerah.value;
      const g = sHijau.value;
      const b = sBiru.value
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';

});

sHijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';


});
sBiru.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';


});

document.body.addEventListener('mousemove', function(event){
    //posisi mouse
   //console.log(event.clientX) ;
   //ukuran browser
   //console.log(window.innerWidth);
   const xPos = Math.round(event.clientX / window.innerWidth) * 255;
   const yPos = Math.round(event.clientY / window.innerHeight) * 255;

   document.body.style.backgroundColor = 'rgb('+xPos+', '+yPos+', 100)';

  

});





