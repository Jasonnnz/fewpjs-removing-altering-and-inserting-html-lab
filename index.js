let mainNode = document.querySelector('main#main');
mainNode.remove();

// let newHeader = document.querySelector('h1#victory');
let newHeader = document.createElement('h1');
document.body.appendChild(newHeader);

let name = 'Jason';
newHeader.id = 'victory';
newHeader.innerHTML = `${name}is the champion`;