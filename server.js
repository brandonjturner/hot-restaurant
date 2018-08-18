// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

//reservations variable
var reservations = [
    {
        customerName: "yoda",
        phoneNumber: 1234567890,
        customerEmail: "yoda@yoda.com",
        customerID: 900
    },
    {
        customerName: "yoda",
        phoneNumber: 1234567890,
        customerEmail: "yoda@yoda.com",
        customerID: 900
    },
    {
        customerName: "yoda",
        phoneNumber: 1234567890,
        customerEmail: "yoda@yoda.com",
        customerID: 900
    },
    {
        customerName: "yoda",
        phoneNumber: 1234567890,
        customerEmail: "yoda@yoda.com",
        customerID: 900
    },
    {
        customerName: "yoda",
        phoneNumber: 1234567890,
        customerEmail: "yoda@yoda.com",
        customerID: 900
    },
    {
        customerName: "yoda",
        phoneNumber: 1234567890,
        customerEmail: "yoda@yoda.com",
        customerID: 900
    },
    {
        customerName: "yoda",
        phoneNumber: 1234567890,
        customerEmail: "yoda@yoda.com",
        customerID: 900
    },
    {
        customerName: "yoda",
        phoneNumber: 1234567890,
        customerEmail: "yoda@yoda.com",
        customerID: 900
    },
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays waitlist
app.get("/api/waitlist", function(req, res) {
    return res.json(reservations);
});

// Displays all characters
app.get("/api/tables", function(req, res) {
    return res.json(reservations);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });