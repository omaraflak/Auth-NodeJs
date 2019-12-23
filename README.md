# Authentication - Nodejs & JWT

This is an authentication example Nodejs app using JWT.

# Get Started

```
docker-compose up
```

# API

| Method | Route | Parameters | Description |
| - | - | - | - |
| POST | /api/users/register | email, password, firstName, lastName | Create a new user |
| POST | /api/users/authenticate | email, password | Authenticate a user and returns an access **token** |
| GET | /api/users/me | Authorization Token | Get personal details of a user |

The **Authorization Token** must be in the header of the request as the `Authorization` field.

### Register

```
curl -X POST -H "Content-Type: application/json" -d '{"email": "toto101@abc.fr", "password": "toto101", "firstName": "Toto", "lastName": "Tata"}' http://localhost:8080/api/users/register
```

### Authenticate

```
curl -X POST -H "Content-Type: application/json" -d '{"email": "toto101@abc.fr", "password": "toto101"}' http://localhost:8080/api/users/authenticate
```
