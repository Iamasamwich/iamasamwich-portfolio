const addButtonListeners = () => {
  const buttons = document.querySelectorAll('button');
  for (const button of buttons) {
    const id = button.getAttribute('id');
    // console.log(target);
    button.addEventListener('click', (e) => {
      const target = document.querySelector(`.${e.target.id}`)
      console.log(target);
      target.scrollIntoView();
    });
  };
};

const addContactListeners = () => {
  const email = document.querySelector('#email');
  const phone = document.querySelector('#phone');

  console.log(email);
  console.log(phone);

  email.addEventListener('click', () => {
    window.open('mailto:sam@iamasamwich.com', '_blank');
  });

  phone.addEventListener('click', () => {
    window.open('tel:0447464726', '_blank');
  });
};



addButtonListeners();
addContactListeners();
