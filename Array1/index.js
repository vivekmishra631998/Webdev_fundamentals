// function helps to find all the integers between the two numbers given by user
function cal(id){
    let startInteger = document.getElementById('startInt').value
    let endInteger = document.getElementById('endInt').value
    
  
   if ( startInteger > endInteger)
   {
    let resultArr = new Array(startInteger - endInteger +1)
    for (let i=0; i < resultArr.length; i++ )
    {
        resultArr[i] = startInteger
        startInteger--
    }
    document.getElementById('result').value = resultArr
  
   }

   else

   {
    let resultArr = new Array( endInteger -startInteger +1 )
    for (let i=0; i<resultArr.length;i++)
    {
        resultArr[i] = startInteger
        startInteger++
    }
    document.getElementById('result').value = resultArr
   }
}
