// depending on the button clicked , answer is displayed using this function
function answe(id) {
     
    if (id == 'Q1')
    {
       document.getElementById('ans1').innerText = 'Except mastercard, we accept all kinds of debit and credit cards. All nationalised bank credit cards are welcomed. You will also receive bonus in terms of monetary benefit when payment is done instantly without delay. '
       document.getElementById('ans2').innerText = ''
       document.getElementById('ans3').innerText = ''
    }
    if (id == 'Q2' )
    {
        document.getElementById('ans1').innerText = ''
        document.getElementById('ans2').innerText = 'Yes! we do support them and we will always stand alongside them. We also donate in charity funds in support of farmers. You can check our website and find the paytm or google pay number to donate to the farmers who give us food.'
        document.getElementById('ans3').innerText = ''
    }
    if (id == 'Q3')
    {
        document.getElementById('ans1').innerText = ''
        document.getElementById('ans2').innerText = ''
        document.getElementById('ans3').innerText = 'Yes! we use organic ingredients which comes from organic farming.'
    }
    
}