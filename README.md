# challenge-nodets
------------------


Challenge Development in Node/Typescript with MongoDB Atlas

1 - Install all Dependencies
  1. yarn init -y
  2. yarn add express && yarn add -D @types/express
  3. yarn add -D typescript
  4. yarn add -D nodemon ts-node
  5. yarn add mongoose doting
  6. yarn add @Types/mongoose —dev

2 - Database
MongoDB Atlas (Cloud)

3 - Init a aplication
  yarn dev
  
  

EndPoints
---------

METHOD: GET
URL: http://localhost:8080/product/1/stock

METHOD: GET  
URL: http://localhost:8080/product/1

METHOD: POST
URL: http://localhost:8080/product/1/reserve

METHOD: POST
URL: http://localhost:8080/product/1/unreserve
BODY: {"reservationToken": "70d5e8a5-8cd1-42ac-b512-0ab94572051f"}

METHOD: POST
URL: http://localhost:8080/product/1/sold
BODY: {"reservationToken": "70d5e8a5-8cd1-42ac-b512-0ab94572051f"}
