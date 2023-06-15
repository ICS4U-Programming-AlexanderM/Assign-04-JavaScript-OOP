//  Created by Alexander Matheson
//  Created on 2023-June-14
//  Version 1.0
//  Copyright (c) 2023 Alexander Matheson. All rights reserved.
//
//  This file contains the Stock class.

class Stock {
    constructor(totalFord, totalHonda) {
        this._totalFord = totalFord;
        this._totalHonda = totalHonda;
    }

    // Decrease the Ford stock and return availability.
    decreaseFord() {
        let isAvailable = true;
        if (this._totalFord - 1 < 0) {
            isAvailable = false;
        } else {
            this._totalFord -= 1;
        }
        return isAvailable;
    }

    // Decrease the Honda stock and return availability.
    decreaseHonda() {
        let isAvailable = true;
        if (this._totalHonda - 1 < 0) {
            isAvailable = false;
        } else {
            this._totalHonda -= 1;
        }
        return isAvailable;
    }
}

// Export class to main.
module.exports = Stock;
