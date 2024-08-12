// Defining an asynchronous function using async/await
var getClams = async function() {
  try {
    // Simulating an asynchronous operation using fetch (e.g., fetching data from an API)
    let response = await fetch('https://api.example.com/clams');
    
    // Checking if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    
    // Parsing the JSON data from the response
    let data = await response.json();
    
    // Logging the data to the console
    console.log(data);
    
    // Returning the data for further use
    return data;
  } catch (error) {
    // Handling any errors that occurred during the fetch operation
    console.error('There was a problem with the fetch operation:', error);
  }
};

// Example usage of the getClams function
getClams().then(data => {
  // Do something with the data, if needed
}).catch(error => {
  // Handle any errors that were thrown
});
