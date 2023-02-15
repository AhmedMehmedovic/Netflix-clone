---Netflix clone application---

Good exercise for someone who want to learn React JS.

In the terminal of project directory, you can run:

### `npm install`

### `npm init`

To start the app use:

### `npm start`

I build this app during my practicing use React. I was following the tutorial on youtube link : https://www.youtube.com/watch?v=x_EEwGe-a9o
While building the application, I learned new things about React, and at the same time repeated the old material.

This application (a Netflix clone) was built using React (differnt styled commponents, using Hooks...), Firebase, for authentications and seed data. I have built the following pages within this application: sign in, sign up, browse and the homepage for start. There are four different pages, some using protected routes with auth listeners. Firebase firestore handles all the data and that data is retrieved using a custom hook; authentication is used on all pages, which is handled by Firebase as well.

For seeding data in firebase use steps in /lib/firebase.prod.jsx file where I put instructions in comments.

During this project I had to make some changes, becouse when the tutorial was recorded react-router-dom was in older version then latest (6.8.1), and I had to change routes of application.

I put my personal information of firebase and other personal data in special file and that file is'nt uploaded on git.
