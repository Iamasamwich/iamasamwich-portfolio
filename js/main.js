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
