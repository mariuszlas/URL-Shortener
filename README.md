# Shorten It!

Shorten It! is a free service that allows you to shorten your long, ugly URLs into short links. The API is written in Python using the Django Rest Framework and the client is a React app.

Try it out at [link to our website]

## Local Installation & Usage

* Clone this repo
* Open terminal and navigate to the root directory

### API
* Run `docker-compose up` to launch the development database
* Navigate to `/api`
* Run `pipenv shell` to create a Python virtual environment
* Run `pipenv install` to install dependecies (if the dev dependencies (e.g. `pytest`) are not installed, run `pipenv install --dev`)
* Run `pipenv run dev` to launch the server (it is running at `http://localhost:5000`)
* Run `pipenv run test` to launch the test suite
* Run `pipenv run coverage` to run the coverage report

### Client
* Navigate to `/client`
* Run `npm install` to install dependencies
* Run `npm start` to launch the dev server and visit `http://localhost:5000` in your web browser to open the React client
* Run `npm test` to launch the test suites
