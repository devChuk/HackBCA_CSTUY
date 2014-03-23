from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def hello(name=None):
    page = render_template('drawingboardtest.html', name=name)
    return page

if __name__ == "__main__":
    app.debug=True
    app.run(host="0.0.0.0",port=1337)