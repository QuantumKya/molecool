const periodicTable = document.getElementById('periodic_table');
const textbox = document.getElementById('textbox');

let loaded = false;
let data = {};

fetch('elements.json')
    .then(res => res.json())
    .then(json => { loaded = true; data = json; })
    .catch(err => console.error('Error fetching elements\' JSON', err));

const activateTextBox = (e) => {
    const div = e.target;
    const elemSymbol = div.innerHTML;

    const rect = div.getBoundingClientRect();
    const centerx = (rect.left + rect.right) / 2;
    const centery = (rect.top + rect.bottom) / 2;

    const toohigh = centery < 0.35 * window.innerHeight;

    textbox.style.display = 'block';
    textbox.textContent = loaded ? data[elemSymbol] : 'Loading...';
    textbox.style.left = `${centerx}px`;
    textbox.style.top = `${centery}px`;
    textbox.style.translate = `-50% ${toohigh?'40%':'-140%'}`;
};

const deactivateTextBox = (e) => {
    textbox.style.display = 'none';
    textbox.textContent = '';
};

for (const d of periodicTable.querySelectorAll('div'))
    for (const di of d.querySelectorAll('div'))
        for (const div of di.querySelectorAll('div')) {
            div.addEventListener('mouseenter', activateTextBox);
            div.addEventListener('mouseleave', deactivateTextBox);
        }