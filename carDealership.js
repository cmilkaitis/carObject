var carDealership = {
    
    "sedan" : {
        price : "$400",
        available: "yes",
        numAvailable: 20,
        request : function(){
            if (carDealership.sedan.available === 'yes'){
                return `There are ${carDealership.sedan.numAvailable} sedans available today at ${carDealership.sedan.price}.`;
            }
            return `There are no sedans available today`;
        }
    },

    "suv" : {
        price : "$500",
        available: "yes",
        numAvailable: 15,
        request : function(){
            if (carDealership.suv.available === 'yes'){
                return `There are ${carDealership.suv.numAvailable} SUVs available today at ${carDealership.suv.price}.`;
            }
            return `There are no SUV's available today`;
        }

    },

    "sports" : {
        price : "$600",
        available: "no",
        numAvailable: 0,
        request : function(){
            if (carDealership.sports.available === 'yes'){
                return `There are ${carDealership.sports.numAvailable} sports cars available today at ${carDealership.sports.price}.`;
            }
            return `There are no sports cars available today`;
        }
    }

}

var request_sedan = carDealership.sedan.request();
var request_sportsCar = carDealership.sports.request();
var request_SUV = carDealership.suv.request();


console.log(request_sedan);
console.log(request_sportsCar);
console.log(request_SUV);


