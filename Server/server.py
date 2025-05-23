from flask import Flask, request, jsonify
import utils
app = Flask(__name__)


@app.route('/get_location_names', methods=['GET'])
def get_location_name():
    response = jsonify({
        'location': utils.get_location_names(),
        'success': True,
        'message': 'Location names fetched successfully!'
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/predict_home_price', methods=['POST'])
def predict_home_price():
    total_sqft = float(request.form['total_sqft'])
    location = request.form['location']
    bhk = int(request.form['bhk'])
    bath = int(request.form['bath'])
    response = jsonify({
        'estimated_price': utils.get_estimated_price(location,total_sqft,bath,bhk),
        'success': True,
        'message': 'property price fetched successfully!'
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/health_check', methods=['GET'])
def healthcheck():
    utils.load_saved_artifacts()
    response = jsonify({
        'success': True,
        'message': 'Server is healthy!'
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == '__main__':
    print('App is running')
    utils.load_saved_artifacts()
    app.run(debug=True)

