// Assuming you have an HTML form with id="signup-form" containing input fields for username and password

document.getElementById('signup-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const username = document.getElementById('username-input').value;
    const password = document.getElementById('password-input').value;
  
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // User signup successful, redirect to dashboard or homepage
        window.location.replace('/dashboard');
      } else {
        // User signup failed, display error message
        const errorData = await response.json();
        console.error(errorData.message);
      }
    } catch (error) {
      console.error('Error occurred during user signup:', error);
    }
  });
  