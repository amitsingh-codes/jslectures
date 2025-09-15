// Consistent naming
function getPlayerName(){};
function getPlayerScore(){};
function getPlayerTag(){};

// Inconsistent naming
function getUserScore(){};
function fetchPlayerName(){};
function retrievePlayer1Tag(){};

// Preferable
const numberOfThings = 10;
const myName = "Thor";
const selected = true;

// Not preferable (these start with verbs, could be confused for functions)
const getCount = 10;
const showNorseGods = ["Odin", "Thor", "Loki"];

// Preferable
function getCount() {
  return numberOfThings;
}

// Not preferable (myName doesn't represent some kind of action)
function myName() {
  return "Thor";
}

