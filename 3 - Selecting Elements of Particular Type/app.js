const list = document.getElementsByTagName('li');
const notOrange = document.getElementsByClassName('not-orange');
console.log(list);

for(let i=0; i <list.length; i++) {
    list[i].style.color = "orange";
}

for(let i=0; notOrange.length; i++) {
    notOrange[i].style.color = "red";
}