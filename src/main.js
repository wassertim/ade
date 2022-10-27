function removeSearchElementTopMargin() {
    const searchElement = document.querySelector('#search');
    if (!searchElement) {
        return;
    }
    searchElement.style.marginTop = '0px';
}

function removeGoogleAdBlock() {
    const containerLayer = document.querySelectorAll('#container_layer, #tads');
    if (!containerLayer) {
        return;
    }
    containerLayer.forEach(e => e.remove());
    removeSearchElementTopMargin();
}

export function main() {
    removeGoogleAdBlock();
}