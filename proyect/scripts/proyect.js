document.addEventListener("DOMContentLoaded", function() {
    var loginButton = document.getElementById("login-btn");
    if (loginButton) {
        loginButton.addEventListener("click", function() {
            var username = document.getElementById("user").value;
            var password = document.getElementById("pass").value;

            fetch('users.json')
                .then(response => response.json())
                .then(users => {
                    users.forEach(function(user) {
                        if (user.username === username && user.password === password) {
                            found = true;
                        }
                    });

                    if (found) {
                        window.location.href = "index.html";
                    } else {
                        alert("Incorrect username or password");
                    }
                })
                .catch(error => console.error('Error loading users data:', error));
        });
    }

    const elementos = document.querySelectorAll('.elemento');
    elementos.forEach(function(elemento) {
        const passwordId = elemento.getAttribute('id').replace('-container', '');
        fetch('passwords.json')
            .then(response => response.json())
            .then(passwordsData => {
                togglePasswordVisibility(passwordId, passwordsData);
            })
            .catch(error => console.error('Error loading passwords data:', error));
    });
});

function togglePasswordVisibility(passwordId, passwordsData) {
    const passwordElement = document.getElementById(`${passwordId}`);
    const toggleIcon = passwordElement.parentElement.querySelector('.toggle-password');
    
    const userData = passwordsData[passwordId];
    if (userData) {
        document.getElementById(`username${passwordId.slice(-1)}`).textContent = userData.username;
    }
  
    passwordElement.textContent = '********';
    toggleIcon.textContent = 'visibility';
    
    toggleIcon.addEventListener('click', function() {
        if (passwordElement.textContent === '********') {
            passwordElement.textContent = userData.password;
            toggleIcon.textContent = 'visibility_off';
        } else {
            passwordElement.textContent = '********';
            toggleIcon.textContent = 'visibility';
        }
    });
}
