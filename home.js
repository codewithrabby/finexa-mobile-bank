const validPin  = 1234
const transactionData = []

// Add Money Section Functionality...

document.getElementById('addMoneyButton').addEventListener('click', function(e){
    e.preventDefault()
    const bank = document.getElementById('bank').value
    const accountNumber = document.getElementById('bankAccountNumber').value
    const amount = parseInt(document.getElementById('addAmount').value)
    const pin = parseInt(document.getElementById('pinNumber').value)

    const balance = parseInt(document.getElementById('availableBalance').innerText)

    if(accountNumber.length < 11){
        alert('Please Provide 11 Digit Valid Account Number.')
        return;
    }
    if(pin !== validPin){
        alert('Please Provide 4 Digit Valid PIN Number.')
        return;
    }
    const totalNewAvailablebalance = amount + balance

    document.getElementById('availableBalance').innerText = totalNewAvailablebalance

    const data = {
        name: 'Add Money',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
})



// Cash Out Section Functionality...

document.getElementById('withdrawButton').addEventListener('click', function(e){
    e.preventDefault()
    const agentNumber = document.getElementById('agentNumber').value
    const agentAmount = parseInt(document.getElementById('substractAmount').value)
    const agentPin = parseInt(document.getElementById('agentPinNumber').value)

    const balance = parseInt(document.getElementById('availableBalance').innerText)

    if(agentNumber.length < 11){
        alert('Please Provide 11 Digit Valid Account Number.')
        return;
    }
    if(agentPin !== validPin){
        alert('Please Provide 4 Digit Valid PIN Number.')
        return;
    }
    if(agentAmount > balance){
        alert('Not enough balance to transfer.')
        return;
    }
    const totalNewAvailablebalance = balance - agentAmount

    document.getElementById('availableBalance').innerText = totalNewAvailablebalance

    const data = {
        name: 'Cash Out',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
})

// Transfer Money Section Functionality...

document.getElementById('transferMoneyButton').addEventListener('click', function(e){
    e.preventDefault()
    
    const userAccountNumber = document.getElementById('userAccountNumber').value
    const transferAmount = parseInt(document.getElementById('transferAmount').value)
    const userPinNumber = parseInt(document.getElementById('userPinNumber').value)

    const balance = parseInt(document.getElementById('availableBalance').innerText)

    if(userAccountNumber.length < 11){
        alert('Please Provide 11 Digit Valid Account Number.')
        return;
    }
    if(userPin !== validPin){
        alert('Please Provide 4 Digit Valid PIN Number.')
        return;
    }
    if(transferAmount > balance){
        alert('Not enough balance to transfer.')
        return;
    }
    const totalNewAvailablebalance = balance - transferAmount

    document.getElementById('availableBalance').innerText = totalNewAvailablebalance

    const data = {
        name: 'Transfer Money',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
})


// Get Bonus Section Functionality...
document.getElementById('getBonusBtn').addEventListener('click', function(e){
    e.preventDefault();
    const coupon = document.getElementById('couponID').value.trim(); 
    const balance = parseInt(document.getElementById('availableBalance').innerText);

    const coupons = {
        "bonus500": 50
    };

    if(coupon === "bonus500"){
        const totalNewAvailablebalance = balance + 500;
        document.getElementById('availableBalance').innerText = totalNewAvailablebalance;

        alert("✅ Congratulations! You got 500 Tk bonus.");

        const data = {
            name: 'Get Bonus (bonus500)',
            date: new Date().toLocaleTimeString()
        }
        transactionData.push(data)
    } else {
        alert("❌ Invalid Coupon Code!");
    }
})



// Pay Bill Section Functionality...

document.getElementById('payBillBtn').addEventListener('click', function(e){
    e.preventDefault()
    const bill = document.getElementById('bill').value
    const billerAccountNumber = document.getElementById('billerAccountNumber').value
    const billAmount = parseInt(document.getElementById('amountToPay').value)
    const billPin = parseInt(document.getElementById('billPin').value)

    const balance = parseInt(document.getElementById('availableBalance').innerText)

    if(billerAccountNumber.length < 11){
        alert('Please Provide 11 Digit Valid Account Number.')
        return;
    }
    if(billPin !== validPin){
        alert('Please Provide 4 Digit Valid PIN Number.')
        return;
    }
        if(billAmount > balance){
        alert('Not enough balance to transfer.')
        return;
    }
    const totalNewAvailablebalance = balance - billAmount

    document.getElementById('availableBalance').innerText = totalNewAvailablebalance

    const data = {
        name: 'Pay Bill',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
})

// Transaction Functionality Section......

document.getElementById('transactionButton').addEventListener('click', function(){
    const transactionContainer = document.getElementById('transaction-container')

    for(const data of transactionData){
        const div = document.createElement('div')
        div.innerHTML=`
        <div class=" bg-white rounded-xl p-3 flex justify-between items-center">
            <div class="flex items-center">
                <div class="p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./assets/wallet1.png" alt="">
                </div>
                <div class="ml-3">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `
        transactionContainer.appendChild(div)
    }
})


// Toggling Features.....

document.getElementById('addButton').addEventListener('click', function(){
    hideAll()
    document.getElementById('add-money-parent').classList.remove('hidden')
    // document.getElementById('cash-out-parent').style.display = "none"
    // document.getElementById('transfer-parent').style.display = "none"
    // document.getElementById('get-bonus-parent').style.display = "none"
    // document.getElementById('pay-bill-parent').style.display = "none"
    // document.getElementById('transaction-history-parent').style.display = "none"
    // document.getElementById('latest-payment-parent').style.display = "none"
})
document.getElementById('cashOutButton').addEventListener('click', function(){
        hideAll()
    document.getElementById('cash-out-parent').classList.remove('hidden')
//     document.getElementById('add-money-parent').style.display = "none"
//     document.getElementById('cash-out-parent').style.display = "block"
//     document.getElementById('transfer-parent').style.display = "none"
//     document.getElementById('get-bonus-parent').style.display = "none"
//     document.getElementById('pay-bill-parent').style.display = "none"
//     document.getElementById('transaction-history-parent').style.display = "none"
//     document.getElementById('latest-payment-parent').style.display = "none"

})
document.getElementById('transferButton').addEventListener('click', function(){
        hideAll()
    document.getElementById('transfer-parent').classList.remove('hidden')
    // document.getElementById('add-money-parent').style.display = "none"
    // document.getElementById('cash-out-parent').style.display = "none"
    // document.getElementById('transfer-parent').style.display = "block"
    // document.getElementById('get-bonus-parent').style.display = "none"
    // document.getElementById('pay-bill-parent').style.display = "none"
    // document.getElementById('transaction-history-parent').style.display = "none"
    // document.getElementById('latest-payment-parent').style.display = "none"
})
document.getElementById('getBonusButton').addEventListener('click', function(){
        hideAll()
    document.getElementById('get-bonus-parent').classList.remove('hidden')
    // document.getElementById('add-money-parent').style.display = "none"
    // document.getElementById('cash-out-parent').style.display = "none"
    // document.getElementById('transfer-parent').style.display = "none"
    // document.getElementById('get-bonus-parent').style.display = "block"
    // document.getElementById('pay-bill-parent').style.display = "none"
    // document.getElementById('transaction-history-parent').style.display = "none"
    // document.getElementById('latest-payment-parent').style.display = "none"
})
document.getElementById('payBillButton').addEventListener('click', function(){
        hideAll()
    document.getElementById('pay-bill-parent').classList.remove('hidden')
    // document.getElementById('add-money-parent').style.display = "none"
    // document.getElementById('cash-out-parent').style.display = "none"
    // document.getElementById('transfer-parent').style.display = "none"
    // document.getElementById('get-bonus-parent').style.display = "none"
    // document.getElementById('pay-bill-parent').style.display = "block"
    // document.getElementById('transaction-history-parent').style.display = "none"
    // document.getElementById('latest-payment-parent').style.display = "none"
})
document.getElementById('transactionButton').addEventListener('click', function(){
        hideAll()
    document.getElementById('transaction-history-parent').classList.remove('hidden')
    // document.getElementById('add-money-parent').style.display = "none"
    // document.getElementById('cash-out-parent').style.display = "none"
    // document.getElementById('transfer-parent').style.display = "none"
    // document.getElementById('get-bonus-parent').style.display = "none"
    // document.getElementById('pay-bill-parent').style.display = "none"
    // document.getElementById('transaction-history-parent').style.display = "block"
    // document.getElementById('latest-payment-parent').style.display = "none"
})

function hideAll (){
    const sections = document.querySelectorAll(".section-parent")
    for(section of sections){
        section.classList.add("hidden")
    }
}

// Log Out Functionality......

document.getElementById('logoutButton').addEventListener('click', function(){
    window.location.href = "index.html";
})
