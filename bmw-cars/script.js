const carDetails = {
    "3 Series": {
	description: "The BMW 3 Series is a compact executive car that combines performance with luxury. It features a sporty design and advanced technology.",
	image: "BMW-3-Series.jpg"
    },
    "5 Series": {
	description: "The BMW 5 Series is a mid-size luxury sedan known for its comfort, performance, and cutting-edge technology.",
	image: "BMW-5-Series.jpg"
    },
    "7 Series": {
	description: "The BMW 7 Series is a full-size luxury sedan that offers a blend of performance, comfort, and advanced features.",
	image: "BMW-7-Series.jpg"
    },
    "X5": {
	description: "The BMW X5 is a luxury SUV that provides a spacious interior, powerful engines, and off-road capabilities.",
	image: "BMW-X5.jpg"
    },
    "Z4": {
	description: "The BMW Z4 is a sporty convertible that offers thrilling performance and a stylish design."
	image: "BMW-Z4.jpg"
    }
};

document.getElementById('showDetailsButton').addEventListener('click', function() {
    const selectedCar = document.getElementById('carSelect').value;
    const carDetailsDiv = document.getElementById('carDetails');
    const carImage = document.getElementById('carImage');
    const carDescription = document.getElementById('carDescription');

    if (selectedCar) {
        carDescription.textContent = carDetails[selectedCar].description;
        carImage.src = carDetails[selectedCar].image;
        carImage.alt = `${selectedCar} image`;
        carImage.style.display = 'block'; // Show the image
    } else {
        carDescription.textContent = 'Please select a car model to see its details.';
        carImage.style.display = 'none'; // Hide the image
    }
});
