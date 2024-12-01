function checkSpeed() {
    // prompt the user to input the speed of the car
    let speed = prompt("Enter the speed of the car (km/h):");

    // Convert the input to a number
    speed = Number(speed);

    // validate the input
    if (isNaN(speed) || speed < 0) {
        alert("Invalid input. Please enter a valid speed.");
        return;
    }
}