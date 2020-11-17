function fnameValidate()
{
var fname=document.getElementById("fname").value;
    if(fname.length==0)
    {
        document.getElementById("fnameError").innerHTML ="";
        return false;
    }

    else
    {
        if(/^[a-zA-Z]+$/.test(fname))
        {
            document.getElementById("fnameError").innerHTML ="";
            return true;
        }
        else
        {
            document.getElementById("fnameError").innerHTML ="Error: First name should only contain characters.";
            return false;
        }
    }
}

function lnameValidate()
{
    var lname=document.getElementById("lname").value;	
    if(lname.length==0)
    {
        document.getElementById("lnameError").innerHTML ="";
        return false;
    }
    else
    {
        if(/^[a-zA-Z]+$/.test(lname))
        {
            document.getElementById("lnameError").innerHTML ="";
            return true;
        }
        else
        {
            document.getElementById("lnameError").innerHTML ="Error: Last name should only contain characters.";
            return false;
        }
    }
        
}

function emailValidate()
{
var email=document.getElementById("email").value;
const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.length==0)
    {
        document.getElementById("emailError").innerHTML ="";
        return false;
    }
    else
    {
    if(re.test(email))
            {
                document.getElementById("emailError").innerHTML ="";
                return true;
            }
        
    else
            {
                document.getElementById("emailError").innerHTML ="Error: Invalid E-mail id";
                return false;
            }

    }
}


function ageValidate()
{

    var  age=document.getElementById("age").value;
    
        if(age.length==0)
        {
            document.getElementById("ageError").innerHTML ="";
            return false
        }
        else
        {
            if(age>=18)
			{
                document.getElementById("ageError").innerHTML ="";
                return true;
			}
		    else
			{
                document.getElementById("ageError").innerHTML ="You must be 18 years or older";
                return false;
			}
		
        }
	
}


function success()
{
    if(fnameValidate == true && lnameValidate == true && emailValidate == true && ageValidate == true)
    {
        alert('Thank you');
    }
    else
    {
        document.getElementById("success-message").innerHTML='Please enter valid details';
    }

}

function showfield(name){
    if(name=='yes')document.getElementById('div1').style.display="block";
    else document.getElementById('div1').style.display="none";
  }
 
 function hidefield() {
 document.getElementById('div1').style.display='none';
 }

 function activateButton(element) {
  if(element.checked) {
  document.getElementById("submit").disabled = false;
  }
  else  {
  document.getElementById("submit").disabled = true;
  }
  }

  function disableSubmit() {
  document.getElementById("submit").disabled = true;
  }


function preventNumberInput(e){
    var keyCode = (e.keyCode ? e.keyCode : e.which);
    if (keyCode > 47 && keyCode < 58 || keyCode > 95 && keyCode < 107 ){
        e.preventDefault();
    }
}

$(document).ready(function(){
    $('#text_field').keypress(function(e) {
        preventNumberInput(e);
    });
})

