const button = document.querySelector('button');
const hexadecimal = document.getElementById('hexadecimal');

button.addEventListener('click', () => {

  let simbols = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {

    color = color + simbols[Math.floor(Math.random() * 16)]

  }

  document.body.style.backgroundColor = color;
  document.getElementById('hexadecimal').textContent = color;
  document.getElementById('text').innerHTML = 'Copiar color';

})

hexadecimal.addEventListener('click', () => {

  let aux = document.createElement('input');
  aux.setAttribute('value', document.getElementById('hexadecimal').innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand('copy');
  document.body.removeChild(aux);
  document.getElementById('text').innerHTML = '¡Texto copiado!';
})









/*
new Date(year,month,day,hours,minutes,seconds,ms)
const d = new Date(2019, 3, 24, 10, 33, 30);
*/




/*
/*
const boton1 = document.getElementById('order');
const boton2 = document.getElementById('noOrder');

const point = [10,5,25,21,100];
document.getElementById('demo').innerHTML = point;

/*boton1.onclick = function myFunction1(){
  point.sort();
  document.getElementById('demo').innerHTML = point;
}*/

/*
boton1.onclick = function myFunction1(){
  point.sort(function(){return 0.5 - Math.random()});
  document.getElementById('demo').innerHTML = point;
}


boton2.onclick = function myFunction2(){
  point.sort(function(a,b){return a - b})
  document.getElementById('demo').innerHTML = point;
}*/


/*
const point = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = myArrayMax(point);

function myArrayMax(arr) {
  return Math.min.apply(null, arr); // or Math.max.appyly(mull, arr);
}*/

/*
const point = [40, 100, 1, 5, 25, 10];
point.sort(function(a, b){return a-b});
document.getElementById("demo").innerHTML = point[0];
*/

/************
click.onclick = function myFunction1() {
  for (let i = point.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = point[i];
    point[i] = point[j];
    point[j] = k;
  }

  document.getElementById('demo').innerHTML = point;

}*/
