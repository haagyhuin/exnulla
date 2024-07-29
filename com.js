let allowedDomains = ['example.com', 'testsite.org'];

// Function to validate email domain
function isValidEmailDomain(email) {
    let emailDomain = email.split('@')[1];
    return allowedDomains.includes(emailDomain);
}

// Example usage:
console.log(isValidEmailDomain('user@example.com')); // Output: true
console.log(isValidEmailDomain('user@unknown.com')); // Output: false
