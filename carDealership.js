var carDealership = {
    
    "sedan" : {
        price : "$400",
        numAvailable: 20
    },

    "suv" : {
        price : "$500",
        numAvailable: 15
    },

    "sports" : {
        price : "$600",
        numAvailable: 0
    },

    carCheck(carType){
        if(this[carType].numAvailable > 0){
            return `There are ${this[carType].numAvailable} ${carType}'s at ${this[carType].price}`;
        }
        return "There are no cars available";
    },

    rentRequest(carType){
        if(this[carType].numAvailable > 0){ 
            return `You rented a ${carType} for ${this[carType].price}.`;
        }
        return `Sorry, there are none left`;
    }

}


const request_SUV = carDealership.rentRequest("suv");
const request_SPORTS = carDealership.rentRequest("sports");
const request_SEDAN = carDealership.rentRequest("sedan");

var check_suv = carDealership.carCheck("suv");
var check_sports = carDealership.carCheck("sports");
var check_sedan = carDealership.carCheck("sedan");

console.log(check_suv);
console.log(check_sports);
console.log(check_sedan);

console.log('\n')

console.log(request_SUV);
console.log(request_SPORTS);
console.log(request_SEDAN);





