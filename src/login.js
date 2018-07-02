document.querySelector('#submit').addEventListener('click', (e) => {
    let userEmail = document.querySelector('#email').value;
    let userPassword = document.querySelector('#password').value;
    if (userEmail === 'admin' && userPassword === 'admin') {
  
      window.location.href = 'index.html';
  
    } else {
      alert('No es el usuario o contraseña correcta');
    }
  })