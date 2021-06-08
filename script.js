/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* 
lobale variabelen die je gebruikt in je game */
/* ********************************************* */

const 
UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 30; // x-positie van speler
var spelerY = 350; // y-positie van speler
var spelerBreedte = 50;
var spelerHoogte = 100;


var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandX = 1200;   // x-positie van vijand
var vijandY = 350;   // y-positie van vijand
var vijandBreedte = 50;
var vijandHoogte = 100;


var score = 0; // aantal behaalde punten




/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
    fill("black");
    rect(20, 20, width - 2 * 20, height - 2 * 20);


};

/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function(x, y) {
    noStroke();
    fill("white");
    rect(x, y, vijandBreedte, vijandHoogte);



};


/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) { 
   

};


/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function(x, y) {
    fill("white");
    rect(x, y, spelerBreedte, spelerHoogte);
    

};


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function() {
    if (keyIsDown(37)) {
vijandX = vijandX - 2;
    }
  if (keyIsDown(39)) {
vijandX = vijandX + 2;
    }

    if (keyIsDown(38)) {
    vijandY = vijandY - 3;
    }
  
  if (keyIsDown(40)) {
    vijandY = vijandY + 3;
  }

 if (vijandX < 670) {
      vijandX = 670;
      }
    
    if (vijandY < 20) {
      vijandY = 20;

    } 
    if (vijandX > 1180) {
      vijandX = 1180;
      }
    
    if (vijandY > 600) {
      vijandY = 600;

    }
};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() {

};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler = function() {
      if (keyIsDown(65)) {
spelerX = spelerX - 2;
    }

  if (keyIsDown(68)) {
spelerX = spelerX + 2;
    }

    if (keyIsDown(87)) {
    spelerY = spelerY - 3;
    }
  
  if (keyIsDown(83)) {
    spelerY = spelerY + 3;
  }

 if (spelerX < 50) {
      spelerX = 50;
      }
    
    if (spelerY < 20) {
      spelerY = 20;

    } 
    if (spelerX > 580) {
      spelerX = 580;
      }
    
    if (spelerY > 600) {
      spelerY = 600;


    }
};


/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function() {

  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function() {
    
  return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    
  return false;
};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('black');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegVijand();
      beweegKogel();
      beweegSpeler();
      
      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }
      
      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }

      tekenVeld();
      tekenVijand(vijandX, vijandY);
      tekenKogel(kogelX, kogelY);
      tekenSpeler(spelerX, spelerY);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
};
