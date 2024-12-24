// Function to get a specific cookie by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null; // Return null if the cookie is not found
}

// Function to display the ULID session automatically
function displayULID() {
    const userULID = getCookie('userULID');
    const statusElement = document.getElementById('status');

    if (userULID) {
        statusElement.textContent = `User ULID: ${userULID}`;
    } else {
        statusElement.textContent = 'No ULID found in the cookie.';
    }
}

// Call the function on page load to display the ULID session
window.onload = displayULID;
