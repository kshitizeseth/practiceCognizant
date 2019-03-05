
  /*   function doscroll() {
        var myDiv = document.getElementById('newsdiv');
        myDiv.scrollTop = 0;
}
function doscroll2() {
        var myDiv = document.getElementById('eventsdiv');
        myDiv.scrollTop = 0;
}*/
    
    function srch(){
       document.getElementById("searchdiv").style.display= "block";
        document.getElementById("maindiv").style.display= "none";
        document.getElementById("ftr").style.display= "none";
        document.getElementById("bdy").className = "bg-light";
    }
    function srchclose(){
        document.getElementById("searchdiv").style.display= "none";
        document.getElementById("maindiv").style.display= "block";
        document.getElementById("ftr").style.display= "block";
        document.getElementById("bdy").className = "bg-dark";
    }
    

    function login(){
        var email = document.getElementById("formEmail").value;
        var password = document.getElementById("formPassword").value;
        var i ,flagP=0 , flagE=0,flagPh=0,flagUname=0;
        var phn = 0, em = 0, us=0;
        //alert(password);
        var plen = password.length;
         if(plen>=8){
             for(i = 0; i < password.length;i++)
        {
         if(password.charAt(i) == '!' || password.charAt(i) == '@' || password.charAt(i) == '#' || 
         password.charAt(i) == '$' || password.charAt(i) == '%' || password.charAt(i) == '^' ||
         password.charAt(i) == '&' ||password.charAt(i) == '*')
         flagP=1;
                 
        }
        if(flagP == 1){
         for(i = 0; i < password.length;i++)
        {
         if(password.charAt(i) == '0' || password.charAt(i) == '1' || password.charAt(i) == '2' || 
         password.charAt(i) == '3' || password.charAt(i) == '4' || password.charAt(i) == '5' ||
         password.charAt(i) == '6' ||password.charAt(i) == '7' ||password.charAt(i) == '8'
         ||password.charAt(i) == '9')
         flagP=1;
                 
        }
        }
      if(flagP == 0){
          alert("Invalid Password, following are the criteria for a valid password: \n 1.Password length should be of atleast 8 Characters \n 2. Password should contain atleast 1 special character and number");
          document.getElementById("formPassword").focus();
      }
        
        
     }

     if(email.charAt(0)>='0'&&email.charAt(0)<='9'){
         phn = 1;
     }
     if(phn == 1){
        // alert("Phone Number");
         var count = 0 ;
         for(i = 0; i<=email.length;i++){
             if(email.charAt(0)>='0'&&email.charAt(0)<='9')
             count++;
         }          
         if(count == 10){
             flagPh = 1 ;
         }

         if(flagPh == 0){
             alert("Phone number is invalid");
             document.getElementById("formEmail").focus();
         }


     }
     else
     {
         //alert("username or email");

         var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
             flagE = 1;
          if (!filter.test(email)) {
          
          flagE = 0;

          if(email.charAt(0)>='A'&&email.charAt(0)<='Z'){
             flagUname = 1;
          }
          
             }
             if(flagE==0&&flagUname===0){
              alert("Invalid Username Or Email");
              document.getElementById("formEmail").focus();
          }

     }

     if(flagE==1||flagPh==1||flagUname==1&&flagP==1){

         alert("success");
         return;

     }
     




     
 }
   
 function signup(){
    var fname = document.getElementById("regFormFName").value;
    var lname = document.getElementById("regFormLName").value;
    var uname = document.getElementById("regFormUName").value;
    var fname = document.getElementById("regFormFName").value;
    var ph = document.getElementById("regFormPh").value;
    var email = document.getElementById("regFormEmail").value;
    var password = document.getElementById("regFormPassword").value;

    var flagU = 0;
    var flagE = 0;
    var flagPh = 0;
    var flagP = 0;

    if(uname.charAt(0)>='A'&&uname.charAt(0)<='Z'){
      flagU = 1;
    }
    if(flagU == 0){
        alert("Invalid Username");
        document.getElementById("regFormUName").focus();
        
    }
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
       flagE = 1;
    if (!filter.test(email)) {
    
    flagE = 0;}
    if(flagE==0){
        alert("enter a valid email");
    }
    var count = 0;
    for(var i = 0;i<ph.length;i++){
      if(ph.charAt(i)>='0'&&ph.charAt(i)<='9')
      count++;
    }

    if(count==10)
    flagPh=1;
    if(flagPh==0){
        alert("Enter a valid Phone Number");
        document.getElementById("regFormPh").focus();
    }


    var i;

    var plen = password.length;
   if(plen>=8){
       for(i = 0; i < password.length;i++)
  {
   if(password.charAt(i) == '!' || password.charAt(i) == '@' || password.charAt(i) == '#' || 
   password.charAt(i) == '$' || password.charAt(i) == '%' || password.charAt(i) == '^' ||
   password.charAt(i) == '&' ||password.charAt(i) == '*')
   flagP=1;
           
  }
  if(flagP == 1){
   for(i = 0; i < password.length;i++)
  {
   if(password.charAt(i) == '0' || password.charAt(i) == '1' || password.charAt(i) == '2' || 
   password.charAt(i) == '3' || password.charAt(i) == '4' || password.charAt(i) == '5' ||
   password.charAt(i) == '6' ||password.charAt(i) == '7' ||password.charAt(i) == '8'
   ||password.charAt(i) == '9')
   flagP=1;
           
  }
  }
if(flagP == 0){
    alert("Invalid Password, following are the criteria for a valid password: \n 1.Password length should be of atleast 8 Characters \n 2. Password should contain atleast 1 special character and number");
    document.getElementById("regFormPassword").focus();
}
  
  
}

    
}