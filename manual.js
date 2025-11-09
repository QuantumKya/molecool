const manualContents = {
    'edit': {
        'move': "Click and drag an atom to move it and others connected to it!\nHold Shift to only move one atom at once.",
        'add atom': "Click in the position you want the new atom and select which one to create.",
        'delete atom': "Click on an atom to delete it and its bonds.",
        'bond': "Create a covalent bond between two atoms.\nClick on one atom, then click on another to bond the two. Change it to a double (or triple!) bond by right clicking while choosing the second atom.",
        'unbond': "Destroy a covalent bond between two atoms.\nJust click on the bond you want to destroy (on the black line).",
    },
    'organize': {
        'rotate one': "Rotate an atom around another atom, keeping the distance the same.\nRight click on the pivot atom, then on the atom to be rotated, and finally, right click to select the angle. Snap to discrete angles by holding Shift while choosing the angle.",
        'rotate all': "Rotate every neighbor of a certain atom by the same angle.\nRight click on the pivot atom, then on a second atom. This \"anchor\" atom will be the one to move to the angle you select, the others rotating accordingly.",
        'same distance': "Set every atom connected to a certain other atom to be the same distance from it.\nRight click on the central atom, then on the atom whose distance from the center the others should take on.",
        'equally angled': "Angle every atom connected to a certain other atom to be of a constant angle between each other. Each will be one-nth of the way around.\nRight click on the central atom, then on the atom who will go to the angle you select, the others will rotate accordingly.",
        't intersection': "Organize three atoms around a central one to form a T-shaped intersection.\nRight click on the central atom, then on a second atom. This \"anchor\" atom will be the center, left, or right of the intersection depending on what the bend index is. 0 is center, -1 is left, and 1 is right. Left click while selecting to change the bend index.",
    }
}

function updateLeftManual() {
    const mode = dropdowns['edittools'];

    const manual = document.getElementById('editmanual');

    manual.querySelector('h2').innerHTML = `Left Click — ${toTitle(mode)}`;
    manual.querySelector('p').innerHTML = manualContents.edit[mode];
}

function updateRightManual() {
    const mode = dropdowns['organizeoptions'];

    const manual = document.getElementById('organizemanual');

    manual.querySelector('h2').innerHTML = `Right Click — ${toTitle(mode)}`;
    manual.querySelector('p').innerHTML = manualContents.organize[mode];
}