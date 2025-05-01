document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'main.html'; // Redirect to main page after login
  });
  
document.getElementById('btn-tutorials').addEventListener('click', function () {
  window.location.href = 'tutorials.html';
});

document.getElementById('btn-feedback').addEventListener('click', function () {
  window.location.href = 'feedback.html';
});
