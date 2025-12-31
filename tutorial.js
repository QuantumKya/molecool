/*const tutorials = ['TUTORIAL', 'MAKING&BREAKING', 'ORIENTATION', 'ANALYSIS'];

const getHTMLFromMarkdown = (mdData) => {
    const lines = mdData.split(/[\n\r]+/g);

    let html = '';

    const headerId = lines.findIndex(s => s.startsWith('# ')).slice(2);
    const header = lines[headerId];
    if (headerId !== -1) html += `<h1 style="margin-bottom: 15px;">${header}<h1>`;

    

    for (const ln of lines) {
        if (!ln) continue;
        
        const formatMap = [
            { fmt: '***', tag: 'b><i' },
            { fmt: '**', tag: 'b' },
            { fmt: '*', tag: 'i' },
            { fmt: '~~', tag: 's' }
        ];

        for (const { fmt, tag } of formatMap) {
            const regex = new RegExp(`${fmt.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(.*?)${fmt.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'g');
            ln = ln.replace(regex, `<${tag}>$1</${tag}>`);
        }

        if (ln.startsWith('![')) {
            const alt = ln.search(/(?<=\[)\w+(?=\])/g);
            const src = ln.search(/(?<=\())\w+(?=\))/g);
            if (alt && src) html += `<img src="${src}" alt="${alt}">`;
        }
        else if (ln.startsWith('### ')) {
            const content = ln.slice(4);
            if (content) html += `<h2>${content}</h2>`;
        }
        else if (ln === '') html += '\n';
        else html += `<p>${ln}</p>`;
        if (ln.endsWith('  ')) html += '';
    }
}
*/

const loadTutorial = (filename) => {
    const tutorialbox = document.getElementById('tutorialpanel');
    tutorialbox.style.maxWidth = '32rem';
    tutorialbox.style.maxHeight = '85%';
    tutorialbox.style.display = 'block';

    fetch(`tutorialstuff/${filename}.html`)
        .then(res => res.text())
        .then(data => { tutorialbox.innerHTML = data + '<button onclick="closeTutorial()" style="position: absolute; top: 0; right: 0; margin: 10px;">Close</button>'; })
        .catch(err => console.error('Error fetching HTML for tutorial', err));
}

const closeTutorial = () => {
    const tutorialbox = document.getElementById('tutorialpanel');
    tutorialbox.style.maxWidth = '0';
    tutorialbox.style.maxHeight = '0';
    setTimeout(() => {
        tutorialbox.style.display = 'none';
        tutorialbox.innerHTML = '';
    }, 300);
}