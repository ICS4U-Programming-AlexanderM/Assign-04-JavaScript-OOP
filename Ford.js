//  Created by Alexander Matheson
//  Created on 2023-June-14
//  Version 1.0
//  Copyright (c) 2023 Alexander Matheson. All rights reserved.
//
//  This file contains the Ford subclass.

// Import parent class.
const Vehicle = require('./Vehicle.js');

class Ford extends Vehicle {
    constructor(stock) {
        super();
        this._multiplier = 25;

        // Decrease the Ford stock and check availability.
        this._isAvailable = stock.decreaseFord();
    }
}

// Export class to main.
module.exports = Ford;
