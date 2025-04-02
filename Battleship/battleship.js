let model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,

    ships: [
        {locations: [0,0,0], hits:["","",""]},
        {locations: [0,0,0], hits:["","",""]},
        {locations: [0,0,0], hits:["","",""]}
    ],

    fire: function(guess) {
        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[1];
            let index = ship.locations.indexOf(guess);

            if (ship.hits[index] === "hit") {
                view.displayMessage("Oops, you already hit that location");
                return true;
            }
            else if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");

                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship!");
                    this.shipSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed.");
        return false;
    },

    isSunk: function(ship) {
        for (let i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    },

    generateShipLocations: function() {
        let locations;
        for (let i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip();
            }
            while (this.collision(locations));
            this.ships[i].locations = locations;
        }
        console.log("Ships array: ");
        console.log(this.ships);
    },

    generateShip: function() {
        let direction = Math.floor(Math.random() * 2);
        let row, col;

        if (direction == 1) { // horizontal
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
        }

        else { // vertical
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
            col = Math.floor(Math.random() * this.boardsize);
        }

        let newShipLocations = [];
        for (let i = 0; i < this.shipLength; i++) {
            if (direction == 1) {
                newShipLocations.push(row + "" + (col + i));
            }
        }

        return newShipLocations;
    },

    collision: function(locations) {
        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            for (let j = 0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j] >= 0)) {
                    return true;
                }
            }
        }
        return false;
    }
};

let view = {
    displayMessage: function(msg) {
        let messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },

    displayHit: function(location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },

    displayMiss: function(location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};

let controller = {
    guesses: 0,

    processGuess: function(guess) {
        let location = parseGuess(guess);
        if (location) {
            this.guesses++;
            let hit = model.fire(location);
            if (hit && model.shipsSunk == model.numShips) {
                view.displayMessage(
                    "You sank all my battleships in " + this.guesses + " guesses"
                );
            }
        }
    }
}


// Helper function to parse a guess from the user

function parseGuess(guess) {
    let alphabet = ["A", "B", "C", "D", "E", "F", "G"];

    if (guess === null || guess.length !== 2) {
        alert("Oops, please enter a letter and a number on the board");
    }
    else {
        let firstChar = guess.charAt(0);
        let row = alphabet.indexOf(firstChar);
        let col = guess.charAt(1);

        if(isNaN(row) || isNaN(col)) {
            alert("Oops, that isn't on the board.");
        }
        else if (row < 0 || row >= model.boardSize || col < 0 || col >= model.boardSize) {
            alert("Oops, that isn't on the board.")
        }
        else {
            return row + col;
        }
    }
    return null;
}

// Event handlers

function handleFireButton() {
    let guessInput = document.getElementById("guessInput");
    let guess = guessInput.value.toUpperCase();

    controller.processGuess(guess);

    guessInput.value = "";
}

function handleKeyPress(e) {
    var fireButton = document.getElementById("fireButton");

    // in IE9 and earlier, the event object doesn't get passed to the event handler correctly, so we use window.event instead.

    e = e || window.event;

    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
}


// init - called when the page has completed loading

window.onload = init;

function init() {
    // Fire! button onclick handler
    let fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;

    // Place the ships on the game board

    model.generateShipLocations();
}