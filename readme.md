# MySQL Day 1

## Topics

[x] Introduction to database
[x] what is mysql?
[x] intro to mysql engines
[x] basic queries - create db, table
[x] insert, update, alter --alter pending
[x] delete, drop
[x] Select-where clause,distinct --distinct pending
[ ] groupby,order,offset,limit

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
