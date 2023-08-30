document.addEventListener('DOMContentLoaded', function() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        // Assuming you want the first record
        const record = data[0];

        // Use the data as needed
        console.log('Email:', record.email);
        console.log('Name:', record.name);
        console.log('Street:', record.address.street);
        console.log('City:', record.address.city);
    })
    .catch(error => console.error('Error:', error));
});
