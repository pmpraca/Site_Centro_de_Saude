    
    //Arrays para simular base de dados
    var emailArray=[];
    var passwordArray=[];

    //coloca em variáveis a informação dos elementos da página
    var loginBox = document.getElementById("login");
    var regBox = document.getElementById("register");
    var forgetBox = document.getElementById("forgot");

    var loginTab = document.getElementById("lt");
    var regTab = document.getElementById("rt");

    // Mostra separador de registo de utilizador
    function regTabFun(){
    
        regBox.style.visibility="visible";
        loginBox.style.visibility="hidden";
        forgetBox.style.visibility="hidden";
        
        //Muda cor do separador selecionado
        regTab.style.backgroundColor="rgb(45, 89, 134)";
        loginTab.style.backgroundColor="rgba(255, 165, 0)";
    }

    // Mostra separador de login
    function loginTabFun(){        

        regBox.style.visibility="hidden";
        loginBox.style.visibility="visible";
        forgetBox.style.visibility="hidden";
        
        //Muda cor do separador selecionado
        loginTab.style.backgroundColor="rgb(45, 89, 134)";
        regTab.style.backgroundColor="rgba(255, 165, 0)";
    }

    //Mostra separador de reposição de password
    function forTabFun(){

        regBox.style.visibility="hidden";
        loginBox.style.visibility="hidden";
        forgetBox.style.visibility="visible";

        regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
        loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";

    }

    //Efetua registo de utilizador
    function register(){
        
        //Coloca em variáveis os dados indicados pelo utilizador
        var email = document.getElementById("re").value;
        var password = document.getElementById("rp").value;
        var passwordRetype = document.getElementById("rrp").value;

        //Verifica se os campos estão preenchidos e se as passwords correspondem
        //Em caso afirmativo, regista se nao existir
        if (email == ""){
            alert("Email obrigatório.");
            return ;
        }
        else
        {
            if (password == "")
            {
                alert("Palavra-passe obrigatória.");
                return ;
            }            
            else 
            {
                if (passwordRetype == "")
                {
                    alert("Palavra-passe obrigatória.");
                    return ;
                }
                else 
                {
                    if ( password != passwordRetype )
                    {
                        alert("Palavra-passe não corresponde, por favor tente de novo.");
                        return;
                    }
                    else 
                    {
                        //Verifica se utilizador existe
                        if(emailArray.indexOf(email) == -1){

                            //Coloca no array os dados do utilizador
                            emailArray.push(email);
                            passwordArray.push(password);

                            alert(email + "  Obrigado por se registar. \nTente fazer login");

                            //Limpa campos
                            document.getElementById("re").value ="";
                            document.getElementById("rp").value="";
                            document.getElementById("rrp").value="";
                        }
                        else{
                            //Utilizador já existe - avisa
                            alert(email + " já está registado.");
                            return ;
                        }
                    }
                }
            }
        }
    }

    //Efetua o login do utilizador
    function login(){
        
        // Coloca em variáveis os valores dos elementos da página indicados pelo utilizador (mail e password)
        var email = document.getElementById("se").value;
        var password = document.getElementById("sp").value;

        // indexOf -> devolve o indice, no array, do valor indicado como parametro. 
        // Não existindo devolve -1
        var i = emailArray.indexOf(email); 

        //Se mail não existir no array, então é pq o utilizador não 
        if(i == -1){
            //verifica se o email foi preenchido
            if (email == ""){
                alert("Email obrigatório.");
                return ;
            }
            alert("Email não existe.");
            return ;
        }
        else 
        {
            //Verifica se password indicada corresponde
            //Usa o indice do email (i) para comparar password com elemento do array
            if(passwordArray[i] != password){
                //Não corresponde...verifica se está preenchida
                if (password == ""){
                    alert("Palavra-passe obrigatória.");
                    return ;
                }
                alert("Palavra-passe não corresponde");
                return ;
            }
            else {
                //Existindo email e password corresponde, avisa que faz login
                alert(email + " já fez login \n Bem vindo ao nosso site.");

                //Limpa campos
                document.getElementById("se").value ="";
                document.getElementById("sp").value="";
                return ;
            }
        }

    }

    //Recupera password
    function forgot(){
        
        //Coloca valor do elemento mail na variável
        var email = document.getElementById("fe").value;

        //Verifica se existe no array e se está preenchida
        if(emailArray.indexOf(email) == -1){
            if (email == ""){
                alert("Email obrigatório.");
                return ;
            }
            alert("Email não existe.");
            return ;
        }
        //Indica mensagem de mail enviado (na realidade geraria password e faria o envio por email)
        alert("O email foi enviado, verifique em 24 horas \n Obrigado");
        document.getElementById("fe").value ="";
    }