// -----------------------------------------------------------
// Call the api if a button is pressed
// -----------------------------------------------------------

  function getFileContent()
  {
	// create the url to call the api, paste in the right ip address below
	var url = 'https://sethyvenatem.pythonanywhere.com/getFileContent';

	fetch(url)
	.then(response => {
		return response.json();
   	})
	.then(data => {
		document.getElementById('fileContent').value  = JSON.stringify(data);
	})
  }

  function sendDataToFile()
  {
	// create the url to call the api, paste in the right ip address below
	var url = 'https://sethyvenatem.pythonanywhere.com/sendDataToFile';

	var currentdate = new Date();
	currentdate = currentdate.getDate() + "/"
	+ (currentdate.getMonth()+1)  + "/" 
	+ currentdate.getFullYear() + "@"  
	+ currentdate.getHours() + ":"  
	+ currentdate.getMinutes() + ":" 
	+ currentdate.getSeconds();
	var name = document.getElementById('name').value;
	var text = document.getElementById('fileSubmit').value;
	url = url + '?name='+name+'&date='+currentdate+'&text='+text;

	fetch(url)
	.then(response => {
		return response.json();
   	})
	.then(_data => {
		document.getElementById('name').value  = "";
		document.getElementById('fileSubmit').value  = "";
	})
  }