
<h1 align="center">Disc Golf Assistant</h1>
<hr/>

Hello and welcome to the Disc Golf Assistant Application! This app acts as a personal caddy book/journal for disc golfers. A user can sign up with an account (username must include at least one number and 5 characters), create a personalized list of courses from a hosted database and add a single comment for each course, with no text limit. Idealy you could have a descriptive comment for each hole of the course and update it throughout your round or whenver you feel like. This appliaction is deployed to Heroku where it has a corresponding server that holds over 20 courses in the state of Indiana. At (https://github.com/NHUTTON/DiscGolfAssistantServer), you can check out the coresponding github server link to create your own database. The current deployed version in heroku is at (https://nwh-disc-golf-assistant-client.herokuapp.com/).

The Home page for the client will show the list of courses that are listed in the database. From that page you will have the ability to Login and/or create and account. 
![home](https://user-images.githubusercontent.com/77295693/114647235-bf224680-9caa-11eb-8ab3-705c558388a2.png)



Once you are logged in, you will now have the ability to "Add a course to your list"! By clicking this button, a modal will open and you will be able to add a review or you can leave the field empty. Once submitted, you will now be able to view that course in your "My Courses".

![loggedin](https://user-images.githubusercontent.com/77295693/114647273-cf3a2600-9caa-11eb-8c8c-350f4345e36b.png)


You will also see that where the Login and Register buttons were has updated to an "Open Menu" button and Logout button. The "Logout" button will clear your session token from the local storage and refresh the page. The "Open Menu" button will create a drop down giving you two options to navigate to, "Home" or "My Courses".  

![myCourses](https://user-images.githubusercontent.com/77295693/114647287-d6613400-9caa-11eb-8a44-bd0312a00aad.png)

<hr/>
<h3 align="center">If you have any general questions or want to contact me please email me at nickolashutton@gmail.com.<h3>


Run: "npm install"  in your terminal to install the dependencies needed for this react application.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
