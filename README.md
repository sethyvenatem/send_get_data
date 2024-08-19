# Send and get data

This is my project to learn about web servers. I learned how to build this by googling and making mistakes. I expect to discover much a better way to do it at some point in the future...

The project is available (until I take it down) at [https://sethyvenatem.pythonanywhere.com/](https://sethyvenatem.pythonanywhere.com/). The server at [pythonanywhere](https://www.pythonanywhere.com/) contains a *.json file ([file.json](https://github.com/sethyvenatem/send_get_data/blob/master/file.json)). This page enables anyone to view the file content and add text to it. You can send whatever you want to the file, but keep in mind that <b>it will be visible to anyone and you won't be able to remove it</b>.

## How to use it

There are two ways to try it:

- Go to [https://sethyvenatem.pythonanywhere.com/](https://sethyvenatem.pythonanywhere.com/), type and click
- Download [send\_get\_data.html](https://github.com/sethyvenatem/send_get_data/blob/master/send_get_data.html) and the [static](https://github.com/sethyvenatem/send_get_data/tree/master/static) folder (with its content), place them at the same place in your computer and double click send\_get\_data.html. Then type and click.

## How it works

The system works with flask. The python script [send\_get\_data\_flask.py](https://github.com/sethyvenatem/send_get_data/blob/master/send_get_data_flask.py), is running on the server at pythonanywhere. This scipt exposes the template [templates/send\_get\_data.html](https://github.com/sethyvenatem/send_get_data/blob/master/templates/send_get_data.html) as well as two distinct APIs,

	https://sethyvenatem.pythonanywhere.com/getFileContent
	https://sethyvenatem.pythonanywhere.com/sendDataToFile?name=your_name&date=current_date&text=text

to the web. The first API returns a dictionary with the content of [file.json](https://github.com/sethyvenatem/send_get_data/blob/master/file.json). The second appends

	{current_date: {"name": your_name, "text": text}}

at the end of [file.json](https://github.com/sethyvenatem/send_get_data/blob/master/file.json) in the server (and returns the updated file content as a dictionary). For example, the file looks like,

	{"19/8/2024@12:59:17": {"name": "steven", "text": "This is my first entry."}, "19/8/2024@13:0:13": {"name": "steven again", "text": "And here is my second entry."}}
	
after two entries.
	
At [https://sethyvenatem.pythonanywhere.com/](https://sethyvenatem.pythonanywhere.com/), the template is rendered and displayed. The same page is directly displayed when [send\_get\_data.html](https://github.com/sethyvenatem/send_get_data/blob/master/send_get_data.html) is opened. In both cases, the scripts of the [static/send\_get\_data.js](https://github.com/sethyvenatem/send_get_data/blob/master/static/send_get_data.js) file are called when the buttons are pressed and then the  corresponding API is called.