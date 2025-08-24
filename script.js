// Login Button Functionality...
document.getElementById('loginButton').addEventListener('click', function(e){
    e.preventDefault()
    const mobileNumber = 1234567890
    const password =1234
    const mobileNumberValue = document.getElementById('mobile-number').value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)

    const passwordValue = document.getElementById('password-number').value
    const passwordValueConverted = parseInt(passwordValue)

    if(mobileNumberValueConverted === mobileNumber && passwordValueConverted === password){
        window.location.href="./home.html"
    }
    else{
        alert('Your Mobile Number or Password is Incorrect.');
        
    }
})
