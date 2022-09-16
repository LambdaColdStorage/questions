# Create a sign up form 

_Note:_ Treat this as as a take-home as if this was a real work task from a PM - use discretion and be pragmatic. Simple is better.

For this interview, you will be creating a sign up form. The form will have the following fields:

- First name 
- Last name
- Email
- Phone number

The sign up form should look and behave similar to [Twilio's sign up form](https://www.twilio.com/try-twilio). Inc creating your form, you can ignore all the page elements and focus this section:

![Twilio sign-up form](https://i.imgur.com/eZERbKy.png)

The goal is to emulate the behavior of Twilio's form as closely as possible. We recommend you spend some time playing around it. Pay attention to how it provides timely validation to user input.

## Requirements

**Your form should:**
* Perform client-side validation; that is, display errors when a user enters invalid data.
* Only allow form submission if client-side validation passes. Specifically, only allow form submission if:
   * First name is valid (a string of at least two characters)
   * Last name is valid (a string of at least two characters)
   * Email is valid (a string that looks like an email, just do a basic sanity check - it doesn't exactly have to match the backend's idea of an email)
   * Email is available (there is an API endpoint for checking this). You can see how Twilio does this using the email `m@lambdal.com`.
   * Phone number valid (a string composed of 10 numerical characters, not starting with "0")
* UI-wise, look similar Twilio. For example, focusing on an input element should lift and shrinks its placeholder text and change its the underline color.
* Submit data to a locally running backend server.
* Display any errors returned by the locally running backend server upon form submission.


**Special phone number**
Let's assume that the user fills out the form using a valid, available email and valid first name, last name, and phone. 


## Backend endpoints

Data should be POST'd to `localhost:5000/api/users` with the following format:
```
{
    "first_name": <a string, at least two character>,
    "last_name": <a string, at least two character>,
    "email": <a string that looks like an email>,
    "phone": <a string composed of 10 numerical characters, not starting with "0">
}
```

The backend will validate input, including an additional check on whether the email is already registered. If the input is valid, the HTTP response will be status 200 and look like this:

```
{"errors": {"first_name": None,
            "last_name": None", 
            "email": None, 
            "phone": None}}
```

If the input fails validation, the HTTP response will be status 400 and look something like this:

```
{"errors": {"first_name": "That doesn't look like a first name", 
            "last_name": None", 
            "email": "That email is taken", 
            "phone": None}}
```

**Special inputs**
- email: `takenemail@gmail.com` (to simulate a taken phone number)
- phone: 7777777777 (to simulate an unreachable phone number)


## Running the local backend server
The backend server can be run locally after cloning this repository and running the following command:
```
flask --app backend run
```
## What technologies to use
Whatever you want. We recommend using a framework like React/Angular/Vue.js to make your life easier. If you don't like CSS, feel free to use something like Sass.

## How to submit
Email your answer to your recruiter (e.g. your .js, .css, .html files). Include instructions for running your form in a browser - for example, if it's written in a non-JS framework, describe how to compile it.
