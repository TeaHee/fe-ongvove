/* ------------------------------------------------------------------------------
 *
 *  # Template JS core
 *
 *  Includes minimum required JS code for proper template functioning
 *
 * ---------------------------------------------------------------------------- */

// Setup module
// ------------------------------

var App = (function () {
    //
    // Setup module components
    //

    return {
        // Disable transitions before page is fully loaded
        initBeforeLoad: function () {

        },

        // Enable transitions when page is fully loaded
        initAfterLoad: function () {

        },


        // Initialize core
        initCore: function () {
        }
    };
})();

// Initialize module
// ------------------------------

// When content is loaded
document.addEventListener("DOMContentLoaded", function () {
    App.initBeforeLoad();
    App.initCore();
});

// When page is fully loaded
window.addEventListener("load", function () {
    App.initAfterLoad();
});
