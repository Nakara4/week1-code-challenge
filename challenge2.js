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

    // Define the speed limit and the demerit point calculation
    const speedlimit = 70;
    const kmperpoint = 5;
    
}