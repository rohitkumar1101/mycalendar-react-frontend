**Calendar -- My Tasks**

**Problem**

One of the first things people do when they make a decision to get organized or plan a trip or even their day is to look at a calendar. Marking the dates on the calendar physically has become too old fashioned and with the advancements in technology, people can now achieve this over their phone using the google calendar. Google calendars offers a person everything that is needed by a person. But with these features comes a lack of privacy for the user.

**Solution**

**Calendar -- My Tasks** is an application built to provide the users with the privacy that is required by the user. By using this application one can be assured that the user will receive privacy. In the application a user can perform the CRUD operations. The data which is entered will be stored in a Database and the same will be fetched from the backend API to display a users Tasks.

**Technical Choices**

**I. Frontend**

    1.  ReactJS -- A popular Front End library

    2.  React Hooks -- Helps in using state with Functional components

    3.  Full Calendar -- npm package which makes the rendering of the calendar easier

    4.  React DatePicker -- Helps the user to select a date from the calendar dropdown

    5.  React Router Dom -- Helps with the routing in the project

    6.  Bootstrap4 -- For the styling of the application

    7.  Netlify -- Static site generator which supports CI / CD

**II. Backend**

    1.  Django -- Helps to create the backend speedily

    2.  Python -- Language in which we write code in Django

    3.  Django Rest Framework -- Helps in making the Rest API

    4.  Django CORS Header -- Allows third parties to access the API

    5.  Heroku -- PaaS which allows to build, run and operate applications in the cloud

**Trade Off's**

Due to the Time Constraint there were many compromises that had to be made.

    1.  A sign-in functionality so that each user has access to their own data thus improving the security.

    2.  Providing different views to a user like month, week or a single day.

    3.  Providing the user the functionality to add a task in a given time frame

    4.  Allowing the user to plan their work and vacation separately.

**Hosting**

The Front End and Back End are separately hosted. The Front End makes HTTP requests to the Back End REST API.

The Front End application is hosted on - <https://distracted-einstein-77c9b2.netlify.app/>

The Back End application is hosted on - <https://mycalendar-backend.herokuapp.com/>
The GitHub Repository for the backend code can be found here - https://github.com/Rohitkumar1105/mycalendar-django-backend

**Setup Instructions**

    1.  Clone the repository by typing the command in the terminal - **"git clone <https://github.com/Rohitkumar1105/mycalendar-react-frontend.git>"**

    2.  Go inside the repository - **"cd mycalendar-react-frontend"**

    3.  Install the necessary packages required to run the program - **"npm install" (Make sure you have npm and node installed on the system.)**

    4.  To start the server - **"npm run start"**
    

**NOTE**
**As the backend is hosted on heroku, it won't stay active always. The heroku dyno only starts when we try to access the URL. To make sure the Front End works correctly, open the backend application first and then check the frontend.**

**Links to other projects**

-   **COVID-19 Tracker**

    -   A COVID-19 tracker built with React which displays important information pertaining to different states of India. A search bar allows the user to search for a particular state and get the details for that state displayed in a graphical format. The data is being fetched from an API which is updated everyday. An overview of the country is also provided.

    -   Project Hosted on -- [https://indcov19.ml](https://indcov19.ml/)

    -   GitHub Repository - <https://github.com/Rohitkumar1105/covid-19>

    -   Technologies Used -- ReactJS, Redux, React Hooks

-   **Accounts App**

    -   A React JS accounts app which shows the details of various users. A user can be selected from a list of users after which the details pertaining to that user will be displayed. One can see their personal details, the posts that they have uploaded, the albums a user has, and a todo list for the user. The application displays the data fetched from an API and is responsive. The main focus of the project was to build the Front End for the application.

    -   Project Hosted on - <https://accounts-apps.herokuapp.com/>

    -   GitHub Repository - <https://github.com/Rohitkumar1105/my-accounts-app>

    -   Technologies Used -- ReactJS, Redux, CSS Grid, SaSS (Styling done with pure CSS)
