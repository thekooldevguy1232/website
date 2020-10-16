//let colors = [‘#9be9a8’, ‘#216e39’, ’#FFFFFF’];
let colors = ['green','orange','yellow'];

document.querySelectorAll('rect')
.forEach((item) => {
     item.setAttribute('fill’,colors[Math.floor(Math.random()*3)]);
     })