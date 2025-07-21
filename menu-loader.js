/**
 * Inicializa o menu do site.
 * @param {Object} config - JSON do menu.config.json
 * @param {string} containerId - ID do container onde o menu será renderizado
 */
export function initMenu(config, containerId = 'main-menu') {
  const container = document.getElementById(containerId);
  const nav = document.createElement('nav');
  nav.classList.add('menu');

  config.menuItems.forEach(item => {
    const link = document.createElement('a');
    link.href = item.path;
    link.textContent = item.label;
    link.classList.add('menu-item');
    nav.appendChild(link);
  });

  const toggle = document.createElement('button');
  toggle.classList.add('menu-toggle');
  toggle.textContent = '☰';
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  container.appendChild(toggle);
  container.appendChild(nav);
}
