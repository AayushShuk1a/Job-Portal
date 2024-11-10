export const setToken = (token, expiresInMinutes) => {
    const expirationTime = new Date().getTime() + expiresInMinutes * 60 * 1000; // Set expiration time (in milliseconds)
    localStorage.setItem('authToken', token);
    localStorage.setItem('authTokenExpiration', expirationTime); // Store expiration time
};

// Function to get the token, checking if it's expired
export const getToken = () => {
    const token = localStorage.getItem('authToken');
    const expirationTime = localStorage.getItem('authTokenExpiration');

    // If there's no token or it has expired
    if (!token || !expirationTime || new Date().getTime() > expirationTime) {
        removeToken(); // Remove expired or nonexistent token
        return null;
    }

    return token; // Return the token if it's valid
};

// Function to remove the token
export const removeToken = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authTokenExpiration');
};
