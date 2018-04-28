var carDealership = {
    
    "sedan" : {
        price : "$400",
        available: "yes",
        numAvailable: 20,
        isAvailable : function(){
            if (carDealership.sedan.available === 'yes'){
                return `There are ${carDealership.sedan.numAvailable} sedans available today at ${carDealership.sedan.price}.`
            }
            return `There are no cars available today`;
        }
    },

    "suv" : {
        price : "$500",
        available: "yes",
        numAvailable: 15,
        isAvailable : function(){
            if (carDealership.suv.available === 'yes'){
                return `There are ${carDealership.suv.numAvailable} SUVs available today at ${carDealership.suv.price}.`
            }
            return `There are no cars available today`;
        }

    },

    "sports" : {
        price : "$600",
        available: "no",
        numAvailable: 0,
        isAvailable : function(){
            if (carDealership.sports.available === 'yes'){
                return `There are ${carDealership.sports.numAvailable} sports cars available today at ${carDealership.sports.price}.`
            }
            return `There are no cars available today`;
        }
    }

}