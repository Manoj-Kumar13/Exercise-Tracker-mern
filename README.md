# Exercise Tracker Mern-Stack

CheckOut the live Demo --> [**Click Here**](https://exercisetracker45.herokuapp.com/)

![MERN Logo](https://www.mindinventory.com/blog/wp-content/uploads/2021/06/mern-stack.png)

This Project will help you to understand the concept of MERN stack. By implementing this project, you will be able to develop a basic understanding of how the MERN stack apps work and how to integrate Frontend and backend of an application altogether.

## **Feature Highlights :**

 ### **Create Exercise**: *Create any no. of new Exercises in the app with username.*
 ### **Set Description**: *Add Description to the Exercises.*
 ### **Set Duration**: *Set duration of Exercises.*
 ### **Set Date**: *Set Date of the Exercise with the help of Date picker.*
 ### **Edit Details**: *Edit details of of Exercise.*
 ### **Delete Exercise**: *Delete Exercises from the Database(MongoDB).*

 

## Get Started

First you need run **`Create React App`** in the directory you want to Create the project. Visit their website to get started with React.

[Click Here](https://reactjs.org/) to visit their website.

**NOTE: You must have node.js installed on your system along with NPM**

The **`Frontend`** directory will be containing the Frontend logic(React).

The **`backend`** directory will be conataining the backend logic where we will handle MongoDb and Express.  

## Installing Dependencies

You need to Install following dependencies in order to complete this project

### For Frontend

You must install these dependencies in **`Frontend`** directory

```Node.js

npm install react-router-dom axios bootstrap react-datepicker

```

Installing `bootstrap` is totally optional.

`React-router-dom` is responsible for the navigation in this web app.

`axios` will act as bridge between Frontend and backend of the application.

`react-datepicker` will be used to set dates.

### For Backend

You must install these dependencies in **`backend`** directory

```Node.js

npm install cors dotenv express mongodb mongoose

```

`cors` will provide headers for cross-origin requests.

`dotenv` will provide environment variables.

`express` will be responsible for the backend server.

`mongodb` will provide MongoDB(Database) functionality.

`mongoose` will be responsible for the connection with MongoDB.





## Available Scripts

In the project directory, you can run:

### npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://create-react-app.dev/docs/deployment/) for more information.