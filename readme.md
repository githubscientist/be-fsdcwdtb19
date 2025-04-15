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
