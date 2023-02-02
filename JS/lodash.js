import { tech } from './data/tech.js';
import { users } from './data/users.js';

const refs = {
    input: document.querySelector('#filter'),
    list: document.querySelector('.js-list'),
};

const listItemMarkup = createListItemMarkup(tech);
refs.list.innerHTML = listItemMarkup;

const currentValueInput = refs.input.addEventListener(
    'input',
    _.throttle(onCurrentValueInput, 1000),
);

function createListItemMarkup(items) {
    return items.map(item => `<li>${item.label}</li>`).join('');
}

function onCurrentValueInput(evt) {
    const filter = evt.target.value.toLowerCase();

    const filterWithInput = tech.filter(item =>
        item.label.toLowerCase().includes(filter),
    );

    const listItemMarkup = createListItemMarkup(filterWithInput);

    refs.list.innerHTML = listItemMarkup;
}

//------------------NAME-------------

const refsName = {
    inputName: document.querySelector('.filter-name'),
    listName: document.querySelector('.js-list__name'),
};

refsName.inputName.addEventListener(
    'input',
    _.throttle(onEnterNameInput, 1000),
);

const listNameMarkup = markupNames(users);

refsName.listName.insertAdjacentHTML('beforeend', listNameMarkup);
// refsName.listName.innerHTML = listNameMarkup;

function markupNames(arr) {
    return arr.map(item => `<li>${item} Users</li>`).join('');
}

function onEnterNameInput(evt) {
    refsName.listName.innerHTML = '';
    const value = evt.target.value.toUpperCase();

    const findUser = users.filter(name => name.toUpperCase().includes(value));

    refsName.listName.insertAdjacentHTML('beforeend', markupNames(findUser));
}
