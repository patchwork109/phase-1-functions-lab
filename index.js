// Code your solution in this file!

// Takes in a pick up location
// Returns the distance from the pick up location to the hq on 42nd st in blocks
function distanceFromHqInBlocks (pickUpLocation) {
    return Math.abs(pickUpLocation - 42)
}

// Each block in Manhattan is 264 feet long
// Take in the return value and multiply by 264
function distanceFromHqInFeet (numberOfBlocks) {
    return distanceFromHqInBlocks(numberOfBlocks)*264;
}

// Calculates number of feet travelled given starting and ending block
function distanceTravelledInFeet (start, destination) {
    return Math.abs((destination - start)*264);
}

// Gives customers a free sample - first 400 ft are free
// Charges 2 cents per foot when total feet travelled is between 400 and 2000
// Charges $25 for a distance over 2000 ft
// Does not allow rides for over 2500 ft --> return "cannot travel that far"
function calculatesFarePrice (start, destination) {
    if (distanceTravelledInFeet (start, destination) < 400) {
        return 0;
    }
    else if (distanceTravelledInFeet (start, destination) < 2000) {
        return ((distanceTravelledInFeet(start, destination)-400)*.02);
    }
    else if (distanceTravelledInFeet (start, destination) > 2000 && distanceTravelledInFeet (start, destination) < 2500) {
        return 25;
    }
    else if (distanceTravelledInFeet (start, destination) > 2500) {
        return "cannot travel that far";
}
}