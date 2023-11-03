document.addEventListener('DOMContentLoaded', function () {
  let menuItems = document.querySelectorAll('.menu a');
  let tabs = document.querySelectorAll('.tabs .tab');

  menuItems.forEach((menuItem, index) => {
    menuItem.addEventListener('click', function (event) {
      event.preventDefault();

      menuItems.forEach(item => item.classList.remove('active'));
      tabs.forEach(tab => tab.classList.remove('active'));

      menuItem.classList.add('active');
      tabs[index].classList.add('active');
    });
  });
});
