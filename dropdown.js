const dropdowns = {};

function adddropdown(nodeid, autoclose = false, display = false, defaultValue = 'none') {
    const dropdowndiv = document.getElementById(nodeid);
    const dropdownbox = dropdowndiv.querySelector('.dropdown-box');

    dropdownbox.childNodes.forEach((node) => {
        node.addEventListener('mousedown', (e) => {
            const value = e.target.innerHTML.toLowerCase();

            dropdowns[nodeid] = value;
            console.log(dropdowns[nodeid]);

            [...dropdownbox.children].forEach(
                (option) => option.classList.toggle('dropdown-item-selected', dropdowns[nodeid] === option.innerHTML.toLowerCase())
            );
            
            if (display) {
                const display = dropdowndiv.querySelector('.dropdown-display');
                display.innerHTML = `Selected: <i>${toTitle(e.target.innerHTML)}</i>`;
            }
            if (autoclose) setTimeout(() => dropdown(nodeid), 150);
        });
    });

    dropdowns[nodeid] = defaultValue;
    if (display) {
        const display = dropdowndiv.querySelector('.dropdown-display');
        display.innerHTML = `Selected: <i>${toTitle(defaultValue)}</i>`;
    }
}

function dropdown(nodeid) {
    const dropdowndiv = document.getElementById(nodeid);
    const dropdowncontent = dropdowndiv.querySelector('.dropdown-box');
    dropdowncontent.classList.toggle('dropdown-show');
    
    if (nodeid === 'edittools') updateLeftManual();
    if (nodeid === 'organizeoptions') updateRightManual();
}

function addAtomDropdown() {
    const atombox = document.getElementById('atom-dropdown-box');
    for (const atom of Object.keys(ATOMS)) {
        const span = document.createElement('span');
        span.className = 'dropdown-item';
        span.innerHTML = toTitle(atom);
        atombox.appendChild(span);
    }

    adddropdown('atomoptions', true, false);
}


const atomDropdownHandler = (e) => {
    addingAtom = false;
    const selectedAtom = dropdowns['atomoptions'];
    if (selectedAtom !== 'none') {
        mol.atoms.push(new Atom(ATOMS[selectedAtom], getMousePos()));
        [...document.querySelector('#atom-dropdown-box').children].forEach(
            (option) => option.classList.toggle('dropdown-item-selected', false)
        );
        saveChange();
    }

    const atomdropdown = document.getElementById('atomoptions');
    atomdropdown.querySelector('.dropdown-box').childNodes.forEach((child) => {
        child.removeEventListener('mousedown', atomDropdownHandler);
    });
}

function atomDropdown() {
    const atomdropdown = document.getElementById('atomoptions');
    const canvas = document.querySelector('canvas').getBoundingClientRect();
    
    const mp = getMousePos().clone().divide(CANVASSIZE).multiply(new Victor(canvas.width, canvas.height));
    const x = mp.x + canvas.left;
    const y = mp.y + canvas.top;
    
    atomdropdown.style.left = `${x}px`;
    atomdropdown.style.top = `${y}px`;
    
    atomdropdown.querySelector('button').click();


    atomdropdown.querySelector('.dropdown-box').childNodes.forEach((child) => {
        child.addEventListener('mousedown', atomDropdownHandler, { once: true });
    });
}

function cancelAtomDropdown() {
    const atomdropdown = document.getElementById('atomoptions');
    atomdropdown.querySelector('button').click();
    atomdropdown.querySelector('.dropdown-box').childNodes.forEach((child) => {
        child.removeEventListener('mousedown', atomDropdownHandler);
    });
}