const uppercaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercaseLetter = uppercaseLetter.toLowerCase();
const numberLetter = "1234567890"
const symbolLetter = "!@#$%^&*"
const randomIndex = (elementLength) => Math.floor(Math.random() * (elementLength - 0)) + 0;


function generatePassword(){

    let password = ""

    const uppercase = document.querySelector('#uppercase')
    const lowercase = document.querySelector('#lowercase')
    const number = document.querySelector('#number')
    const symbol = document.querySelector('#symbol')

    if(!uppercase.checked && !lowercase.checked && !symbol.checked && !number.checked){
        alert("Please Check One Option");
        return;
    }
    else{
        if(uppercase.checked){
            password += uppercaseLetter[randomIndex(uppercaseLetter.length-1)];
        }

        if(lowercase.checked){
            password += lowercaseLetter[randomIndex(lowercaseLetter.length-1)];
        }

        if(symbol.checked){
            password += symbolLetter[randomIndex(symbolLetter.length-1)];
        }

        if(number.checked){
            password += numberLetter[randomIndex(numberLetter.length-1)];
        }
    }

    return password;
}

function main(){
    let password = "";
    const passwordGenerate = document.querySelector('.password_option button');
    
    passwordGenerate.addEventListener('click', (event) =>{
        event.preventDefault()
        const length = document.querySelector('#length').value;
        
        while(password.length <= length){
            password += generatePassword();
        }

        document.querySelector('.password_box p').innerHTML = `${password == undefined ? "Password Generating" : password}`
        password = "";
    })
}

main();