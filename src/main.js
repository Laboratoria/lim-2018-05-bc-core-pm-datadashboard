const go=document.getElementById('go');
const user=document.getElementById('user');
go.addEventListener('click',(event)=>{
    event.preventDefault();
const pass= document.getElementById('pass').value;
    if(pass=='abc'){
    document.getElementById('login').style.display='none'; 
    document.getElementById('platform').style.display='block';
    
    }
    else if(pass==''){
        alert("casilleros en blanco")
    }
    else{
        alert ("contraseña incorrecta");
    }
}
);

user.addEventListener('click',(event)=>{
    document.getElementById('second').style.display='block';
})


