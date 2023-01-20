

const app = document.querySelector('.app');

const chooseLevel = document.createElement('div');
app.appendChild(chooseLevel); 

window.application = {};

function renderLevel() {

  chooseLevel.className = chooseLevel

  const box = document.createElement('div');
  box.className = 'box';

  const title = document.createElement('h1');
  title.className = 'title';
  title.textContent = 'Выбери сложность';

  const level = document.createElement ('div');
  level.className = 'level';


  const choose = document.createElement('div');
  choose.className = 'choose';
  choose.textContent = '1';

  const choose2 = document.createElement('div');
  choose2.className = 'choose2';
  choose2.textContent = '2';

  const choose3 = document.createElement('div');
  choose3.className = 'choose3';
  choose3.textContent = '3';

  const button = document.createElement('button');
  button.className = 'button';
  button.textContent = 'Старт'

  chooseLevel.appendChild(box);
  box.appendChild(title);
  box.appendChild(level);
  level.appendChild(choose);
  level.appendChild(choose2);
  level.appendChild(choose3); 
  box.appendChild(button);
  
 
  
  

}

renderLevel();



import './style.css';