  
const validation = (ev)=>{

    ev.preventDefault();    // stop form from submitting
    var fname = document.getElementById('fname').value
    var lname = document.getElementById('lname').value
    var tel = document.getElementById('tel').value
    var mail = document.getElementById('mail').value
    var msg = document.getElementById('msg').value

    if(fname != "" && lname != "" && mail != "" && msg != ""){    // check if all input with * is filled

        document.querySelector('#alertEmpty').style.display = 'none';

        if(ValidateEmail(mail)){    // validation of email format
            
            document.querySelector('#alertMail').style.display = 'none';


                if(tel == "" ){   // No phone number input ...store data...
                   
                    document.querySelector('#alertTel').style.display = 'none';
                    console.log("done checking...")
                    storeData();

                }
                else if(tel != "" && allnumeric(tel)){      // validation of phone numbers
                    
                    document.querySelector('#alertTel').style.display = 'none';
                    console.log("done checking...")
                    storeData();
                }
                else{

                    document.querySelector('#alertTel').style.display = 'block'; // Field with numbers (0-9) only
                    console.log("invalid phone number")
 
                }

            
        }else{
            console.log("invalid email")
            document.querySelector('#alertMail').style.display = 'block';  // Please enter correct mail address format
        }

    }else{
    console.log("missing input")
    document.querySelector('#alertEmpty').style.display = 'block';   // Field with (*) are required

    }
    
}

function ValidateEmail(inputText){

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return inputText.match(mailformat)

}

function allnumeric(inputtxt){

    var numbers = /^[0-9]+$/;
    return(inputtxt.match(numbers))

} 

function storeData (){

    console.log("storing data...")
    let person = {
        firstName: document.getElementById('fname').value,
        lastName: document.getElementById('lname').value,
        telephone: document.getElementById('tel').value,
        email: document.getElementById('mail').value,
        message: document.getElementById('msg').value
    }

    customerList.push(person);                                                      // store data object into an array
    console.log('added',{customerList});
    localStorage.setItem('CustomerContactList',JSON.stringify(customerList));       // saving to local storage
    document.querySelector('.popup-container').style.display = 'block';             // display popup alert
    document.getElementById('close-button').addEventListener('click', resetForm);   // if close button pressed, reset form
    
}

function resetForm(){

    console.log("closing...")
    document.querySelector('.popup-container').style.display = 'none';  // close popup alert
    document.forms[0].reset();                                          // clear form for the next

}


document.addEventListener('DOMContentLoaded',()=>{

    customerList = [];
    document.getElementById("fname").addEventListener("keydown", htmlValidation);
    document.getElementById('submit-button').addEventListener('click', validation);  

});

    
 


