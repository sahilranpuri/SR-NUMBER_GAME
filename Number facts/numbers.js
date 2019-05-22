let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInput');
numberInput.addEventListener('input',getFacts);

function getFacts()
{
    let number = numberInput.value;

    fetch('http://numbersapi.com/'+number)
    .then(response => response.text())
    .then(data => {
        if(number != '')
        {
            fact.style.display = 'block';
            factText.innerText = data;
        }
    })
    .catch(err => console.log(err));
}

// maths facts
let mathfact = document.querySelector('#mathfact');
let mathfactText = document.querySelector('#mathfactText');

let mathInput = document.querySelector('#mathInput');
mathInput.addEventListener('input',getmathFacts);

function getmathFacts()
{
    let math = mathInput.value;
    let url = 'http://numbersapi.com/'+math+'/math';
    if(math == "")
    {
        console.log('enter number');
    }
    else{
    fetch(url)
    .then(response => response.text())
    .then(data => {
        if(math != '')
        {
            mathfact.style.display = 'block';
            mathfactText.innerText = data;
        }
    })
    .catch(err => console.log(err));
    }
}

//year facts
let yearfact = document.querySelector('#yearfact');
let yearfactText = document.querySelector('#yearfactText');

let yearInput = document.querySelector('#yearInput');
yearInput.addEventListener('input',getyearFacts);

function getyearFacts()
{
    let year = yearInput.value;
    let url = 'http://numbersapi.com/'+year+'/year';
    if(year == "")
    {
        console.log('enter a year');
    }
    else{
    fetch(url)
    .then(response => response.text())
    .then(data => {
        if(year != '')
        {
            yearfact.style.display = 'block';
            yearfactText.innerText = data;
        }
    })
    .catch(err => console.log(err));
    }
}