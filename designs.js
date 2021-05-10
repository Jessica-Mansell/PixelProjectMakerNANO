var mouse_is_pressed = false;

function makeGrid() {
  let width = document.getElementById('inputWidth').value;
  let height = document.getElementById('inputHeight').value;
  let canvas = document.getElementById('pixelCanvas');
  let colorPicker = document.getElementById('colorPicker');
  // This clears the canvas.
  canvas.innerHTML = '';
  // Makes the grid
  for (let i = 0; i < height; i++) {
    let row = canvas.insertRow(i);
    for (let j = 0; j < width; j++) {
      let cell = row.insertCell(j);
      cell.addEventListener('mouseover', function (event) {
        if (mouse_is_pressed) {
          cell.style.backgroundColor = colorPicker.value;
        }
      });
      cell.addEventListener('mousedown', function (event) {
        mouse_is_pressed = true;
      });
      cell.addEventListener('mouseup', function (event) {
        mouse_is_pressed = false;
      });
    }
  }
}
