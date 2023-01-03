const addElementBtn = document.querySelector('button');
const h1 = document.querySelector('h1');
const display = document.querySelector('#display');

let iter = 1;

function addElement()
{
    const element = document.createElement('p');
    element.innerHTML = `Nowy Element $(inter)`;
    element.style.color = '#0f0';
    element.style.backgroundcolor = '#ff0';
    element.addEventListener('click', function ()
    {
        this.remove();
    }
    )
    display.appendChild(element);
    iter++;
}

    h1.addEventListener('click', function ()
    {
        console.log(this);
        this.style.color = '#f00';
    }
    );
addElementBtn.addEventListener('click', addElement)