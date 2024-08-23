# fluffy-journey

## How to run the project

1. Clone the repository
2. Run `python3 -m venv env` to create a virtual environment
3. Run `source env/bin/activate` to activate the virtual environment
4. Run `pip install -r requirements.txt` to install the dependencies
5. Makemigrations and migrate the database using `python manage.py makemigrations` and `python manage.py migrate`
6. Run `python manage.py runserver` to start the server
7. Run the frontend (see below)
8. Visit `http://127.0.0.1:8000` to see the application

## How to run the frontend

1. Go to the `frontend` directory
2. Run `npm install` to install the dependencies
3. Run `npm start` to start the development server

Alternatively the frontend will be run at by npm `http://localhost:8000`

## Available routes

### frontend

- `/` - the frontend

### backend

- `/admin` - the Django admin interface
- `/api/ingredients`
- `/api/ingredients/<int:pk>/`
- `/api/recipes`
- `/api/recipes/<int:pk>/`
- `/users/register/`
- `/users/login/`
- `/users/logout/`
- `/users/user/`

## Problem Documentations so far

- [x] [Problem 1](
      Finding out having to setup an environment (on Mac) with python to get Django installed. The solution was to run "python3 -m venv env" to create a virtual environment and then run "source env/bin/activate" to activate the virtual environment. After that, I was able to install Django using "pip install django".
      )

- [x] [Problem 2](
      Setting up the url listing for the frontend with React where Django serves the frontend as an app. I forgot that I had to add the url listing for the frontend in the urls.py file in the Django app.
      )

- [x] [Problem 3](
      Getting in to the backend of Django via the browser. Solution: create a superuser using "python manage.py createsuperuser" and then login to the admin page using the superuser credentials.
      )
