// This function helps us to write the expression to be evaluated
function expression(id) {
    
    let num = document.getElementById(id).innerText
    document.getElementById('display').innerText += num
    
}
// This function helps to evaluate the expression
function calculate(id){
   
    let value = eval(document.getElementById('display').innerText)
    document.getElementById('display').innerText = value
    
}
// This function helps to clear the screen or backspacing, depends on which button is clicked
function clearScr(id) {
    if (id == 'AC'){
    document.getElementById('display').innerText = '' ;
    }

    if (id == 'backSpc')
    {
        let result = (document.getElementById('display').innerText).slice(0, -1) 
        document.getElementById('display').innerText = result

    }
   

}