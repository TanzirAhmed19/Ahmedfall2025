function dragElement(terrariumElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + 'px';
        terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + 'px';
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }

}

function writeDice(n) {
    const container = document.getElementById('dice_container');
    container.innerHTML = ''; 
    const img = document.createElement('img');
    img.src = './images/dice' + n + '.png';  
    img.alt = 'Dice showing ' + n;
    img.classList.add('dice-img');

    container.appendChild(img);
}

function getRandom() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    writeDice(randomNumber);
}


dragElement(document.getElementById('redpiece1'));
dragElement(document.getElementById('redpiece2'));
dragElement(document.getElementById('redpiece3'));
dragElement(document.getElementById('redpiece4'));
dragElement(document.getElementById('greenpiece1'));
dragElement(document.getElementById('greenpiece2'));
dragElement(document.getElementById('greenpiece3'));
dragElement(document.getElementById('greenpiece4'));
dragElement(document.getElementById('bluepiece1'));
dragElement(document.getElementById('bluepiece2'));
dragElement(document.getElementById('bluepiece3'));
dragElement(document.getElementById('bluepiece4'));
dragElement(document.getElementById('yellowpiece1'));
dragElement(document.getElementById('yellowpiece2'));
dragElement(document.getElementById('yellowpiece3'));
dragElement(document.getElementById('yellowpiece4'));


const rollBtn = document.getElementById('roll-btn');
if (rollBtn) {
    rollBtn.addEventListener('click', getRandom);
}