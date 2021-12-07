// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) 
{
  // Great success! All the File APIs are supported.
} 
else 
{
  alert('The File APIs are not fully supported in this browser.');
}

var input = new Array;

function handleFileSelect(event) 
{
	event.stopPropagation();
	event.preventDefault();

	const myFile = event.dataTransfer.files[0];
	const reader = new FileReader();

  	reader.addEventListener('load', function()
  	{
  		input.push(this.input.trim());
  	});

	reader.readAsText(myFile);
}

function handleDragOver(event) 
{
	event.stopPropagation();
	event.preventDefault();

	event.dataTransfer.dropEffect = 'copy'; 				// Explicitly show this is a copy.
}

document.getElementById('drop-zone').addEventListener('dragover', handleDragOver,   false);
document.getElementById('drop-zone').addEventListener('drop',     handleFileSelect, false);