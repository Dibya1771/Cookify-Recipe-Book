const handleSubmit = async (event) => {
    event.preventDefault();
  
    const { name, email, password, gender, dob } = formData;
  
    try {
      if (isSignUp) {
        // Register logic
        const response = await fetch('http://localhost:8000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password, gender, dob }),
        });
        const data = await response.json();
        console.log('Registration successful:', data);
        // Perform any necessary actions after successful registration
      } else {
        // Login logic
        const response = await fetch('http://localhost:8000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        if (response.ok) {
          const data = await response.json();
          console.log('Login successful:', data);
          // Perform any necessary actions after successful login
        } else {
          console.error('Login failed:', response.statusText);
          // Handle login error
        }
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };
  