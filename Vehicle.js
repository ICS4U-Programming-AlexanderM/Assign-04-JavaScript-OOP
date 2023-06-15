//  Created by Alexander Matheson
//  Created on 2023-June-14
//  Version 1.0
//  Copyright (c) 2023 Alexander Matheson. All rights reserved.
//
//  This file contains the Vehicle class.
class Vehicle {
    constructor() {
        this._baseCost = 100;
        this._isAvailable = false;
    }

    // Function to randomly determine if the vehicle was damaged.
    drive() {
        let isDamaged = false;
        const chance = Math.floor(Math.random() * 26);

        if (chance === 1) {
            isDamaged = true;
        }

        return isDamaged;
    }
}

// Export class to main.
module.exports = Vehicle;
