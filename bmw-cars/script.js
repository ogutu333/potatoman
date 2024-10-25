const carDetails = {
    "3 Series": "The BMW 3 Series is a compact executive car that combines performance with luxury. It features a sporty design and advanced technology.",
    "5 Series": "The BMW 5 Series is a mid-size luxury sedan known for its comfort, performance, and cutting-edge technology.",
    "7 Series": "The BMW 7 Series is a full-size luxury sedan that offers a blend of performance, comfort, and advanced features.",
    "X5": "The BMW X5 is a luxury SUV that provides a spacious interior, powerful engines, and off-road capabilities.",
    "Z4": "The BMW Z4 is a sporty convertible that offers thrilling performance and a stylish design."
};

document.getElementById('showDetailsButton').addEventListener('click', function() {
    const selectedCar = document.getElementById('carSelect').value;
    const carDetailsDiv = document.getElementById('carDetails');

    if (selectedCar) {
        carDetailsDiv.textContent = carDetails[selectedCar];
    } else {
        carDetailsDiv.textContent = 'Please select a car model to see its details.';
    }
});
