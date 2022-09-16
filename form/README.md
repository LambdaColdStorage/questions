# Create a sign up form 

_Note:_ Treat this as as a take-home as if this was a real work task from a PM - use discretion and be pragmatic. Simple is better.

For this interview, you will be creating a sign up form. The form will have the following fields:

- First name 
- Last name
- Email
- Phone number

The sign up form should look and behave similar to [Twilio's sign up form](https://www.twilio.com/try-twilio). You can ignore all the page elements and focus this section:

![Twilio sign-up form](https://i.imgur.com/eZERbKy.png)


The goal is to emulate the behavior of this form as closely as possible. We recommend you spend some time playing around with Twilio's form - there are a lot of subtle behaviors that go into a good experience. When in doubt, copy it! 

**Your form should:**
- Perform client-side validation; that is, display errors when a user enters invalid data.
- Only allow form submission when client-side validation passes.
- Inform the user if their first name, last name, email, or phone is invalid.
- Inform the user if their email address is taken (see how Twilio does this by using the email `m@lambdal.com` on Twilio).
- Have similar UI to Twilio. For example, focusing on an input element should lifts and shrinks its placeholder text and changes the underline color.
- Display errors from the locally running backend upon form submission (if they exist).

## Use discretion to create good UI/UX!

You don't have to exactly copy Twilio's form behavior, but feel free. Aim to have a good user experience that won't surprise or annoy users. 


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

`takenemail@gmail.com`

**Note 1:** You can use the email address  to simulate an email address that's already registered.
**Note 2:** It's often the case that client-side cannot do the same level of validation as the backend. To emu


## Running the local backend server
The backend server can be run locally after cloning this repository and running the following command:
```
flask --app backend run
```
## What technologies to use
Whatever you want. We recommend using a framework like React/Angular/Vue.js to make your life easier. If you don't like CSS, feel free to use something like Sass.

## How to submit
Email your answer to your recruiter (e.g. your .js, .css, .html files). Include instructions for running your form in a browser - for example, if it's written in a non-JS framework, describe how to compile it.
