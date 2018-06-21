// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    let newArr = []
    for (let i=0; i<2; i++) {
        newArr.push(drivers[i])
    }
    return newArr
};

const returnLastTwoDrivers = function(drivers) {
    let newArr = []
    for (let i=(drivers.length-2); i<(drivers.length); i++) {
        newArr.push(drivers[i])
    }
    return newArr
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(mult) {
    return function(value) {
        return mult*value
    }
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, whichFunction) {
    return whichFunction(drivers)
};
