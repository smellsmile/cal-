var isTurnOn = false;
function turnOn() 
{
    isTurnOn = true;
    document.getElementById('display').disabled=false;
}
function turnOff()
{
    isTurnOn = false;
    document.getElementById('display').value="";
    document.getElementById('display').disabled=true;
}

function displayInInput(clickedElement)
{
    if(isTurnOn)
    {
        let clickedValue =  clickedElement.innerText;
        console.log(clickedValue);

        let curValue = document.getElementById('display').value;
        document.getElementById('display').value = curValue + clickedValue;
    }
    else
    {
        alert("please Turn ON calculator")
    }
}

function calculate()
{
    let expression = document.getElementById('display').value;
    let result = eval(expression);
    document.getElementById('display').value = result;
}

function clearAll()
{
    document.getElementById('display').value = '';
}

function clearOneChar()
{
    let expression = document.getElementById('display').value;
    let size = expression.length;
    expression = expression.substring(0, size-1);
    document.getElementById('display').value = expression;
}
