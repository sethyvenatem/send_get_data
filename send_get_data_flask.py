import json
from flask import Flask, request, after_this_request, render_template

application = Flask(__name__)

@application.route('/')
def index():
    
    @after_this_request
    def add_header(response):
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    
    return render_template('send_get_data.html')

@application.route('/getFileContent', methods=['GET'])
def get_file_content():

    @after_this_request
    def add_header(response):
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    with open('file.json') as json_data:
        data = json.load(json_data)
    return data

@application.route('/sendDataToFile', methods=['GET'])
def send_data_to_file():

    @after_this_request
    def add_header(response):
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    with open('file.json') as json_data:
        data = json.load(json_data)
    data.update(request.args)
    with open("file.json", "w") as outfile: 
        json.dump(data, outfile)

    with open('file.json') as json_data:
        data = json.load(json_data)
    return data

if __name__ == '__main__':
   application.run(host="0.0.0.0",port=5000)