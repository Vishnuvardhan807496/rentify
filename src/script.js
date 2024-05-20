document.getElementById('registerBtn').addEventListener('click', function() {
    document.getElementById('registrationForm').style.display = 'block';
    document.getElementById('listPropertyForm').style.display = 'none';
});

document.getElementById('listPropertyBtn').addEventListener('click', function() {
    document.getElementById('listPropertyForm').style.display = 'block';
    document.getElementById('registrationForm').style.display = 'none';
});

document.getElementById('homeBtn').addEventListener('click', function() {
    document.getElementById('listPropertyForm').style.display = 'none';
    document.getElementById('registrationForm').style.display = 'none';
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('User Registered (simulated)');
    // Here you would normally handle the registration logic
});

document.getElementById('propertyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Property Listed (simulated)');
    // Here you would normally handle the property listing logic
});