# Portfolio

This website highlights my full stack development projects and provides a means for interested guests to contact/connect with me. I designed my own server (as usual) and used ReactJS to create the user interface. The front end communicates with the server (backend) via API calls with Axios. Nodemailer is used to allow users to connect with me (through the contact form) by sending an email to my adress with the relevant information. As always, when dealing with sensitive information, environment variables are implemented, rather than "hard-coding" the values in the public script.

## Demo:

<img src="./frontend/public/images/portfolio.gif" alt="checkmate" style="float: left; zoom:100%;" />

## Usage:

#### Clone the Repository

- `git clone https://github.com/lbragile/ChatIn.git`
- `cd ChatIn`

#### Install the Required Dependencies (Client & Server)

- `cd frontend && npm install`
- `cd backend && npm install`

#### Start the Server

- `npm run devStart`

#### Start the Client

- `npm start`

#### URL

https://lbragile.herokuapp.com/

## Todo:

##### Major

- [x] Create the necessary components (each section of the page)
- [x] Make page responsive
- [x] Table style for projects (pictures on left, text on right)
- [x] Allow user to send email with message through contact section

##### Minor

- [ ] Correct Email verification
- [ ] Show more/less for project description

## Implementation Details:

- HTML5, CSS3, Bootstrap4, Javascript
- ReactJS & JSX → UI (Frontend)
- NodeJS, ExpressJS, Socket.io → Client/Server Communication
- Git → Version Control
