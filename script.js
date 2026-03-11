function appendValue(value)
{
    document.getElementById("display").value += value;
}


function clearDisplay()
{
   
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
}


function allClear()
{
    
    document.getElementById("display").value = "";
}


function calculate()
{
    try
    {
        let expression = document.getElementById("display").value;
        let result = eval(expression);
        document.getElementById("display").value = result;
    }
    catch(error)
    {
        alert("Invalid Expression");
        allClear();
    }
}