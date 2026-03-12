1. Generate package.json

2. Create express server

3. Install monf=goose and connect to mongodb  server
     Rest api --- mongodb native driver ->db server    ( very basic server no extra tools)
     rest api --- mongoose ODM tool->db server  (recommended to use )
     ODM - object document mapping (javascript to mongodb document)

4. Build user REST API 
     - CREATE user
     - read all users
     - read a user by id
     - update user by id
     - delete user by id

5. Create a Schema and model of the resource(here user)



6. Create USER API and define routes

     - --> Handling unavailable resources --> Validators during update --> Hashing password (bcryptjs) --> Unique fields --> Refined version of error handling middleware

     - hello--->sdfsodfhsjbdfs894793875jb34598fgdjbfvfd--->hello hello--->sdfbsdf7df6s7dfnbdf87sdf

     - User Authentication
     - Create Product REST API with below features

     - Product document structure a.productId (required) b.productName(required) c.price(required, min price 10000 and max price 50000) d.brand(required)

     - REST API with below operations a. Create product b. Read all products c. Read a product by productId d. Update a product by productId e. Delete a product by productId





### User Authentication
     - Submit credentials and get tokens

     - req----> Public routes(By anyone)
     - req----> middleware----> Protected routes(By authentication user only)
