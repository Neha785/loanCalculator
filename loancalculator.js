function calculateLoan(){
    loanAmountValue=document.getElementById("Loan_Amount").value;

    InterestRateValue=document.getElementById("interest_rate").value;

    MonthToPay=document.getElementById("Months_to_pay").value

    interest=(loanAmountValue * (InterestRateValue *0.01))/ MonthToPay

    MonthToPay=(loanAmountValue /MonthToPay + interest)

    document.getElementById("Payment").innerHTML=`Monthly payment: ${MonthToPay}`


    }