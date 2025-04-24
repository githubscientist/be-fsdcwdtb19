# Front-Desk Application

## Backend Development

### Technologies

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for Node.js to build APIs.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: ODM library for MongoDB and Node.js.
- **JWT**: JSON Web Token for authentication.
- **bcrypt**: Library for hashing passwords.
- **dotenv**: Module to load environment variables from a `.env` file.
- **cors**: Middleware for enabling CORS (Cross-Origin Resource Sharing).
- **multer**: Middleware for handling multipart/form-data, used for uploading files.
- **nodemailer**: Module for sending emails.
- **cookie-parser**: Middleware for parsing cookies.
- **morgan**: HTTP request logger middleware for Node.js.

### Roles

- Receptionist:

  - Can create, read bookings.
  - Can create, read customers

- Manager:

  - Can create, read, update and delete bookings
  - Can create, read, update and delete customers
  - Can create, read, update and delete services

- Admin:
  - Can create, read, update and delete bookings
  - Can create, read, update and delete customers
  - Can create, read, update and delete services
  - Can create, read, update and delete users

### Features

- User authentication and authorization
- Role-based access control
- CRUD operations for bookings, customers, services, and users
- Services (Spa appointment, Airport pickup, Laundry service, Breakfast buffet, Room cleaning, Room Booking)

### API Endpoints

- **Authentication**

  - `POST /api/users/register` - Register a new user
  - `POST /api/users/login` - Login a user
  - `POST /api/users/logout` - Logout a user
  - `GET /api/users/me` - Get user profile

- **Customers**

  - `POST /api/customers` - Create a new customer
  - `GET /api/customers` - Get all customers
  - `GET /api/customers/:id` - Get a customer by ID
  - `PUT /api/customers/:id` - Update a customer by ID
  - `DELETE /api/customers/:id` - Delete a customer by ID

- **Services**

  - `POST /api/services` - Create a new service
  - `GET /api/services` - Get all services
  - `GET /api/services/:id` - Get a service by ID
  - `PUT /api/services/:id` - Update a service by ID
  - `DELETE /api/services/:id` - Delete a service by ID

- **Bookings**

  - `POST /api/bookings` - Create a new booking
  - `GET /api/bookings` - Get all bookings
  - `GET /api/bookings/:id` - Get a booking by ID
  - `PUT /api/bookings/:id` - Update a booking by ID
  - `DELETE /api/bookings/:id` - Delete a booking by ID

- **Email**

  - `POST /api/email/send` - Send an email

- **Users**
  - `POST /api/users` - Create a new user
  - `GET /api/users` - Get all users
  - `GET /api/users/:id` - Get a user by ID
  - `PUT /api/users/:id` - Update a user by ID
  - `DELETE /api/users/:id` - Delete a user by ID

### API Versioning

- Version 1: `/api/v1`
- Version 2: `/api/v2`
- Version 3: `/api/v3`
