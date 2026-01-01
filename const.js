
let CURRENTFRAME = 0;
const FPS = 50;

function getCurrentFrame() { return CURRENTFRAME; }

function getIntOscillation(t, p, min, max) { return Math.floor(min + (1 - Math.cos(2 * Math.PI * t / p)) * (max-min) / 2); }


const CANVASWIDTH = 850;
const CANVASHEIGHT = 850;
const CANVASSIZE = new Victor(CANVASWIDTH, CANVASHEIGHT);

let currentMousePos = new Victor(0, 0);

function getMousePos() { return currentMousePos.clone(); }

let SHIFTING = false;
let CTRLING = false;



const BONDWIDTH = 10;

const shells = [2, 8, 8, 18, 18, 32, 32];

const ELEMENTS = {
    hydrogen: {
        number: 1,
        symbol: 'H',
        valence: 1,
        color: '#ffffff',
    },
    helium: {
        number: 2,
        symbol: 'He',
        valence: 0,
        color: '#ffeded'
    },
    lithium: {
        number: 3,
        symbol: 'Li',
        valence: -1,
        color: '#ecb394'
    },
    beryllium: {
        number: 4,
        symbol: 'Be',
        valence: 2,
        color: '#938a7e'
    },
    boron: {
        number: 5,
        symbol: 'B',
        valence: 3,
        color: '#987a5b'
    },
    carbon: {
        number: 6,
        symbol: 'C',
        valence: 4,
        color: '#505050',
    },
    nitrogen: {
        number: 7,
        symbol: 'N',
        valence: 3,
        color: '#3434d5',
    },
    oxygen: {
        number: 8,
        symbol: 'O',
        valence: 2,
        color: '#ba0909',
    },
    flourine: {
        number: 9,
        symbol: 'F',
        valence: 1,
        color: '#b7faff'
    },
    neon: {
        number: 10,
        symbol: 'Ne',
        valence: 0,
        color: '#4be791'
    },
    sodium: {
        number: 11,
        symbol: 'Na',
        valence: -1,
        color: '#ff1500',
    },
    magnesium: {
        number: 12,
        symbol: 'Mg',
        valence: -2,
        color: '#e45c32',
    },
    aluminum: {
        number: 13,
        symbol: 'Al',
        valence: -3,
        color: '#c3d0d9',
    },
    silicon: {
        number: 14,
        symbol: 'Si',
        valence: 4,
        color: '#7393b3'
    },
    phosphorus: {
        number: 15,
        symbol: 'P',
        valence: 3,
        color: '#c18f2c',
    },
    sulfur: {
        number: 16,
        symbol: 'S',
        valence: 6,
        color: '#ecd800',
    },
    chlorine: {
        number: 17,
        symbol: 'Cl',
        valence: 1,
        color: '#00e980',
    },
    argon: {
        number: 18,
        symbol: 'Ar',
        valence: 0,
        color: '#c097e3'
    },
    potassium: {
        number: 19,
        symbol: 'K',
        valence: -1,
        color: '#cecece',
    },
    calcium: {
        number: 20,
        symbol: 'Ca',
        valence: -2,
        color: '#f1f1f1',
    },
    scandium: {
        number: 21,
        symbol: 'Sc',
        valence: 3,
        color: '#b0c4de'
    },
    titanium: {
        number: 22,
        symbol: 'Ti',
        valence: 4,
        color: '#c2d6d6'
    },
    vanadium: {
        number: 23,
        symbol: 'V',
        valence: 5,
        color: '#9fb1c8'
    },
    chromium: {
        number: 24,
        symbol: 'Cr',
        valence: 6,
        color: '#8aa29a'
    },
    manganese: {
        number: 25,
        symbol: 'Mn',
        valence: 7,
        color: '#d08b6a'
    },
    iron: {
        number: 26,
        symbol: 'Fe',
        valence: 2,
        color: '#b7410e'
    },
    cobalt: {
        number: 27,
        symbol: 'Co',
        valence: 2,
        color: '#2a52be'
    },
    nickel: {
        number: 28,
        symbol: 'Ni',
        valence: 2,
        color: '#50c878'
    },
    copper: {
        number: 29,
        symbol: 'Cu',
        valence: 1,
        color: '#b87333'
    },
    zinc: {
        number: 30,
        symbol: 'Zn',
        valence: 2,
        color: '#7da0b0'
    },
    gallium: {
        number: 31,
        symbol: 'Ga',
        valence: 3,
        color: '#c39bd3'
    },
    germanium: {
        number: 32,
        symbol: 'Ge',
        valence: 4,
        color: '#9ea7a6'
    },
    arsenic: {
        number: 33,
        symbol: 'As',
        valence: 3,
        color: '#6e6e6e'
    },
    selenium: {
        number: 34,
        symbol: 'Se',
        valence: 2,
        color: '#ffcc99'
    },
    bromine: {
        number: 35,
        symbol: 'Br',
        valence: 1,
        color: '#a52a2a'
    },
    krypton: {
        number: 36,
        symbol: 'Kr',
        valence: 0,
        color: '#9be3ff'
    }
};

function getElement(symbol) {
    return Object.values(ELEMENTS).find(elem => elem.symbol === symbol);
}

function getElementName(symbol) {
    return Object.entries(ELEMENTS).find(elem => elem[1].symbol === symbol)[0];
}

const subscriptMap = {
    '0': '₀',
    '1': '₁',
    '2': '₂',
    '3': '₃',
    '4': '₄',
    '5': '₅',
    '6': '₆',
    '7': '₇',
    '8': '₈',
    '9': '₉'
};
const superscriptMap = {
    '0': '⁰',
    '1': '¹',
    '2': '²',
    '3': '³',
    '4': '⁴',
    '5': '⁵',
    '6': '⁶',
    '7': '⁷',
    '8': '⁸',
    '9': '⁹'
};
const toSubscript = (n) => String(n).split('').map(d => subscriptMap[d]).join('');
const toSuperscript = (n) => String(n).split('').map(d => superscriptMap[d]).join('');


// I got this function from a Medium article; https://colton-shawn-oconnor.medium.com/changing-text-color-based-on-the-background-in-javascript-947bf9bc136b
function getBrightness(r, g, b) {
    return (r * 299 + g * 587 + b * 114) / 1000;
}

// this particular function was generated by Gemini :sob: nothing else is though
// I did add the part accounting for alpha values myself
function RGBFromHex(hex) {
    // Remove '#' if present
    hex = hex.startsWith('#') ? hex.slice(1) : hex;

    // Handle shorthand hex codes (e.g., #FFF)
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    // Ensure it's a valid 6-digit hex code
    if (!/^[0-9A-Fa-f]{6}$/.test(hex) && !/^[0-9A-Fa-f]{8}$/.test(hex)) {
        console.error("Invalid hex code:", hex);
        return null;
    }
    
    
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    const a = (/^[0-9A-Fa-f]{8}$/.test(hex)) ? parseInt(hex.slice(6, 8), 16) : 255;

    return { r, g, b, a };
}

function hexFromRGB(r, g, b, a = 255) {
    const rhex = r.toString(16).padStart(2, '0');
    const ghex = g.toString(16).padStart(2, '0');
    const bhex = b.toString(16).padStart(2, '0');
    const ahex = a.toString(16).padStart(2, '0');
    return '#' + rhex + ghex + bhex + ahex;
}

function darkenColor(hex, darkFactor) {
    const rgb = RGBFromHex(hex);
    return hexFromRGB(...Object.values(rgb).map(v => Math.round(v * darkFactor)));
}

function getTextColorFromBG(hex) {
    const rgb = RGBFromHex(hex);
    const br = getBrightness(rgb.r, rgb.g, rgb.b);

    return (br >= 150) ? '#000000' : '#FFFFFF';
}



function polarLerp(start, target, t, center = new Victor(0, 0), counterclockwise = true) {
    const st = start.clone().subtract(center);
    const tg = target.clone().subtract(center);
    
    const stangle = st.angle();
    let tgangle = tg.angle();

    let deltangle = tgangle - stangle;
    deltangle = ((deltangle + Math.PI) % (2 * Math.PI)) - Math.PI;

    if (counterclockwise && deltangle < 0) deltangle += 2 * Math.PI;
    if (!counterclockwise && deltangle > 0) deltangle -= 2 * Math.PI;

    const lerpangle = stangle + deltangle * t;

    const strad = st.length();
    const tgrad = tg.length();

    const lerprad = (1-t)*strad + t*tgrad;

    return new Victor(Math.cos(lerpangle), Math.sin(lerpangle)).multiplyScalar(lerprad).add(center);
}

function findDistance(l1, l2, p) {
    const seg = l2.clone().subtract(l1);
    const pointPointer = p.clone().subtract(l1);

    const project = pointPointer.dot(seg) / seg.lengthSq();

    if (project < 0 || project > 1) return NaN;

    const parallelogramArea = Math.abs(l2.clone().subtract(l1).cross(p.clone().subtract(l1)));
    const base = l2.clone().subtract(l1).length();
    return parallelogramArea / base;
}

function polarVec(angle, radius) {
    return new Victor(Math.cos(angle), Math.sin(angle)).multiplyScalar(radius);
}

function roundToInterval(value, interval) {
    return Math.round(value / interval) * interval;
}

function clampToAngleSpace(angle) {
    return (angle + Math.PI) % (Math.PI * 2) - Math.PI;
}

function toTitle(str) {
    const check = /[\s\d]/g;
    
    let amendee = str.split(check).map(str => str.charAt(0).toUpperCase() + str.slice(1)).join('').replaceAll('_', ' ');
    let i = 0;
    for (let ii = 0; ii < str.length; ii++) {
        if (check.test(str[ii])) amendee = amendee.slice(0, ii + i) + str[ii] + amendee.slice(ii + i);
        else continue;

        i++;
    }
    return amendee;
}

function roundVec(vec, amount) {
    const rx = Math.round(vec.x / amount) * amount;
    const ry = Math.round(vec.y / amount) * amount;
    return new Victor(rx, ry);
}