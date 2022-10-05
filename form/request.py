import requests

URL__CHECK_EMAIL = "http://localhost:5000/api/is-email-taken"
URL__REGISTER = "http://localhost:5000/api/users"

print("\nChecking if m@lambdal.com is taken...")
payload = {
    "email": "m@lambdal.com",
}
response = requests.post(URL__CHECK_EMAIL, json=payload)
print(f"Response: {response.json()}")

print("\nChecking if s@lambdal.com is taken...")
payload = {
    "email": "s@lambdal.com",
}
response = requests.post(URL__CHECK_EMAIL, json=payload)
print(f"Response: {response.json()}")

payload = {
    "first_name": "Michael",
    "last_name": "Balaban",
    "email": "m@lambdal.com",
    "password": "123123",
}
response = requests.post(URL__REGISTER, json=payload)
print("\nInput:")
print(payload)
print("Output:")
print(response.json())


payload = {
    "first_name": "Mi",
    "last_name": "Ba",
    "email": "takenemail@gmail.com",
    "password": "hello123123",
}
response = requests.post(URL__REGISTER, json=payload)
print("\nInput:")
print(payload)
print("Output:")
print(response.json())
