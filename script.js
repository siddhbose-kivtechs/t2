// Function to get a specific cookie by name
function getCookie(name) {
    const cookieArray = document.cookie.split(';');  // Split the document.cookie string into individual cookies
    for (let i = 0; i < cookieArray.length; i++) {
        const cookie = cookieArray[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);  // Return the value of the cookie
        }
    }
    return null;  // Return null if the cookie is not found
}

// Function to display the ULID session automatically
function displayULID() {
    const userULID = getCookie('userULID');  // Retrieve the userULID from the cookie
    const statusElement = document.getElementById('status');  // Get the status element to display the ULID

    // Display the ULID or a message if not found
    if (userULID) {
        statusElement.textContent = `User ULID: ${userULID}`;
    } else {
        statusElement.textContent = 'No ULID found in the cookie.';
    }
}

// Call the function on page load to display the ULID session
window.onload = displayULID;
