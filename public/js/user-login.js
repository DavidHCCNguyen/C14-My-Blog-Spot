// Assuming you have an HTML form with id="login-form" containing input fields for username and password

document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const username = document.getElementById('username-input').value;
    const password = document.getElementById('password-input').value;
  
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // User login successful, redirect to dashboard or homepage
        window.location.replace('/dashboard');
      } else {
        // User login failed, display error message
        const errorData = await response.json();
        console.error(errorData.message);
      }
    } catch (error) {
      console.error('Error occurred during user login:', error);
    }
  });
  