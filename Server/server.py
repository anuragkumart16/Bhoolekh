from flask import Flask, request, jsonify

app = Flask(__name__)
@app.route('/hello')
def hello():
    return 'hii'

if __name__ == '__main__':
    print('App is running')
    app.run(debug=True)

