function createParam(name, value) {
    const param = document.createElement('param');
    param.setAttribute('name', name);
    param.setAttribute('value', value);
    return param;
}
const [input, select, textarea, reader] = [
    document.querySelector("input[type=file]")
    , document.querySelector("select")
    , document.querySelector("textarea")
    , new FileReader
];
let [files, data, fn] = [
    [],
    [], (file, reader) => new Promise((resolve, reject) => {
        reader.onload = () => {
            reader.onload = reader.onerror = null;
            resolve(reader.result);
        }
        reader.onerror = reject;
        reader.readAsText(file);
    })
];


select.onchange = () => {
    textarea.value = data[select.value];
}
function fillGame(swf) {
    const urlParams = new URLSearchParams(window.location.search);
    const defaultSWF = '../swf/ruffled.swf';
    const data = urlParams.get('swf') || swf;
    const game = document.createElement('object');
    game.setAttribute('data', data);
    game.setAttribute('type', 'application/x-shockwave-flash');
    game.setAttribute('width', '100%');
    game.setAttribute('height', '100%');
    game.appendChild(createParam('wmode', 'direct'));
    game.appendChild(createParam('allowscriptaccess', 'always'));
    game.appendChild(createParam('allowfullscreen', 'true'));
    game.appendChild(createParam('allowfullscreeninteractive', 'true'));
    game.appendChild(createParam('allownetworkingmode', 'all'));
    document.body.appendChild(game);
};
input.onchange = async () => {
    select.innerHTML = "";
    files.length = data.length = 0;
    for (const file of input.files) {
        const {
            name
        } = file;
        const option = new Option(name, files.length);
        files.push(file);
        select.appendChild(option);
        let swf = await fn(file, reader);
        data.push(swf);
        fillGame(swf);
    }
};
if (document.readyState != 'loading') {

} else {
    document.addEventListener("DOMContentLoaded")
}
