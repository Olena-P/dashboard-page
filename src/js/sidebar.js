const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.querySelector('.sidebar');

function updateSidebarState() {
  const isExpanded = sidebar.classList.contains('active');
  sidebarToggle.setAttribute('aria-expanded', isExpanded.toString());
}

sidebarToggle.addEventListener('click', function () {
  sidebar.classList.toggle('active');
  updateSidebarState();
});

const sidebarClose = document.getElementById('sidebarClose');
sidebarClose.addEventListener('click', function () {
  sidebar.classList.remove('active');
  updateSidebarState();
});

const menuItems = document.querySelectorAll('.sidebar__item a');

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', (event) => {
    event.preventDefault();

    // Видалити клас 'sidebar__item--active' у всіх sidebar__item
    const sidebarItems = document.querySelectorAll('.sidebar__item');
    sidebarItems.forEach((item) =>
      item.classList.remove('sidebar__item--active')
    );

    // Додати клас 'sidebar__item--active' до батьківського елемента
    const parentItem = menuItem.closest('.sidebar__item');
    parentItem.classList.add('sidebar__item--active');

    const targetSectionId =
      menuItem.getAttribute('href').substring(1) + '-section';

    const sections = document.querySelectorAll('.content-section');
    sections.forEach((section) => section.classList.remove('active'));

    const targetSection = document.getElementById(targetSectionId);
    if (targetSection) {
      targetSection.classList.add('active');
    }

    sidebar.classList.remove('active');
    updateSidebarState();
  });
});
