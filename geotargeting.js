  // Make an API call to get the visitor's IP address
fetch('http://api.ipstack.com/check?access_key=656726b0c5c56b9aeb3e488714cf281d')
    .then(response => response.json())
    .then(data => {
        const country = data.country_code; // Extract country code from the response
        redirectUser(country);
    })
    .catch(error => console.error('Error fetching IP address:', error));
    function redirectUser(country) {
    // Define the task URLs for different countries
    const taskUrls = {
        'US': 'https://singingfiles.com/show.php?l=0&u=1746291&id=53535',
        'UK': 'https://singingfiles.com/show.php?l=0&u=1746291&id=57093/uk-task',
        'MA': 'https://singingfiles.com/show.php?l=0&u=1746291&id=59454'
        // Add more countries and their corresponding task URLs
    };

    // Redirect the user based on their country
    if (taskUrls.hasOwnProperty(country)) {
        window.location.href = taskUrls[country];
    } else {
        // Redirect to a default task or handle the case where the country is not listed
        window.location.href = 'https://your-cpa-platform.com/default-task';
    }
}
