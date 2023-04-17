document.querySelector('.btn-menu').addEventListener('click', () => {
    document.querySelector('.hidden-menu').classList.toggle('active');
    document.querySelector('.first').classList.toggle('active');
    document.querySelector('.third').classList.toggle('active');
    document.querySelector('.close-menu').classList.toggle('close-menu-active');
  })
  // а тут мы вешаем на кнопку close-menu событие которое пр кликена кнопку
  // удаляет menu_mobile  класс  active
  
  document.querySelector('.close1').addEventListener('click', () => {
    document.querySelector('.hidden-menu').classList.remove('active');
    document.querySelector('.close-menu').classList.remove('close-menu-active')
  
  });
  document.querySelector('.close2').addEventListener('click', () => {
    document.querySelector('.hidden-menu').classList.remove('active');
    document.querySelector('.close-menu').classList.remove('close-menu-active')
  
  });
  document.querySelector('.close3').addEventListener('click', () => {
    document.querySelector('.hidden-menu').classList.remove('active');
    document.querySelector('.close-menu').classList.remove('close-menu-active')
  
  });
  document.querySelector('.close4').addEventListener('click', () => {
    document.querySelector('.hidden-menu').classList.remove('active');
    document.querySelector('.close-menu').classList.remove('close-menu-active')
  
  });
  document.querySelector('.close5').addEventListener('click', () => {
    document.querySelector('.hidden-menu').classList.remove('active');
    document.querySelector('.close-menu').classList.remove('close-menu-active')
  
  });
