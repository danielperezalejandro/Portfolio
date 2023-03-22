const header = document.querySelector('header');
console.log(header);
const section = document.querySelector('section');
const requestURL ='clases.json';

const request = new XMLHttpRequest();
request.open('GET',requestURL);


request.responseType = 'json';
request.send();

request.onload = function() {
    const entrenos = request.response;
    populateHeader(entrenos);
    showHeroes(entrenos);
  }

function populateHeader(jsonObj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['clases'];
    header.appendChild(myH1);
}

function showHeroes(jsonObj) {
    const entrenos = jsonObj['entrenos'];
  
    for (var i = 0; i < entrenos.length; i++) {
      
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myList = document.createElement('ul');
      const myPara9 = document.createElement('img');
  
      myH2.textContent = entrenos[i].titulo;
      const superPowers = entrenos[i].lenguajes;
      myPara1.textContent = 'Lenguajes:';

      
      for (var j = 0; j < superPowers.length; j++) {
        const listItem = document.createElement('li');
        listItem.textContent =superPowers[j];
        myList.appendChild(listItem);
      }
      myPara9.src = entrenos[i].img;


      myArticle.appendChild(myPara9);
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myList);
      
      
  
      section.appendChild(myArticle);
      
    }
  }