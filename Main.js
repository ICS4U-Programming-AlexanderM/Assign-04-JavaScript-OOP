//  Created by Alexander Matheson
//  Created on 2023-June-14
//  Version 1.0
//  Copyright (c) 2023 Alexander Matheson. All rights reserved.
//
//  This is a mock-up of a vehicle rental system.

// Import libraries.
const fs = require('fs');
const readlineSync = require('readline-sync');

// Import classes.
const Customer = require('./Customer.js');
const Vehicle = require('./Vehicle.js');
const Ford = require('./Ford.js');
const Honda = require('./Honda.js');
const Rental = require('./Rental.js');
const Stock = require('./Stock.js');

// Declare constants and create the stock object.
const HONDAS = 3;
const FORDS = 2;
let totalStock = new Stock(FORDS, HONDAS);
var customerInfo = "";

// Get file to use from user.
let stringInput = readlineSync.question("Enter the name of the (csv) file to use: ");

// Check if the file exists.
if (fs.existsSync(stringInput)) {
    // Read the input file and create an array of each line.
    const input = fs.readFileSync(stringInput, 'utf8');
    const fileArr = input.split(/\r?\n/);

    // Start counter at 1 to skip header row.
    var counter = 1;

    // Read each line of input file.
    while (counter < fileArr.length) {
        let customerList = fileArr[counter].split(",");

        // Convert license number, phone number and length of rental to int.
        let license = parseInt(customerList[2]);
        let phone = parseInt(customerList[3]);
        let length = parseInt(customerList[6]);

        // Check if conversion was successful.
        if (isNaN(license) || isNaN(phone) || isNaN(length)) {
            customerInfo += "Please ensure all information has been entered correctly.\n";
        } else {
            // Create customer class.
            let currentCustomer = new Customer(customerList[0], customerList[1], license, phone, customerList[4], customerList[5], length);

            // Create vehicle class.
            let currentVehicle;

            // Determine which vehicle subclass to create.
            if (currentCustomer._vehicle.toLowerCase() == "ford") {
                currentVehicle = new Ford(totalStock);
            } else if (currentCustomer._vehicle.toLowerCase() == "honda") {
                currentVehicle = new Honda(totalStock);
            } else {
                currentVehicle = new Vehicle();
            }

            // Create rental class.
            let currentRental = new Rental(currentVehicle, currentCustomer);

            // Get cost of the rental.
            customerInfo += currentRental.print() + "\n";
        }

        counter++;
    }

    // Write to the output file
    fs.writeFileSync('output.txt', "Greetings system admin, " + FORDS + " Ford vehicles and " + HONDAS + " Honda vehicles were available this session. Here are our charges for this session:\n" + customerInfo);
} else {
    console.log("Error, the requested file was not found. Please ensure the file name was spelled correctly, and that the file has been placed in the correct folder.");
}
