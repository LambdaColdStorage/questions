# Create a sign up form

For this interview, you will be creating a sign up form. The form will have the following fields:
- First name 
- Last name
- Email
- Phone number

The sign up form should look and behave like [Twilio's sign up form](https://www.twilio.com/try-twilio). Specifically, it should:

- Perform client side validation; that is, display errors when a user enters invalid data (e.g. an invalid email address).
- Only allow form submission if the client side validation passes.
- Have similar UI to Twilio's (e.g., focusing on an element should lift and shrink the placeholder text and change the underline color).
- Submit data to a locally running backend server.
- Display errors from the backend (if they exist) after submitting the form.
- Hide the form and display a success message if submitted data passes backend validation.

## Submitting data to the locally running backend

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

**Note:** You can use the email address `takenemail@gmail.com` to simulate an email address that's already registered.


## Use discretion to create good UI/UX!

You don't have to exactly copy Twilio's form behavior, but feel free. Aim to have a good user experience that won't surprise or annoy users. We recommend you spend some time playing around with Twilio's form - there are a lot of subtle behaviors that go into a good experience. When in doubt, copy it! 

**Note:** If you don't have strong opinions on design just make it look similar Twilio's - you won't be penalized at all for this.


## Running the local backend server
The backend server can be run locally after cloning this repository and running the following command:
```
flask --app backend run
```
## What technologies to use
Whatever you want. We recommend using a framework like React/Angular/Vue.js to make your life easier. If you don't like CSS, feel free to use something like Sass.

## How to submit
Email your answer to your recruiter (e.g. your .js, .css, .html files). Include instructions for running your form in a browser - for example, if it's written in a non-JS framework, describe how to compile it.
