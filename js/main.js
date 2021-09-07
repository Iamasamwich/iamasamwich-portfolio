const addButtonListeners = () => {
  const buttons = document.querySelectorAll('button');
  for (const button of buttons) {
    const id = button.getAttribute('id');
    button.addEventListener('click', (e) => {
      const target = document.querySelector(`.${e.target.id}`)
      target.scrollIntoView();
    });
  };
};

const addContactListeners = () => {
  const email = document.querySelector('#email');
  const phone = document.querySelector('#phone');

  email.addEventListener('click', () => {
    window.open('mailto:sam@iamasamwich.com', '_blank');
  });

  phone.addEventListener('click', () => {
    window.open('tel:0447464726', '_blank');
  });
};

addButtonListeners();
addContactListeners();

const removeIntro = () => {
  document.querySelector('#container').removeChild(document.querySelector('#intro'));
  document.querySelector('#navbar').style.display = 'flex';
  document.querySelector('#content').style.display = 'flex';
};

const typeIntro = () => {
  
  const text = ("console.log(\"Hi, I'm Sam\");").split('');

  const introTyping = document.createElement('div')
  introTyping.classList.add('intro-typing');
  document.querySelector('#intro').appendChild(introTyping);
  
  let count = 0;

  const addLetter = () => {
  };
  addLetter();
  
};

const runIntro = () => {
  const container = document.querySelector('#container');
  const intro = document.createElement('div');
  //hide navbar
  document.querySelector('#navbar').style.display = 'none';
  document.querySelector('#content').style.display = 'none';
  intro.setAttribute('id', 'intro');
  container.appendChild(intro);

  //add click to dismiss

  intro.addEventListener('click', () => {
    removeIntro();
  });

  typeIntro();

};

runIntro();
