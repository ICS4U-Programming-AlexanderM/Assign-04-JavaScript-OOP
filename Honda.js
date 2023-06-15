//  Created by Alexander Matheson
//  Created on 2023-June-14
//  Version 1.0
//  Copyright (c) 2023 Alexander Matheson. All rights reserved.
//
//  This file contains the Honda subclass.

// Import parent class.
const Vehicle = require('./Vehicle.js');

class Honda extends Vehicle {
    constructor(stock) {
        super();
        this._multiplier = 20;

        // Decrease the Honda stock and check availability.
        this._isAvailable = stock.decreaseHonda();
    }
}

// Export class to main.
module.exports = Honda;
