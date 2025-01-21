// Code your solution in this file!
const  returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
};
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2,4);
};
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const selectDifferentDrivers = function(drivers, selectingDrivers){
    return selectingDrivers(drivers)
}

function createFareMultiplier(multiplier){
    return function(fare){
        return fare * multiplier
    }
};
const fareDoubler = createFareMultiplier(2);

const fareMultiplier = function(multiplier){
    return function(fare){
        return fare * multiplier
    };
}

const fareTripler = createFareMultiplier(3);

const fareTre = function(multiplier){
    return function(fare){
        return fare * multiplier
    };
}

        