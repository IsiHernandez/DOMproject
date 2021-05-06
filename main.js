const header = document.querySelector('#page-header');

header.innerText = 'New DOM Layout';
header.classList.remove("bg-dark");
header.classList.add("bg-success");

const p = document.querySelector('#para1');

p.innerText = 'The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.';

const p2 = document.querySelector('#para2');

p2.innerText = 'The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.';

const button = document.querySelector('#btn');
const paragraph = document.querySelector('#para4');

button.addEventListener('click', () => {
    paragraph.innerText= 'The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.';
})

const cards = document.querySelectorAll('.card-body')

let array = ['bg-danger', 'bg-primary', 'bg-warning', 'bg-success', 'bg-dark'];

for (let i=0; i<cards.length; i++) {
    cards[i].classList.add(array[i]);
}