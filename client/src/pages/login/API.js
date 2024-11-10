
export const login = async (username, password) => {
    try {
        const loginResponse = await fetch('http://localhost:8080/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        if (!loginResponse.ok) {
            const loginError = await loginResponse.text();
            setError('Login failed: ' + loginError);
            return;
        }

        
        const loginData = await loginResponse.text();
        localStorage.setItem('authToken', loginData); 

        
        
    } catch (error) {
        console.error('Error during login:', error);
        setError('An error occurred during login');
    }
};