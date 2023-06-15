//  Created by Alexander Matheson
//  Created on 2023-June-14
//  Version 1.0
//  Copyright (c) 2023 Alexander Matheson. All rights reserved.
//
//  This file contains the customer class.
class Customer {
    constructor(firstName, lastName, license, phone, email, vehicle, length) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._license = license;
        this._phone = phone;
        this._email = email;
        this._vehicle = vehicle;
        this._length = length;
    }

    // Return customer's name.
    getName() {
        return this._firstName + " " + this._lastName;
    }
}

// Export class to main.
module.exports = Customer;
