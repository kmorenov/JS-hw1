const nameElt = document.getElementById("username")
const nameError = document.getElementById("usernameError")
const onBlur = function(event){
    Validate(nameElt, nameError, " User Name", "true")  
}
nameElt.addEventListener("blur", onBlur)

const pwdElt = document.getElementById("password")
const pwdError = document.getElementById("passwordError")
const onBlur1 = function(event){
    Validate(pwdElt, pwdError, " Password", "true")  
}
pwdElt.addEventListener("blur", onBlur1)

const phoneElt = document.getElementById("phone")
const phoneError = document.getElementById("phoneError")
const onBlur2 = function(event){
    Validate(phoneElt, phoneError, " Phone", "true")  
}
phoneElt.addEventListener("blur", onBlur2)

const emailElt = document.getElementById("email")
const emailError = document.getElementById("emailError")
const onBlur3 = function(event){
    Validate(emailElt, emailError, " Email", "false")  
}
emailElt.addEventListener("blur", onBlur3)
 
function Validate(fld, errmsg, fldlabel, btnstate){

        let promiseValid = new Promise(function(resolve, reject){
            if (fld.value.trim() != ""){
                resolve()
            }
            else {
                reject(fldlabel)
            }
        })
        promiseValid.then(function(){
            fld.style = "border-color:none"
            errmsg.innerHTML = ''
            //userInput.push(fld.value)
        }).catch(function(fromReject){
            fld.style = "border-color:red"
            errmsg.innerHTML = 'You must enter a ' + fromReject
           document.getElementById("submit").disabled = btnstate
        })
}

const onSubmit = function (event) {
            event.preventDefault()

        //    Validate(nameElt, nameError, " User Name", "false").
        //     Validate(pwdElt, pwdError, " Password", "false")  
        //     Validate(phoneElt, phoneError, " Phone", "false")  
        //     Validate(emailElt, emailError, " Email", "false") 

            let userInput = []
            userInput.push(document.getElementById("username").value)
            userInput.push(document.getElementById("password").value)
            userInput.push(document.getElementById("phone").value)
            userInput.push(document.getElementById("email").value)
           
            if (userInput.length = 4) 
            localStorage.setItem("userform", JSON.stringify(userInput))
}
submit.addEventListener("click", onSubmit)
