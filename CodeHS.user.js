// ==UserScript==
// @name         CodeHS Auto Code Input
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically inputs code in CodeHS editor from a predefined solution.
// @author       Tap
// @match        *://codehs.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to set code in the CodeHS editor
    function setCodeHSCode() {
        // Check if the CodeHS editor is available
        if (window.Ed && window.Ed.setCodeFromJSON) {
            // Your solution code in JSON format
            window.Ed.setCodeFromJSON(JSON.stringify(window.Ed.solutionCode), window.Ed);
        }
    }

    // Set the code when the page is loaded
    window.addEventListener('load', setCodeHSCode);
    setInterval(()=>{setCodeHSCode();},3000);
})();

