# BLOGapi
This API project displays usage of JWT, Node.js, and CRUD configuration. 
Initially, users must create loging with authentication of valid email and valid password that will be hashed/encrypted with NPM Bcrypt. 
After authentication, users have access to CRUD configuration of blogs. 

Each Schema requirement will be listed below.

## Getting Started
1. Clone Repository (https://github.com/ElNopalito/BLOGapi.git)
1. Open IDE Terminal or terminal of choosing
2. CD or equivalent CMD that will allow you to access project folder 
3. Install all NPM listed in NPM section
4. Type "nodemon server" or "node server"



### Prerequisites
1. IDE
2. Node.js
3. NPM nodemon(optional but recommended)



### Installing NPM
* npm init -y
* npm i bcrypt
* npm i dotenv
* npm i express
* npm i helmet
* npm i jsonwebtoken
* npm i mongodb
* npm i mongoose
* npm i morgan

## Schemas
###   User Schema
        - username: string, required
        - email: string, required
        - birthday: date, required
        - age: number
        - password: string, required

###   Blog Schema
        - created_by: string, required
        - created_at: date, required
        - blog_title: string, required
        - blog_content: string, required
        - private: boolean, required

## Endpoints

### /Auth
- router.post("/"): User authentication.
### /Users
- router.post("/"): Create a new user.
### /Blogs
- router.get("/"): Get all blogs
- router.post("/"): Create blog
- router.get("/:id"): Get blog by ID
- router.put("/:id"): Get and update blog by ID
- router.delete("/:id"): Get and delete blog by ID

## ENV
* MongoDB_URI
* PORT 
* SECRET_KEY

## Deployment

* [Heroku Deployment](https://manko-app.herokuapp.com/)

## Built With

* [Vscode](https://code.visualstudio.com/)
* [Heroku](https://id.heroku.com/) 
* [POSTMAN](https://www.postman.com/)



## Acknowledgments

* [Abe Tavarez](https://github.com/AbeTavarez)
* [PurpleBooth](https://gist.github.com/PurpleBooth)
* [Reddit](https://www.reddit.com/)
* [Stack Overflow](https://stackoverflow.com)
