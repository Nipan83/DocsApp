# DocsApp

This is a simple application implementation built on top `Node.js` and `Express.js` with `Mongoose.js` for `MongoDB` integration. 

[![https://travis-ci.org/Nipan83/DocsApp.svg?branch=master)](https://travis-ci.org/Nipan83/DocsApp)

## Get Started:

`git clone https://github.com/Nipan83/DocsApp.git`

`cd DocsApp`

## Running project

## Manual

You need to have Node.js and npm installed.

## Run server

```sh
	# Install all dependencies
	npm install

	# Start the server
	npm start

```

## Base URI for making requests

### Running locally

`http://localhost:3000/`

### Heroku 

`https://nipan-docsapp.herokuapp.com`



## Routes

### POST Register

`http://localhost:3000/register` <br />

or <br />

`https://nipan-docsapp.herokuapp.com/register`

This route allows a patient to register herself on the platform with basic information <br />

▪ `dob`, `age`, `firstname`, `lastname`, `gender` <br />



### GET Patient Details

`http://localhost:3000/getuser` <br />
or <br />
`https://nipan-docsapp.herokuapp.com/getuser` <br />

This route returns all the patients lists
<br />



## TESTING

```sh

	# TESTING of APIs
	npm test

	# NOTE: Since email field is unique for registering a user. So register test case may fail after running npm test two times.


```


## AUTHOR

Created and Maintained by [@Nipan83](https://github.com/Nipan83) - nipandas83@gmail.com