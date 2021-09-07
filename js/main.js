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
  if (document.querySelector('#intro')) {
    document.querySelector('#container').removeChild(document.querySelector('#intro'));
  };
  document.querySelector('#navbar').style.display = 'flex';
  document.querySelector('#content').style.display = 'flex';
  document.querySelector('footer').style.display = 'block';
  const heading = document.querySelector('.heading')
  heading.scrollIntoView();
};

const typeIntro = () => {
  const text = ("console.log(\"Hi, I'm Sam\");").split('');
  const introBox = document.createElement('div')
  introBox.classList.add('intro-box');
  const typed = document.createElement('h1');
  introBox.appendChild(typed);
  document.querySelector('#intro').appendChild(introBox);

  let addedText = '';
  
  const addText = (i) => {
    const x = 150;
    if (i < text.length) {
      addedText += text[i];
      typed.textContent = '';
      typed.appendChild(document.createTextNode(addedText));
      setTimeout(() => {
        i ++;
        addText(i);
      }, x);
    };
  };

  addText(0);
};

const runIntro = () => {
  const container = document.querySelector('#container');
  const intro = document.createElement('div');
  intro.setAttribute('id', 'intro');
  document.querySelector('#navbar').style.display = 'none';
  document.querySelector('#content').style.display = 'none';
  document.querySelector('footer').style.display = 'none';
  container.appendChild(intro);

  const dismiss = document.createElement('div');
  dismiss.classList.add('dismiss');
  const h2 = document.createElement('h2');
  dismiss.appendChild(h2);
  h2.appendChild(document.createTextNode('*Click anywhere to dismiss*'));
  intro.appendChild(dismiss);
  

  intro.addEventListener('click', () => {
    removeIntro();
  });

  typeIntro();

  setTimeout(() => {
    removeIntro();
  }, 6000);

};

runIntro();
