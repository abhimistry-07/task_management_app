# Task Management App

This README file provides detailed information about my project, including its frontend and backend components, routes, and the technologies used.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Frontend Routes](#frontend-routes)
5. [Backend Routes](#backend-routes)
6. [Technologies Used](#technologies-used)
7. [Environment Variables](#environment-variables)
8. [Deployed Link](#deployed-link)
9. [Screenshots](#screenshots)

---

## Introduction 

This is a task management application where you can create account, login. You can create new task. You can update task. You can delete task. You can update profile.

---

## Features  

**1. User Authentication:** Create your account and securely log in to access Task Management App features.

**2. Create Task:** Easily create new task.

**3. Update Task:** You can update task title, description, its priority and its completion status.

**4. Delete Task:** You can delete the task.

**5. Filter:** You can filter the tasks according to their priority and completion status.

**6. Profile:** You can update your name and email ID in profile section.

---

## Installation 

### Frontend

To set up the app frontend locally, follow these steps:

1. Clone this repository to your local machine using the following command:

   ```shell
   git clone https://github.com/abhimistry-07/task_management_app

   ```

2. Navigate to the project directory:

   ```shell
   cd client
   
   ```

3. Install the required dependencies by running:

   ```shell
   npm install

   ```

4. Start the application:

   ```shell
   npm run dev

   ```

5. Access the platform by visiting http://127.0.0.1:5173/ in your web browser.

### Backend

To set up the app backend locally, follow these steps:

1. Navigate to the project directory:

   ```shell
   cd ..
   cd server
   
   ```

2. Install the required dependencies by running:

   ```shell
   npm install

   ```

3. Start the application:

   ```shell
   npm run server

   ```

4. Access the platform by visiting http://localhost:${PORT} in your web browser.

---

## Frontend Routes

The frontend of this project is built using React and Redux. Tailwind CSS is used to create a visually appealing and responsive user interface.

1. `/`: Home Page of application.
2. `/login`: Provides the functionality for users to login using email and password.
3. `/signup`: Provides the functionality for users to create a new account.
4. `/task/:selectedPriority?/:taskCompleted?`: The main page of the application, where displaing all the tasks and filter tasks. (Private Route)

---

## Backend Routes

The backend of this project is developed using Node.js with the Express framework and MongoDB as a database. It provides the necessary API endpoints to manage user interactions.

#### USER Routes

1. `POST /user/register`: For register new user.
2. `POST /user/login`: For login user.
3. `GET /user/update/:userId`: Update user detail.

#### TASK Routes (Private Routes)
   
1. `GET /task/alltasks`: Get all tasks of loged user.
2. `POST /task/addTask`: Create new task.
3. `PUT /task/updateTask/:taskId`: To update task.
4. `DELETE /task/deleteTask/:taskId`: To delete task.
 
---

## Technologies Used

### Frontend

- React
- Redux
- Tailwind CSS

### Backend

- Node.js
- Express
- MongoDB

---

## Environment Variables

To configure and run the project, you need to set the following environment variables in your `.env` file:

### Frontend

- `VITE_BASEURL`: Backend deployed URL.

### Backend

- `PORT`: Specifies the port on which the server will run.
- `DATABASE_URL`: Specifies the MongoDB database connection URL.
- `JWT_SECRET`: Secret key for JWT.

Make sure to set these environment variables according to your development or production environment.

---

## Deployed Link

Frontend: https://task-management-app-smoky.vercel.app/

Backend: https://task-management-app-gm13.onrender.com

---

## Screenshots

Below are screenshots of different pages of the Task Management App:

1. ### Home Page:
   ![Homepage](https://github.com/abhimistry-07/task_management_app/blob/main/client/src/assets/Homepage.jpg)

2. ### Login Page:
   ![Login Page](https://github.com/abhimistry-07/task_management_app/blob/main/client/src/assets/login.jpg)

3. ### Signup:
   ![Signup page](https://github.com/abhimistry-07/task_management_app/blob/main/client/src/assets/signup.jpg)

4. ### Task Page
  ![Task Page](https://github.com/abhimistry-07/task_management_app/blob/main/client/src/assets/taskpage.jpg)

5. ### Profile Page
  ![Profile Page](https://github.com/abhimistry-07/task_management_app/blob/main/client/src/assets/profile.jpg)

6. ### Update Profile
  ![Update Profile](https://github.com/abhimistry-07/task_management_app/blob/main/client/src/assets/updateprofile.jpg)

7. ### Add Task
  ![Add Task](https://github.com/abhimistry-07/task_management_app/blob/main/client/src/assets/addtask.jpg)

8. ### Update Task
  ![Update Task](https://github.com/abhimistry-07/task_management_app/blob/main/client/src/assets/updatetask.jpg)

9. ### Filter Task
  ![Filter Task](https://github.com/abhimistry-07/task_management_app/blob/main/client/src/assets/filter.jpg)

10. ### Responsive
  ![Responsive](https://github.com/abhimistry-07/task_management_app/blob/main/client/src/assets/smallscreen.jpg)

---
