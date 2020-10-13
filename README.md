## Short description

This is the test-task for Swivl.

github.com has public API to get list of users: "https://api.github.com/users".

There are helpfull parameters like "per_page" and "since", check them.
You need to create a single page application, which allows to get list of github users. 
Each row contains login, profile link (html_url) and avatar preview(100x100). 
Clicking on row should result in opening new route with bigger avatar version and additional user info from "https://api.github.com/users/:username”, such as name, followers, following, created_at, company, email, location, blog, bio.

We expect application will allow to browse at least first 100 users.
Using React, ES2015 and Redux is required.

Source code should be available on github.com.


## Available Scripts

In the project directory, you can run:

### `npm start`

to start development server

### `npm run build`

to build production release

## Author

Oleksandr Movchan