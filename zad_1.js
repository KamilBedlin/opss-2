//zad.1
document.querySelector('h1').nodeType;

let p = document.getElementById('contact');
let tab = [];
for(let key in p){
	tab.push(key);
}
console.log(tab.sort());

document.getElementById('about').innerHTML;

//zad.2
let p = document.createTextNode('nowy paragraf');
let newp = document.createElement('p');
newp.appendChild(p);
document.querySelector('p').insertAdjacentElement('afterend', newp);

//zad.3
let li = document.createElement('li');
let a = document.createElement('a');
li.appendChild(a);
let umk = document.createTextNode('umk');
a.appendChild(umk);
a.href = "https://www.umk.pl/";
document.querySelector('li').nextElementSibling.insertAdjacentElement('afterend', li);

//zad.4
let banner = document.getElementById('banner');
banner.parentNode.removeChild(banner);

//zad.5
let body_tags = document.querySelectorAll("body > *");

function reverseText(text) { 
    return text.split('').reverse().join(''); 
}

function findAndReverse(tags) {                  
    let subtags = tags.querySelectorAll("*");

    if (subtags.length == 0) {
        tags.innerText = reverseText(tags.innerText); 
    } else {
        subtags.forEach(tag => {
            findAndReverse(tag); 
        });
    }
}

body_tags.forEach(tag => {        
    findAndReverse(tag);
});

let force_links = document.querySelectorAll("#contact > ul > li > a");
force_links.forEach(tag => {                       
    tag.innerText = reverseText(tag.innerText);
});

let last_link = document.querySelector("#contact > ul > li:last-child");
last_link.innerText = reverseText(last_link.innerText);