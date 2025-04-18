# MySQL Day 1

## Topics

[x] Introduction to database
[x] what is mysql?
[x] intro to mysql engines
[x] basic queries - create db, table
[x] insert, update, alter
[x] delete, drop
[x] Select-where clause,distinct
[x] groupby,order,offset,limit

### Introduction to database

- Database is a collection of data.
- Data can be either structured or unstructured.

#### Structured data

- Structured data is data that is organized in a defined manner.
- In the form of tables.
- Each table has rows and columns.
- Each row is a record
- Each column is a field.

#### Unstructured data

- Unstructured data is data that is not organized in a defined manner.
- In the form of documents, images, videos, etc.
- Each document, image, video, etc. is a record.
- A document can have multiple fields. A document is represented as a JSON object.

### Database Management System (DBMS)

- A DBMS is a software that is used to manage databases.
- A DBMS is used to create, read, update, and delete data in a database.
- A DBMS is used to manage the data in a database.

#### For Structured data

- MySQL
- PostgreSQL
- Oracle SQL
- SQL Server
- SQLite

#### For Unstructured data

- MongoDB
- Cassandra
- ElasticSearch
- CouchDB

### Language to interact with DBMS

- SQL (Structured Query Language)
  - DDL (Data Definition Language)
  - DML (Data Manipulation Language)
  - DCL (Data Control Language)
  - TCL (Transaction Control Language)
  - DQL (Data Query Language)
- NoSQL (Not Only SQL)

### What is MySQL?

- MySQL is an open-source relational database management system (RDBMS).
- MySQL is used to store and manage structured data.
- MySQL is used to create, read, update, and delete data in a database.
- MySQL is a 4th generation language.

### Basic Queries

- Create a database

```sql
CREATE DATABASE db_name;
```

- To see the current database

```sql
SELECT DATABASE();
```

- To see all databases

```sql
SHOW DATABASES;
```

- To use a database

```sql
USE db_name;
```

- To see all tables in a database

```sql
SHOW TABLES;
```

Example Table: Products

| id  | name        | price | quantity | branch | rating |
| --- | ----------- | ----- | -------- | ------ | ------ |
| 1   | pen         | 10    | 100      | A      | 4.5    |
| 2   | pencil      | 5     | 200      | A      | 4.0    |
| 3   | eraser      | 2     | 300      | B      | 3.5    |
| 4   | notebook    | 20    | 50       | B      | 4.8    |
| 5   | marker      | 15    | 150      | A      | 4.2    |
| 6   | ruler       | 8     | 80       | C      | 4.1    |
| 7   | sharpener   | 3     | 120      | C      | 4.3    |
| 8   | stapler     | 12    | 60       | A      | 4.6    |
| 9   | tape        | 6     | 90       | B      | 4.4    |
| 10  | glue        | 4     | 110      | C      | 4.7    |
| 11  | scissors    | 18    | 70       | A      | 4.9    |
| 12  | highlighter | 9     | 130      | B      | 4.0    |
| 13  | binder      | 14    | 40       | C      | 4.2    |
| 14  | paper       | 1     | 200      | A      | 4.1    |
| 15  | clip        | 7     | 160      | B      | 4.3    |

- To create a table

```sql
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
    ...
);
```

- To see the structure of a table

```sql
DESCRIBE table_name;
```

or

```sql
DESC table_name;
```

- To insert records into the table

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

Example:

```sql
INSERT INTO Products (id, name, price, quantity, branch, rating)
VALUES (1, 'pen', 10, 100, 'A', 4.5),
(2, 'pencil', 5, 200, 'A', 4.0),
(3, 'eraser', 2, 300, 'B', 3.5),
(4, 'notebook', 20, 50, 'B', 4.8),
(5, 'marker', 15, 150, 'A', 4.2),
(6, 'ruler', 8, 80, 'C', 4.1),
(7, 'sharpener', 3, 120, 'C', 4.3),
(8, 'stapler', 12, 60, 'A', 4.6),
(9, 'tape', 6, 90, 'B', 4.4),
(10, 'glue', 4, 110, 'C', 4.7),
(11, 'scissors', 18, 70, 'A', 4.9),
(12, 'highlighter', 9, 130, 'B', 4.0),
(13, 'binder', 14, 40, 'C', 4.2),
(14, 'paper', 1, 200, 'A', 4.1),
(15, 'clip', 7, 160, 'B', 4.3);
```

- To delete all records from the table

```sql
DELETE FROM table_name;
```

- To select specific columns from the table

```sql
SELECT column1, column2, column3, ...
FROM table_name;
```

- To select all columns from the table

```sql
SELECT *
FROM table_name;
```

- To select records with a specific condition

```sql
SELECT *
FROM table_name
WHERE condition;
```

- To update records in the table

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

- To delete a specific record from the table

```sql
DELETE FROM table_name
WHERE condition;
```

- To drop a table

```sql
DROP TABLE table_name;
```

- To drop a database

```sql
DROP DATABASE db_name;
```

### distinct keyword

```sql
select distinct column1,column2 from table_name;
```

- The `DISTINCT` keyword is used to return only distinct (different) values.
- It is used to remove duplicate values from the result set.

### alter command

- To add a new column

```sql
ALTER TABLE table_name
ADD column_name datatype;
```

- To modify an existing column

```sql
ALTER TABLE table_name
MODIFY column_name datatype;
```

- To rename a column

```sql
ALTER TABLE table_name
RENAME COLUMN old_column_name TO new_column_name;
```

- To drop a column

```sql
ALTER TABLE table_name
DROP COLUMN column_name;
```

- To rename a table

```sql
ALTER TABLE old_table_name
RENAME TO new_table_name;
```

### group by

```sql
SELECT column1, COUNT(*)
FROM table_name
GROUP BY column1;
```

### having

```sql
SELECT column1, COUNT(*)
FROM table_name
GROUP BY column1
HAVING COUNT(*) > 1;
```

### order by

```sql
SELECT column1, column2
FROM table_name
ORDER BY column1 ASC|DESC;
```

- The `ORDER BY` clause is used to sort the result set in ascending or descending order.
- The default order is ascending. To sort the result set in descending order, use the `DESC` keyword.
- To sort the result set in ascending order, use the `ASC` keyword.

### offset and limit

```sql
SELECT column1, column2
FROM table_name
LIMIT 3 OFFSET 2;
```

- The `LIMIT` clause is used to specify the number of records to return.
- The `OFFSET` clause is used to specify the number of records to skip before starting to return records.
- If the Records sorted has duplicates, the ties will be broken when using limit by randomly selecting one of the duplicates or two of the duplicates depending on the number of records to filter from.

### day-34 MySQL

[ ] Normalization
[ ] select queries
[ ] joins - inner, outer(left, right, full)

#### Normalization

- Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity.
- We can achieve this by dividing large tables into smaller ones and defining relationships between them.

Example:

Lets say we have a products table.

| id  | name      | price | quantity | rating | branch_name | branch_location | branch_manager | branch_phone |
| --- | --------- | ----- | -------- | ------ | ----------- | --------------- | -------------- | ------------ |
| 1   | pen       | 10    | 100      | 4.5    | A           | location1       | manager1       | 1234567890   |
| 2   | pencil    | 5     | 200      | 4.0    | A           | location1       | manager1       | 1234567890   |
| 3   | eraser    | 2     | 300      | 3.5    | B           | location2       | manager2       | 0987654321   |
| 4   | notebook  | 20    | 50       | 4.8    | B           | location2       | manager2       | 0987654321   |
| 5   | marker    | 15    | 150      | 4.2    | A           | location1       | manager1       | 1234567890   |
| 6   | ruler     | 8     | 80       | 4.1    | C           | location3       | manager3       | 1122334455   |
| 7   | sharpener | 3     | 120      | 4.3    | C           | location3       | manager3       | 1122334455   |
| 8   | stapler   | 12    | 60       | 4.6    | A           | location1       | manager1       | 1234567890   |
| 9   | tape      | 6     | 90       | 4.4    | B           | location2       | manager2       | 0987654321   |
| 10  | glue      | 4     | 110      | 4.7    | C           | location3       | manager3       | 1122334455   |

- In this table, we have a lot of duplicate data. For example, the branch name, location, manager, and phone number are repeated for multiple products.
- We can normalize this table by creating two tables: one for products and one for branches.

- Products Table

| id  | name      | price | quantity | rating | branch_id |
| --- | --------- | ----- | -------- | ------ | --------- |
| 1   | pen       | 10    | 100      | 4.5    | 1         |
| 2   | pencil    | 5     | 200      | 4.0    | 1         |
| 3   | eraser    | 2     | 300      | 3.5    | 2         |
| 4   | notebook  | 20    | 50       | 4.8    | 2         |
| 5   | marker    | 15    | 150      | 4.2    | 1         |
| 6   | ruler     | 8     | 80       | 4.1    | 3         |
| 7   | sharpener | 3     | 120      | 4.3    | 3         |
| 8   | stapler   | 12    | 60       | 4.6    | 1         |
| 9   | tape      | 6     | 90       | 4.4    | 2         |
| 10  | glue      | 4     | 110      | 4.7    | 3         |

- Branches Table

| id  | name | location  | manager  | phone      |
| --- | ---- | --------- | -------- | ---------- |
| 1   | A    | location1 | manager1 | 1234567890 |
| 2   | B    | location2 | manager2 | 0987654321 |
| 3   | C    | location3 | manager3 | 1122334455 |

- In this normalized table, we have removed the duplicate data. The branch information is now stored in a separate table.

Question: What is the phone number of the branch where the product "marker" is available?

- To answer this question, if the table are not normalized, we can simply run the following query:

```sql
SELECT branch_phone
FROM Products
WHERE name = 'marker';
```

- To answer this question, if the table are normalized, we need to join the two tables:

We need joins to do this efficiently.

But there is a workaround.

1. Find the branch_id of the product "marker" from the products table.
2. Find the phone number of the branch with that branch_id from the branches table.

We can do this with two queries or we can do this with a single query using subqueries or nested queries.

Queries:

```sql
create table Products (
    id int,
    name varchar(255),
    price double,
    quantity int,
    rating double,
    branch_id int
);

create table Branches (
    id int,
    name varchar(255),
    location varchar(255),
    manager varchar(255),
    phone varchar(255)
);

insert into Products (id, name, price, quantity, rating, branch_id)
values (1, 'pen', 10, 100, 4.5, 1),
(2, 'pencil', 5, 200, 4.0, 1),
(3, 'eraser', 2, 300, 3.5, 2),
(4, 'notebook', 20, 50, 4.8, 2),
(5, 'marker', 15, 150, 4.2, 1),
(6, 'ruler', 8, 80, 4.1, 3),
(7, 'sharpener', 3, 120, 4.3, 3),
(8, 'stapler', 12, 60, 4.6, 1),
(9, 'tape', 6, 90, 4.4, 2),
(10, 'glue', 4, 110, 4.7, 3);

insert into Branches (id, name, location, manager, phone)
values (1, 'A', 'location1', 'manager1', '1234567890'),
(2, 'B', 'location2', 'manager2', '0987654321'),
(3, 'C', 'location3', 'manager3', '1122334455');

create table products_branches (
  id int,
  name varchar(255),
  price double,
  quantity int,
  rating double,
  branch_name varchar(255),
  branch_location varchar(255),
  branch_manager varchar(255),
  branch_phone varchar(255)
)

insert into products_branches (id, name, price, quantity, rating, branch_name, branch_location, branch_manager, branch_phone)
values (1, 'pen', 10, 100, 4.5, 'A', 'location1', 'manager1', '1234567890'),
(2, 'pencil', 5, 200, 4.0, 'A', 'location1', 'manager1', '1234567890'),
(3, 'eraser', 2, 300, 3.5, 'B', 'location2', 'manager2', '0987654321'),
(4, 'notebook', 20, 50, 4.8, 'B', 'location2', 'manager2', '0987654321'),
(5, 'marker', 15, 150, 4.2, 'A', 'location1', 'manager1', '1234567890'),
(6, 'ruler', 8, 80, 4.1, 'C', 'location3', 'manager3', '1122334455'),
(7, 'sharpener', 3, 120, 4.3, 'C', 'location3', 'manager3', '1122334455'),
(8, 'stapler', 12, 60, 4.6, 'A', 'location1', 'manager1', '1234567890'),
(9, 'tape', 6, 90, 4.4, 'B', 'location2', 'manager2', '0987654321'),
(10,'glue' ,4 ,110 ,4.7 ,'C' ,'location3' ,'manager3' ,'1122334455');
```

Using subqueries:

```sql
SELECT branch_phone
FROM Branches
WHERE id = (SELECT branch_id FROM Products WHERE name = 'marker');
```

Using joins:

First let's see what is joins and their types.

### Joins

- Joins are used to combine rows from two or more tables based on a related column between them.
- Joins are used to retrieve data from multiple tables in a single query.

Types of Joins:

1. Inner Join: Returns only the rows that have matching values in both tables.
2. Outer Join
   a. Left Outer Join: Returns all rows from the left table and the matched rows from the right table. If there is no match, NULL values are returned for columns from the right table.
   b. Right Outer Join: Returns all rows from the right table and the matched rows from the left table. If there is no match, NULL values are returned for columns from the left table.
   c. Full Outer Join: Returns all rows when there is a match in either left or right table records. If there is no match, NULL values are returned for columns from the table that does not have a match. Simply, its a combination of left and right outer join.

Queries:

```sql
SELECT p.branch_phone
FROM Products p
JOIN Branches b ON p.branch_id = b.id
WHERE p.name = 'marker';
```

- inner join

```sql
select p.id, p.name, p.price, p.quantity, p.rating, b.name, b.location, b.manager, b.phone from products as p join  branches as b on p.branch_id = b.id;
```

- left join

```sql
select p.id, p.name, p.price, p.quantity, p.rating, b.name, b.location, b.manager, b.phone from products as p left join  branches as b on p.branch_id = b.id;
```

- right join

```sql
select p.id, p.name, p.price, p.quantity, p.rating, b.name, b.location, b.manager, b.phone from products as p right join  branches as b on p.branch_id = b.id;
```

- full join

```sql
select p.id, p.name, p.price, p.quantity, p.rating, b.name, b.location, b.manager, b.phone from products as p left join  branches as b on p.branch_id = b.id
UNION
select p.id, p.name, p.price, p.quantity, p.rating, b.name, b.location, b.manager, b.phone from products as p right join  branches as b on p.branch_id = b.id;
```

Relational Database Vs Non Relational Database:

- Relational databases are structured and use SQL to query data.
- Non-relational databases are unstructured and use NoSQL to query data.

Pros & Cons Of relational Database

- Pros:

  - Structured data
  - ACID properties (Atomicity, Consistency, Isolation, Durability)
  - Data integrity
  - Data consistency
  - Data security

- Cons:
  - Scalability
  - Performance
  - Complexity
  - Cost
  - Flexibility

Pros of Non Relational Database

- Pros:
  - Scalability
  - Performance
  - Flexibility
  - Cost
  - Unstructured data

DB Model Design:

- DB Model Design is the process of designing the structure of a database.
- It involves creating tables, defining relationships between tables, and defining the data types of columns.

Application: E-Commerce Application

Features:

- User Registration and Login
- Product Search and Filter
- Product Details Page
- Add to Cart
- Checkout
- Order History

User Story:

- As a user, I want to be able to search for products, add them to my cart, and checkout.
- As a user, I want to be able to view my order history and track my orders.
- As a user, I want to be able to view my profile and update my information.
- As a user, I want to be able to view my wishlist and add products to it.
- As a user, I want to be able to view my cart and remove products from it.
- As a user, I want to be able to view my payment history and add new payment methods.

Tables:

- products
- users
- orders
- payments
- cart
- wishlist

Columns in each table:

- products

  - id int
  - name varchar(255)
  - price double
  - quantity int
  - rating double

- orders
  - id
  - user_id
  - product_id
  - quantity
  - status
  - order_date
  - delivery_date
  - payment_id
  - shipping_address
  - billing_address

Relationships:

- Two tables can be related to each other in:

  - One to One
  - One to Many
  - Many to Many

- One to One: A user can have only one profile and a profile can belong to only one user.
- One to Many: A user can have many orders and an order can belong to only one user.
- Many to Many: A user can have many products in their wishlist and a product can belong to many users' wishlists.

Constraints:

- They are used to limit the type of data that can go into a table.

Types:

1. Not Null:
   - A not null constraint is used to ensure that a column cannot have a NULL value.
   - It is used to ensure that a column must contain a value.
   - It is used to ensure that a column cannot be left empty.
2. Unique

- A unique constraint is used to ensure that all values in a column are different.

3. Primary Key:
   - A primary key is a unique identifier for a record in a table.
   - A primary key must contain unique values and cannot contain NULL values.
   - A table can have only one primary key, which may consist of single or multiple columns.
4. Foreign Key:
   - A foreign key is a field in one table that is a primary key in another table.
   - It is used to establish a relationship between two tables.

Products Table and Branches Table:

- It is a one to many relationship. From branches to products.
- A branch can have many products and a product can belong to only one branch.

users table:

| id  | username | email             | password |
| --- | -------- | ----------------- | -------- |
| 1   | sathish  | sathish@gmail.com | 123456   |
| 2   | krish    | krish@gmail.com   | 123456   |

profile:

| id  | user_id | first_name | last_name | phone | address | profile_pic |
| --- | ------- | ---------- | --------- | ----- | ------- | ----------- |
| 1   | 1       | Sathish    | Kumar     | 12345 | address |
| 2   | 2       | Krish      | Kumar     | 12345 | address |

- relationship: one to one
- A user can have only one profile
- A profile can belong to only one user

orders:

| id  | user_id | product_id | quantity | status  | order_date | delivery_date | payment_id | shipping_address | billing_address |
| --- | ------- | ---------- | -------- | ------- | ---------- | ------------- | ---------- | ---------------- | --------------- |
| 1   | 1       | 1          | 2        | shipped | 2023-10-01 | 2023-10-05    | 1          | address          | address         |
| 2   | 1       | 2          | 1        | shipped | 2023-10-02 | 2023-10-06    | 1          | address          | address         |

- relationship: one to many (from users to orders)
- A user can have many orders
- An order can belong to only one user

wishlist:

| id  | user_id | product_id | added_date |
| --- | ------- | ---------- | ---------- |
| 1   | 1       | 1          | 2023-10-01 |
| 2   | 1       | 2          | 2023-10-02 |
| 3   | 2       | 1          | 2023-10-03 |

- relationship: many to many
- A user can have many products in their wishlist
- A product can belong to many users' wishlists

[x] Why mongodb?
[x] What is document?
[x] What is collection?
[x] Mongodb vs MySQL
[x] creation of database, collections, documents
[x] find - query & projection
[x] use of operators in find() query
[x] update - updateOne, updateMany
[x] delete - deleteOne, deleteMany
[x] cursors - toArray, forEach, limit, skip, sort
[x] aggregation - group, sort, sum, count, avg, min, max, match

#### Why MongoDB?

- MongoDB is a NoSQL database that is used to store unstructured data.
- MongoDB is used to store data in the form of documents.
- MongoDB is used to store data in the form of JSON objects.
- MongoDB is used to store data in the form of collections.
- MongoDB is used to store data in the form of key-value pairs.
- MongoDB is easily scalable, flexible and cost-effective.

#### What is a document?

- A document is a record in a MongoDB database.
- A document is a JSON object.
- A document can have multiple fields.
- A document can have nested fields.
- A document can have arrays.
- A document can have different data types.
- A document can have different fields.

#### What is a collection?

- A collection is a group of documents in a MongoDB database.
- A collection is similar to a table in a relational database.
- A collection can have multiple documents.

#### MongoDB Queries

- To list all the databases

```javascript
show databases;
```

or

```javascript
show dbs;
```

- to show the current database

```javascript
db;
```

- To create a database

```javascript
use db_name;
```

- To list all the collections

```javascript
show collections;
```

- To create a collection

```javascript
db.createCollection("collection_name");
```

- To drop a collection

```javascript
db.collection_name.drop();
```

- To insert a document into a collection

```javascript
db.products.insertOne({
  name: "pen",
  price: 10,
  quantity: 100,
  branch: "A",
  rating: 4.5,
});
```

- To insert multiple documents into a collection

```javascript
db.products.insertMany([
  {
    name: "pencil",
    price: 5,
    quantity: 200,
    branch: "A",
    rating: 4.0,
  },
  {
    name: "eraser",
    price: 2,
    quantity: 300,
    branch: "B",
    rating: 3.5,
  },
  {
    name: "notebook",
    price: 20,
    quantity: 50,
    branch: "B",
    rating: 4.8,
  },
  {
    name: "marker",
    price: 15,
    quantity: 150,
    branch: "A",
    rating: 4.2,
  },
  {
    name: "ruler",
    price: 8,
    quantity: 80,
    branch: "C",
    rating: 4.1,
  },
  {
    name: "sharpener",
    price: 3,
    quantity: 120,
    branch: "C",
    rating: 4.3,
  },
  {
    name: "stapler",
    price: 12,
    quantity: 60,
    branch: "A",
    rating: 4.6,
  },
  {
    name: "tape",
    price: 6,
    quantity: 90,
    branch: "B",
    rating: 4.4,
  },
  {
    name: "glue",
    price: 4,
    quantity: 110,
    branch: "C",
    rating: 4.7,
  },
  {
    name: "scissors",
    price: 18,
    quantity: 70,
    branch: "A",
    rating: 4.9,
  },
  {
    name: "highlighter",
    price: 9,
    quantity: 130,
    branch: "B",
    rating: 4.0,
  },
  {
    name: "binder",
    price: 14,
    quantity: 40,
    branch: "C",
    rating: 4.2,
  },
  {
    name: "paper",
    price: 1,
    quantity: 200,
    branch: "A",
    rating: 4.1,
  },
  {
    name: "clip",
    price: 7,
    quantity: 160,
    branch: "B",
    rating: 4.3,
  },
]);
```

- To view all documents in a collection

```javascript
db.products.find({ branch: "A" });
```

- To update a single document in a collection

```javascript
db.products.updateOne(
  { name: "pen" },
  {
    $set: {
      price: 12,
      quantity: 120,
      branch: "B",
      rating: 4.6,
      xyz: "abc",
    },
  }
);
```

- To delete a single field in a document

```javascript
db.products.updateOne(
  { name: "pen" },
  {
    $unset: {
      xyz: "",
    },
  }
);
```

```javascript
db.products.updateOne(
  { branch: "A" },
  {
    $set: {
      quantity: 250,
    },
  }
);
```

```javascript
db.products.updateMany(
  { branch: "A" },
  {
    $set: {
      quantity: 250,
    },
  }
);
```

- To delete a single document from a collection

```javascript
db.products.deleteOne({ name: "pen" });
```

- To delete multiple documents from a collection

```javascript
db.products.deleteMany({ branch: "A" });
```

- To find all the documents that match an object

```javascript
db.products.find(
  { branch: "A" },
  {
    _id: 0,
    name: 1,
    price: 1,
    rating: 1,
  }
);
```

#### Operators

- Operators are used to perform operations on data.

less than - $lt
greater than - $gt
less than or equal to - $lte
greater than or equal to - $gte
equal to - $eq
not equal to - $ne
in - $in
not in - $nin
exists - $exists
not exists - $not
and - $and
or - $or

- To find all the documents where the rating is greater than or equal to 4.5

```javascript
db.products.find({
  rating: {
    $gte: 4.5,
  },
});
```

- To find all the documents where the rating is equal to 4.8.

```javascript
db.products.find({
  rating: {
    $eq: 4.8,
  },
});
```

or

```javascript
db.products.find({
  rating: 4.8,
});
```

- To find all the documents where the rating is between 4.0 and 4.5

```javascript
db.products.find({
  rating: {
    $gte: 4.3,
    $lte: 4.5,
  },
});
```

or

```javascript
db.products.find({
  $and: [
    {
      rating: { $gte: 4.3 },
    },
    {
      rating: { $lte: 4.5 },
    },
  ],
});
```

- To find all the documents where the branch is "A" or "B"

```javascript
db.products.find({
  branch: {
    $in: ["A", "B"],
  },
});
```

or

```javascript
db.products.find({
  $or: [
    {
      branch: "A",
    },
    {
      branch: "B",
    },
  ],
});
```

- To find all the documents where the branch is not "A" or "B"

```javascript
db.products.find({
  branch: {
    $nin: ["A", "B"],
  },
});
```

#### Cursors

- A cursor is a pointer to the result set of a query.
- A cursor is used to iterate over the result set of a query.
- It is an exhaustible iterator. i.e.,
  - It can be iterated only once.
  - It cannot be reset.
  - It cannot be reused.

Examples:

- To convert the result set into an javascript array

```javascript
db.products.find().toArray();
```

- To loop through the result set

```javascript
let docs = 0;
db.products.find().forEach((doc) => {
  docs++;
  print(doc.name, doc.price);
});

print("Total documents: " + docs);
```

- To limit the number of documents returned

```javascript
db.products.find().limit(5);
```

- To skip the first n documents

```javascript
db.products.find().skip(5).limit(5);
```

- To sort the result set

- For Descending order

```javascript
db.products.find().sort({ quantity: -1, price: 1 });
```

- For Ascending order

```javascript
db.products.find().sort({ quantity: 1 });
```

- To count the number of documents in a collection

```javascript
db.products.countDocuments();
```

```javascript
db.products.countDocuments();
```

#### Libraries Vs Frameworks

- Libraries are a collection of classes, functions and methods that can be used to perform specific tasks.

- Frameworks are a collection of libraries that are structured in a specific way following a specific design pattern.

```javascript
let sum = 0;

db.products.find({ branch: "C" }).forEach((doc) => {
  sum += doc.price;
});
print("Total price: " + sum);
```

#### Aggregations

- Aggregation is the process of processing data and returning computed results.

```javascript
db.products.aggregate([
  {
    $group: {
      _id: "$branch",
      total_price: { $sum: "$price" },
      total_quantity: { $sum: "$quantity" },
      avg_rating: { $avg: "$rating" },
      min_price: { $min: "$price" },
      max_price: { $max: "$price" },
      count: { $sum: 1 },
    },
  },
]);
```

```javascript
db.products.updateOne(
  { branch: "B" },
  {
    $rename: {
      rating: "score",
    },
  }
);
```

```javascript
db.products.find({ branch: "B" });
```

[x] What is Node JS?
[x] Understanding Nodemodules
[x] Package.json , package-lock.json
[x] Built In , third party & custom packages
[x] Dependencies Vs dev dependencies
[ ] Filesystem in nodejs
[x] http module

#### What is Node JS?

- Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.

#### package.json

- The package.json file is a JSON file that contains metadata about the project.
- It contains information about the project, such as the project name, version, description, author, license, dependencies, and scripts.

#### package-lock.json

- The package-lock.json file is a JSON file that contains the exact version of each dependency installed in the project.
- It is automatically generated when you install a package using npm.
- It is used to lock the version of each dependency to ensure that the same version is installed when the project is deployed or shared with others.

#### Version

- The first number is the major version.
- The second number is the minor version.
- The third number is the patch version.

#### NPM

- NPM is a package manager for JavaScript.
- NPM is used to install, update, and manage packages in a Node.js project.

#### Understanding Node Modules

- Node modules are JavaScript files that can be used in a Node.js project.
- Node modules can be third-party modules, or custom modules.

#### Dependencies Vs Dev Dependencies

#### Built In Packages

- Node.js comes with a set of built-in modules that provide various functionalities.
- These modules are part of the Node.js core and do not require installation.
- Some commonly used built-in modules include:
  - `fs`: File system module for file operations.
  - `http`: HTTP module for creating web servers and making HTTP requests.
  - `path`: Path module for working with file and directory paths.
  - `os`: Operating system module for getting information about the operating system.
  - `events`: Events module for handling events and event-driven programming.
  - `util`: Utility module for various utility functions.

#### Third Party Packages

- Third-party packages are modules that are not part of the Node.js core but can be installed from the npm registry.
- Some of the packages are:
  - `nodemon`: A utility that monitors for changes in your source code and automatically restarts your server.

#### Custom Packages

#### JavaScript - NodeJS

- CommonJS(CJS)
  - require and module.exports
- ES6 Modules(ESM)
  - import and export
