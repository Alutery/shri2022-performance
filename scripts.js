require('./reset.css');
require('./styles.css');

const tabMap = new Map()
const panelMap = new Map()

function bind(nodes, event, handler) {
    nodes.forEach(node => {
        node.addEventListener(event, handler);
    });
}

function makeTabs() {
    const node = document.querySelector('.main__devices');

    let selected = node.querySelector('.section__tab_active').dataset.id;
    const tabs = node.querySelectorAll('.section__tab');
    const list = Array(tabs.length).fill()
    tabs.forEach((tab, index) => {
        list[index] = tab.dataset.id
    })
    const select = node.querySelector('.section__select');

    function selectTab(newId) {
        let newTab = tabMap.get(newId)
        if (!newTab) {
            newTab = node.querySelector(`.section__tab[data-id=${newId}]`);
            tabMap.set(newId, newTab)
        }

        let newPanel = panelMap.get(newId)
        if (!newPanel) {
            newPanel = node.querySelector(`.section__panel[data-id=${newId}]`);
            panelMap.set(newId, newPanel)
        }

        const oldTab = node.querySelector('.section__tab_active');
        const oldPanel = node.querySelector('.section__panel_active');

        selected = newId;

        oldTab.classList.remove('section__tab_active');
        oldTab.setAttribute('aria-selected', 'false');
        oldTab.removeAttribute('tabindex');
        newTab.classList.add('section__tab_active');
        newTab.setAttribute('aria-selected', 'true');
        newTab.setAttribute('tabindex', '0');
        newTab.focus({
            preventScroll: true
        });

        oldPanel.classList.remove('section__panel_active');
        oldPanel.setAttribute('aria-hidden', 'true');
        newPanel.classList.add('section__panel_active');
        newPanel.setAttribute('aria-hidden', 'false');

        select.value = newId;
    }

    select.addEventListener('input', () => {
        selectTab(select.value);
    });

    bind(tabs, 'click', event => {
        const newId = event.target.dataset.id;
        selectTab(newId);
    });

    bind(tabs, 'keydown', event => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
            return;
        }
        event.preventDefault();

        let index = list.indexOf(selected);
        if (event.which === 37) {
            --index;
        } else if (event.which === 39) {
            ++index;
        } else if (event.which === 36) {
            index = 0;
        } else if (event.which === 35) {
            index = list.length - 1;
        } else {
            return;
        }

        const N = list.length
        index = (index + N) % N

        selectTab(list[index]);
    });
}

function makeMenu() {
    const menu = document.getElementById('header-menu');
    let expanded = false;
    const links = document.getElementById('header-links');

    menu.addEventListener('click', () => {
        expanded = !expanded;
        menu.setAttribute('aria-expanded', expanded.toString());
        menu.querySelector('.header__menu-text').textContent = expanded ? 'Закрыть меню' : 'Открыть меню';
        links.classList.toggle('header__links_opened', expanded);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(makeTabs);
    setTimeout(makeMenu);
});
