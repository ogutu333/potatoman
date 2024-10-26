const carDetails = {
    "3 Series": {
	description: "The BMW 3 Series is a compact executive car that combines performance with luxury. It features a sporty design and advanced technology.",
	image: "../images/BMW-3-Series.jpg"  // Path to the image in the images folder
    },
    "5 Series": {
	description: "The BMW 5 Series is a mid-size luxury sedan known for its comfort, performance, and cutting-edge technology.",
	image: "../images/BMW-5-Series.jpg"  // Path to the image in the images folder
    },
    "7 Series": {
	description: "The BMW 7 Series is a full-size luxury sedan that offers a blend of performance, comfort, and advanced features.",
	image: "../images/BMW-7-Series.jpg"  // Path to the image in the images folder
    },
    "X5": {
	description: "The BMW X5 is a luxury SUV that provides a spacious interior, powerful engines, and off-road capabilities.",
	image: "../images/BMW-X5.jpg"  // Path to the image in the images folder
    },
    "Z4": {
	description: "The BMW Z4 is a sporty convertible that offers thrilling performance and a stylish design."
	image: "../images/BMW-Z4.jpg"  // Path to the image in the images folder
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
