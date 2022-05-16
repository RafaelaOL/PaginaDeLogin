function logar (){

    var login = document.getElementById ('login').value;
    var senha = document.getElementById ('senha').value;

    var tentativa = 1;

   do{

        var login = prompt("Login incorreto, informe novamente"); 
        var senha = prompt("Senha incorreto, informe novamente"); 
        
        if(login == 'gato' && senha == 'miau'){
            alert('Sucesso');
            break;
        }else{
            if( tentativa == 3){
                alert ("senha bloqueada após 3 tentativas. Favor contatar o administrador");
                break;
            }else{
                alert('Usuário ou senha incorreto'); 
                //deveria pedir para informar o login e senha novamente mas como???
            }
            tentativa = tentativa + 1;
        }
    } while (tentativa <= 3);
   
}
