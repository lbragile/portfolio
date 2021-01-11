# Portfolio

This website highlights my full stack development projects and provides a means for interested guests to contact/connect with me. I designed my own server (as usual) and used ReactJS to create the user interface. The front end communicates with the server (backend) via API calls with Axios. Nodemailer is used to allow users to connect with me (through the contact form) by sending an email to my adress with the relevant information. As always, when dealing with sensitive information, environment variables are implemented, rather than "hard-coding" the values in the public script. Lastly, I deployed the web application on Heroku, where a production build is created for the client side code.

## Demo:

<img src="./public/images/portfolio.gif" alt="Full Stack Developer Portfolio Walkthrough" style="float: left; zoom:100%;" />

## Usage:

#### Clone the Repository

- `git clone https://github.com/lbragile/Portfolio.git`
- `cd Portfolio`

#### Install the Required Dependencies

- `npm install`

#### Start the app on localhost:3000

- `npm start`

## Implementation Details:

- HTML5, CSS3, Bootstrap4, Javascript
- ReactJS & JSX → UI (Frontend)
- NodeJS, ExpressJS, Socket.io → Client/Server Communication
- Git → Version Control
