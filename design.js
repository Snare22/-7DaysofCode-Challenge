// Select color input - completed
// Select size input - completed

// When size is submitted by the user, call makeGrid() - completed

function makeGrid() {

// All the variables that will be used in this program
var canvas, gridHeight, gridWidth, cell, color;

// Assingning values to variables used in this code
canvas = $('#pixelCanvas');
gridHeight = $('#inputHeight').val();
gridWidth = $('#inputWeight').val();
cell = canvas.find('td');

// Clearing canvas so that each grid is drawn new

canvas.children().remove()

// The arguments for drawing the grid according to User Inputs for dimensions


  for (let x = 0; x < gridHeight; x++) {
     canvas.append('<tr></tr>');

     for (let y = 0; y < gridWidth; y++) {
       canvas.find('tr').each(function () {
         $(this).append('<td></td>');
              });
          }


// The function for colouring cells according to User determined colour

cell.click(function() {
  color = $('#colorPicker').val();
  $(this).attr('bgcolor', color);

  }
});

//The function to submit user inputs and display the drwan grid.
var sumbit;

submit = $('input[type="submit"]');
submit.click(function(event) {
  event.preventDefault();
  makeGrid();
});



