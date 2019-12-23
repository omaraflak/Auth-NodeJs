# Authentication - Nodejs & JWT

This is an authentication example Nodejs app using JWT.

# Get Started

```
docker-compose up
```

# API

| Method | Route | Parameters | Description |
| - | - | - | - |
| POST | /users/register | email, password, firstName, lastName | Create a new user |
| POST | /users/authenticate | email, password | Authenticate a user and returns an access **token** |
| GET | /users/me | Authorization Token | Get personal details of a user |

The **Authorization Token** must be in the header of the request as the `Authorization` field.
