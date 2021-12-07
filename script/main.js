"use strict";

////////////////////////////////////////////////////////////
////////        GLOBAL VARIABLES                    ////////
////////////////////////////////////////////////////////////

/**
 * config                   {Object}                    Object literal variables
 * @var                     {DOM Element} canvas        DOM element
 * @var                     {DOM Element} context       CanvasRenderingContext2D for drawing surface on the <canvas> element
 * @var                     {Object} domWindow          DOM window width, height, center x-coordinate, and center y-coordinate
 * @var                     {Object} about              General Information concerning  
 */
const config = 
{
    canvas    : document.getElementById("canvas"),
    context   : document.getElementById("canvas").getContext("2d"),
    domWindow : 
    {
        width:    window.innerWidth  - 18,
        height:   window.innerHeight - 4,
        xCenter: (window.innerWidth  / 2),
        yCenter: (window.innerHeight / 2)
    },
    debug : true,
    about : 
    {
        Author:  'Justin Don Byrne',
        Created: 'December, 6 2021',
        Library: 'JSON to Canvas: Visual Graph Generator',
        Updated: 'December, 7 2021',
        Version: '1.1.0',
    }
}

////////        Debug Output        ////////

console.log('configuration: ', config);

//---   binding of resize()   ---//
window.addEventListener('resize', setupEnvironment);
window.addEventListener('load',   setupEnvironment);

////////////////////////////////////////////////////////////
////////        PROTOTYPE FUNCTIONS                 ////////
////////////////////////////////////////////////////////////

// ... Code

////////////////////////////////////////////////////////////
////////        GENERAL FUNCTIONS                   ////////
////////////////////////////////////////////////////////////

/**
 * setupEnvironment()       {Method}                    Sets up the initial UI environment
 */
function setupEnvironment()
{
    document.getElementById("canvas").width  = `${config.domWindow.width}`;
    document.getElementById("canvas").height = `${config.domWindow.height}`;

    document.getElementById("drop-zone").style.setProperty('margin-left', `${centerX( - (300 / 2) )}px`);
    document.getElementById("drop-zone").style.setProperty('margin-top',  `${centerY( - (300 / 2) )}px`);

    document.title = config.about.Library + ' | ver: ' + config.about.Version;
}

/**
 * centerX                  {Method}                    Orients the offset value passed with the canvas elements center x coordinate
 * @param                   {number} offset             Offset value
 * @return                  {number}                    X coordinate orientation offset by passed param
 */
function centerX(offset)
{
    return config.domWindow.xCenter + offset;
}

/**
 * centerY                  {Method}                    Orients the offset value passed with the canvas elements center y coordinate
 * @param                   {number} offset             Offset value
 * @return                  {number}                    Y coordinate orientation offset by passed param
 */
function centerY(offset)
{
    return config.domWindow.yCenter + offset;
}

////////////////////////////////////////////////////////////
////////        GRAPHIC ALGORITHMS                  ////////
////////////////////////////////////////////////////////////

/**
 * clearCanvas()            {Method}                    Clears the entire canvas element       
 */
function clearCanvas()
{
    config.context.clearRect(0, 0, config.canvas.width, config.canvas.height);
}

////////        UI Listeners        ////////

document.getElementById('clear-canvas').addEventListener("click", function()
{
    clearCanvas();
});