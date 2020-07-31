$(function(){

    $('#topbar-login').click(function(){
        $('#signup').css('display','none');
        $('#signin').css('display','block');
    });
    
    $('#topbar-signup').click(function(){
        $('#signup').css('display','block');
        $('#signin').css('display','none');
    });

    $('#topbar-logout').click(function(){
        $('#signup').css('display','none');
        $('#signin').css('display','block');
        $('#image-one').css('display','none');
        $('#image-two').css('display','none');
        $('#image-three').css('display','none');
        $('#topbar-login').css('display','block');
        $('#topbar-signup').css('display','block');
        $('#topbar-logout').css('display','none'); 
    });

    $('#signup-form').submit(function(event){
        event.preventDefault();
        console.log("username -- ", event.target.username.value);
        
        var data= {
            name: event.target.name.value,
            username: event.target.username.value,
            password: event.target.password.value,
            type: event.target.type.value,
        }

         $.get('https://5ee248e08b27f300160948a4.mockapi.io/data',function(user){
             if(user.length == 0){
                var http= new XMLHttpRequest();
                http.open('POST', 'https://5ee248e08b27f300160948a4.mockapi.io/data', true);
                http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");       
                http.send(JSON.stringify(data));
                http.onreadystatechange = function(){
                    if(http.readyState===4){
                        $('#signup').css('display','none');
                        $('#signin').css('display','block');   
                    }
                }; 
             }
             else{
                var hasProductKey = false;
                for(let key in user){
                   if(event.target.username.value == user[key].username){
                       hasProductKey = true;
                       alert('User is already exist..!!');
                       break;          
               }
           }
            if(!hasProductKey){
                var http= new XMLHttpRequest();
                http.open('POST', 'https://5ee248e08b27f300160948a4.mockapi.io/data', true);
                http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");       
                http.send(JSON.stringify(data));
                http.onreadystatechange = function(){
                    if(http.readyState===4){
                        $('#signup').css('display','none');
                        $('#signin').css('display','block');   
                    }
                }; 
            }
            
             }
            
         }); 
       

    });
    
    $('#login-form').submit(function(event){
        event.preventDefault();
        $.get('https://5ee248e08b27f300160948a4.mockapi.io/data',function(response){
            for(let i=0; i<response.length;i++){
                if(event.target.username.value == response[i].username && event.target.password.value == response[i].password && event.target.type.value == response[i].type){
                    if(event.target.type.value == "A"){
                        console.log('a press');
                        $('#topbar-login').css('display','none');
                        $('#topbar-signup').css('display','none');
                        $('#topbar-logout').css('display','block');
                        $('#image-one').css('display','block');
                        $('#signup').css('display','none');
                        $('#signin').css('display','none');  
                    }
                    else if(event.target.type.value == 'B'){
                        $('#topbar-login').css('display','none');
                        $('#topbar-signup').css('display','none');
                        $('#topbar-logout').css('display','block');
                        $('#signup').css('display','none');
                        $('#signin').css('display','none');    
                        $('#image').css('flex-direction','row');
                        $('#image-one').css('display','block');
                        $('#image-two').css('display','block'); 
                    }
                    else if(event.target.type.value == 'C'){
                        console.log('c is press');
                        $('#topbar-login').css('display','none');
                        $('#topbar-signup').css('display','none');
                        $('#topbar-logout').css('display','block');
                        $('#signup').css('display','none');
                        $('#signin').css('display','none'); 
                        $('#image').css('flex-direction','column');
                        $('#image-three').css('display','block');
                        $('#image-two').css('display','block');    
                    } 
                   break;
                }
                else{
                     $('#signup').css('display','block');
                     $('#signin').css('display','none');   
                } 
            }
        })
    });


});