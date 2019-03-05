 function login(){
           var email = document.getElementById("formEmail").value;
           var password = document.getElementById("formPassword").value;
           var i ,flagP=0 , flagE=0,flagPh=0,flagUname=0;
           var phn = 0, em = 0, us=0;
           alert(password);
           var plen = password.length;

           {
            if(email.charAt(0) == '0'||email.charAt(0) == '1'||email.charAt(0) == '2'||
                   email.charAt(0) == '3'||email.charAt(0) == '4'||email.charAt(0) == '5'||
                   email.charAt(0) == '6'||email.charAt(0) == '7'||email.charAt(0) == '8'||
                   email.charAt(0) == '9') {
                        ph=1;
                   }   
               if(ph==1){
            var count = 0;
               for(i = 0;i<email.length;i++){
                   if(email.charAt(i) == '0'||email.charAt(i) == '1'||email.charAt(i) == '2'||
                   email.charAt(i) == '3'||email.charAt(i) == '4'||email.charAt(i) == '5'||
                   email.charAt(i) == '6'||email.charAt(i) == '7'||email.charAt(i) == '8'||
                   email.charAt(i) == '9')
                   count ++;
               }
               if(count == 10)
               flagPh=1;
               if(flagPh == 0){
                document.getElementById("email").focus();
                   alert("PHONE NUMBER GLT HAI");
                    
                }
                else
                    alert("SAHI HAI");

               
            }
            else{
                alert("hello") ;
                var ind = email.indexOf('@');
                alert(ind) ;
                if(ind !=0){
                    for(i = ind + 1 ; i<email.length ; i++){
                        if(email.charAt(i) == '@'){
                            alert(email.charAt(i));
                            break;
                        }
                        else{
                            if(email.charAt(i)=='.'){
                                var d = 1;
                                for(var x = i;x < email.length;x++){
                                    if(email.charAt(x) =='.')
                                    d=0;
                                }
                                if(d==1){
                                    flagE = 1;
                                }
                                break;
                            }
                        }
                    }
                }

                if(flagE == 0){
                    if(email.charAt(0)>='A'&&email.charAt(0)<='Z'){
                        if(email.charAt(email.length - 1)>='A'&& email.charAt(email.length - 1)<='Z' ||
                        email.charAt(email.length - 1)>='a'&& email.charAt(email.length - 1)<='z' ||
                        email.charAt(email.length - 1)>='0'&& email.charAt(email.length - 1)<='9')
                        flagE = 1;

                    }
                    if(flagE == 0)
                    alert("Incorect Email or Username");
                }
            }
            

           }


           
       }