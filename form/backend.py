import json
import re
from flask import Flask
from flask import request
from flask import render_template
from flask import Response

app = Flask(
    __name__,
    static_url_path="/static",
    static_folder="static",
    template_folder="templates",
)


@app.route("/")
def form():
    return render_template("example.html")


@app.route("/api/is-email-taken", methods=["POST"])
def check_if_email_taken():
    email = request.get_json()
    if email == "takenemail@gmail.com":
        is_taken = True
    else:
        is_taken = False
    return Response(
        json.dumps({"is_taken": is_taken}),
        status=200,
        mimetype="application/json",
    )


@app.route("/api/users", methods=["POST"])
def create_user():
    payload = request.get_json()
    print(payload)

    first_name = payload.get("first_name")
    last_name = payload.get("last_name")
    email = payload.get("email")
    password = payload.get("password")

    errors = {}
    errors["first_name"] = get_first_name_errors(first_name)
    errors["last_name"] = get_last_name_errors(last_name)
    errors["email"] = get_email_errors(email)
    errors["password"] = get_password_errors(password)

    is_error_free = True
    for field, error in errors.items():
        if error is not None:
            is_error_free = False

    if is_error_free:
        status = 200
    else:
        status = 400

    return Response(
        json.dumps({"errors": errors}),
        status=status,
        mimetype="application/json",
    )


def get_first_name_errors(first_name):
    if type(first_name) is str and len(first_name) > 1:
        return None
    else:
        return "First name must be at least 2 characters"


def get_last_name_errors(last_name):
    if type(last_name) is str and len(last_name) > 1:
        return None
    else:
        return "Last name must be at least 2 characters"


def get_email_errors(email):
    if email == "takenemail@gmail.com":
        return "That email is taken"
    is_valid = False
    if isinstance(email, str):
        is_valid = bool(
            re.match(
                r"^[a-zA-Z0-9_\-\.\+]+" r"@[a-zA-Z0-9_\-\.\+]+" r"\.[a-zA-Z0-9_\.\+]+$",
                email,
            )
        )
    if is_valid:
        return None
    else:
        return "That's not a valid email address"


def get_password_errors(password):
    if password == "123123":
        return "That password is known to be insecure"
    if type(password) is not str or len(password) <= 12:
        return "That password isn't long enough"
    return None
