## Stackoverflow Clone
 - Demo: http://clone-of-stackoverflow.vercel.app/

This project is a simplified a full stack clone of Stackoverflow. I wrote it to learn more about Nodejs, React/Next, Pixel perfect design and NoSQL databases in general. Feel free to contribute!

## :rocket: Tech Stack

- ReactJs
- NextJs
- Storybook
- PostCSS
- NodeJs
- Express
- MongoDB
- Mongoose

## :warning: Prerequisite

- node
- npm
- mongodb

## :cd: How to run local

```bash
# Clone this repository
$ git clone https://github.com/salihozdemir/stackoverflow-clone

# Go into the repository
$ cd stackoverflow-clone

# Go into server
$ cd server

# Start mongodb locally
$ mongod

# Install dependencies
$ npm install

# Start the backend server
$ npm run dev

# On another terminal, go to the client folder
$ cd ../client

# Install dependencies
$ npm install

# Use the command below for Android devices
$ npm run dev

# To see the incomplete storybook components
npm run storybook
```

## :mag_right: Testing

Make sure mongodb is running before testing the server.

```bash
$ cd server
$ yarn test
```

<sub>There are missing tests on the server side and there are no tests on the client side yet</sub>

## :scroll: Todo

- [ ] Add missing components to storybook
- [ ] Complete missing server tests
- [ ] Add text editor for post

## :memo: License

This project is made available under the MIT License.
