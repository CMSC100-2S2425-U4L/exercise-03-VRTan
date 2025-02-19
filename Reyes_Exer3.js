//function to check if a password has at least a lowerCase
// declare a variable containing alphabet lower
// convert string to array
// loop through password array and loweralphabet array and check if one exist
// return boolean depending upon the resuls

function checkLower(pass1){

    let alphabetLower = "abcdefghijklmnopqrstuvwxyz"
    const arrayLowerAlpha = Array.from(alphabetLower)
    const passwordArray = Array.from(pass1)


    for (let i = 0; i < passwordArray.length; i++){
        for (let j = 0; j < arrayLowerAlpha.length; j++){
            if(passwordArray[i] == arrayLowerAlpha[j]){
                return true
            }
        }
    }

    return false
}

//function to check if a password has at least a upperCase
// declare a variable containing alphabet upper
// convert string to array
// loop through password array and upper alphabet array and check if one exist
// return boolean depending upon the resuls

function checkUpper(pass1){
    let alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const arrayUpperAlpha = Array.from(alphabetUpper)
    const passwordArray = Array.from(pass1)

    for (let i = 0; i < passwordArray.length; i++){
        for (let j = 0; j < arrayUpperAlpha.length; j++){
            if(passwordArray[i] == arrayUpperAlpha[j]){
                return true
            }   
        }
    }
    return false
}

//function to check if a password has at least a number
// declare a variable containing number
// convert string to array
// loop through password array and number array and check if one exist
// return boolean depending upon the resuls

function checkNumber(pass1){
    let numberString = "1234567890"
    const arrayNumbers = Array.from(numberString)
    const passwordArray = Array.from(pass1)

    for (let i = 0; i < passwordArray.length; i++){
        for (let j = 0; j < arrayNumbers.length; j++){
            if(passwordArray[i] == arrayNumbers[j]){
                return true
            }   
        }
    }

    return false

}

//function to rverse the password
//convert password string into an array
//create an empty array for the rverse password
//loop through ech element starting from the last to get the reverse
//return the array with .join to convert it into string

function reversePassword(pass1){
    const passwordArray = Array.from(pass1)
    let reversePass = []

    for(let i = pass1.length - 1; i != -1; i--){
        reversePass.push(pass1[i])
    }
    
    return(reversePass.join(""))
}


//validate the password if the length is at least 8
// if the password contains lowercase
// if the password contains uppercase
// if the password contains a number
function validateCharac(pass1){
    let passwordLength = pass1.length
    if((passwordLength >= 8) == true){
        console.log("The password is a match and at least greater than 8 characters")
        if(checkLower(pass1) == true){
            if(checkUpper(pass1) == true){
                if (checkNumber(pass1) == true){
                    console.log("Password is valid!")
                    return true
                } else{
                    console.log("Not a Valid Password")
                    return false
                }
            }else{
                console.log("Has lower but no Upper!")
                return false
            }
        }else{
            console.log("No lower letter")
            return false
        }
    } else{
        return false;
    }
}

//a function that validate and return the appropriate password
// checks if both password are a match

function validatePassword(pass1, pass2){
    
    if(pass1 == pass2){
        if(validateCharac(pass1) == true){
            return reversePassword(pass1)
        }
    } else{
        if(validateCharac(pass1) == false){
            return pass1
        }
    }
}

//function to store the password

function storePassword(name, pass1, pass2){
    const userInfos = {
        name: name,
        newPassword: validatePassword(pass1, pass2)
    }

    console.log(userInfos)
}


storePassword("John", "Pass123", "Pass12345")