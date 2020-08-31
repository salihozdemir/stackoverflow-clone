## Stackoverflow Clone
 - Live: http://clone-of-stackoverflow.vercel.app/

This project is a simplified a full stack clone of Stackoverflow. I wrote it to learn more about Nodejs, React/Next, pixel perfect design and NoSQL databases in general. Feel free to contribute!

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

<sub>There are missing tests on the server side and there are no tests on the client side yet.</sub>

## :globe_with_meridians: Deploy

#### Deploying Server App on Heroku

-  You will need to have setup a [MongoDB Atlas account and database](https://docs.atlas.mongodb.com/getting-started/).
- Make sure that the cluster has allowlisted connections from anywhere.
- Create a [Heroku](https://dashboard.heroku.com/new-app) new app.
- Go to app settings
- Add the following enviroments.
  - DATABASE_URL (to use your MongoDB connection string)
  - JWT_SECRET
- Add Nodejs to buildpacks

- 
        # Go into the repository
        $ cd stackoverflow-clone

        # Heroku Setup
        $ npm install -g heroku
        $ heroku login
        $ heroku git:remote -a your-app-name

        # push subdirectory repository with subtree
        $ git subtree push --prefix server heroku master


#### Deploying Client App on Vercel

- [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2Fsalihozdemir%2Fstackoverflow-clone&env=SITE_NAME&envDescription=SITE_NAME%20needed%20for%20api%20url)

- Select client directory 
- Add heroku api url to SITE_NAME enviorement
- Finally deploy client application

## :scroll: Todo

- [ ] Add missing components to storybook
- [ ] Complete missing server tests
- [ ] Add text editor for post

## :memo: License

This project is made available under the MIT License.
