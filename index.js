// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return [drivers[0], drivers[1]]
}


const returnLastTwoDrivers = (drivers) => {
    return [drivers[drivers.length-2], drivers[drivers.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (fare) => {
  console.log(fare)
    return (multiplier) => {
      console.log(fare, multiplier)
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);


const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (array, cb) => {
  console.log(array);
  return cb(array);
}
