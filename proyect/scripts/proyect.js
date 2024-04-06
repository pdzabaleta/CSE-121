document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("login-btn").addEventListener("click", function() {
      var username = document.getElementById("user").value;
      var password = document.getElementById("pass").value;
  
      // Simulamos una base de datos JSON
      var users = [
        { username: "usuario1", password: "123456" },
        { username: "usuario2", password: "password123" },
        { username: "Admin", password: "Admin" }
        // Agrega más usuarios según sea necesario
      ];
  
      // Verificamos si el usuario y la contraseña coinciden
      var found = users.some(function(user) {
        return user.username === username && user.password === password;
      });
  
      if (found) {
        // Si el usuario existe en la base de datos, redirigir a la página de inicio
        window.location.href = "index.html";
      } else {
        alert("Incorrect username or password");
      }
    });
  });
  

  // Simulación de carga de datos desde un archivo JSON

// Llama a togglePasswordVisibility para ocultar la contraseña al cargar la página
// Llama a togglePasswordVisibility para ocultar la contraseña al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    // Llama a togglePasswordVisibility con el ID del primer elemento de contraseña
    togglePasswordVisibility("password1");
  });
  
  const passwordsData = {
    "password1": {
      "username": "usuario1",
      "password": "contraseña1"
    },
    // Agrega otros pares usuario-contraseña aquí si es necesario
  };
  
  // Actualiza el texto del usuario y muestra/oculta la contraseña
  function togglePasswordVisibility(passwordId) {
    const passwordElement = document.getElementById(passwordId);
    const toggleIcon = passwordElement.parentElement.querySelector('.toggle-password');
    
    // Muestra siempre el nombre de usuario al cargar la página
    const userData = passwordsData[passwordId];
    if (userData) {
      document.getElementById(`username${passwordId.slice(-1)}`).textContent = userData.username;
    }
  
    // Oculta la contraseña al cargar la página
    passwordElement.textContent = '********';
    toggleIcon.textContent = 'visibility';
    
    // Agrega un evento de clic al icono del ojo para revelar/ocultar la contraseña
    toggleIcon.addEventListener('click', function() {
      if (passwordElement.textContent === '********') { // Si la contraseña está oculta
        passwordElement.textContent = userData.password;
        toggleIcon.textContent = 'visibility_off';
      } else { // Si la contraseña está revelada
        passwordElement.textContent = '********';
        toggleIcon.textContent = 'visibility';
      }
    });
  }