//  Created by Alexander Matheson
//  Created on 2023-June-14
//  Version 1.0
//  Copyright (c) 2023 Alexander Matheson. All rights reserved.
//
//  This file contains the Rental class.
class Rental {
    constructor(vehicle, customer) {
        this._vehicle = vehicle;
        this._customer = customer;
    }

    // Calculate the cost of the rental.
    calculateCost() {
        let costString;
        let cost;

        // Determine damage.
        if (this._vehicle.drive()) {
            cost = this._vehicle._baseCost + (this._customer._length * this._vehicle._multiplier) + 2000;
            costString = "Due to repair fees, $" + cost;
        } else {
            cost = this._vehicle._baseCost + (this._customer._length * this._vehicle._multiplier);
            costString = "$" + cost;
        }

        return costString;
    }

    // Print information.
    print() {
        let info;

        // Determine availability.
        if (!this._vehicle._isAvailable) {
            info = "Unfortunately, the requested vehicle is not available, please contact " + this._customer.getName() +
                " once it becomes available. You can contact them at: " + this._customer._email +
                ", or: " + this._customer._phone;
        } else {
            info = this.calculateCost() + " will be charged to " + this._customer.getName() +
                ". You can contact them at: " + this._customer._email + ", or: " + this._customer._phone;
        }

        return info;
    }
}

// Export class to main.
module.exports = Rental;
