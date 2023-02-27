
node JS learnings

# Introduction 
Node JS is a **runtime Javascript** built on top of Google Chrome's V8 Engine.<br>

![image](/assets/1.png)


## NodeJS Role in web development

### Run Server: Create Server & Listen to Incoming Requests
### Business Logic: Handle Request, Validate Input, connect to database

### Responses: Return Responses (Rendered HTML, JSON....)

<br><br>

# Understanding the basics

http -> Launch server and send requests<br>
https -> Lauch SSL server

## Node JS Program LifeCycle

![image](/assets/2.png)

## Event Driven Code Excecution
we've seen example on req.on('end') and req.on('data')<br>
In this the node doesn't stop the execution until the complete request body is received. Instead it would register a event and will come back and execute on triggered.

In the code if any synchronous and heavy task which blocks the execution for a longer time lead to performance issue. Asynchoronous is solution which node uses for faster performance.

**This way event-driven ,non-blocking  i/o is used to achieve performance**

#### Event Loop [https://www.youtube.com/watch?v=8aGhZQkoFbQ]


# Improved Development and Work flows

Types of Errors
<br>
1.Syntax Errors
2.Runtime Errors
3.Logical Errors

# Working with Express

reduce complex, focus on business logic  on topic of node which provides borad features for building web and mobile applications to handle requests and responses.

Express helps here...

Alternatives nodeJS,adonisJS,koa, sailsJS

Express is a middleware.
Request->Middleware->Middleware->Response


# body-parser
To parse the body received we need a middleware body-parser

app.use(bodyParser.urlendcoded());

#### Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option


# Limiting Middleware Execution to POST requests

app.use("/") will take all kind of requests

to limit to only get/post/delete/patch/put<br>

app.get("/")<br>
app.post("/")<br>
app.put("/")<br>
app.patch("/")<br>
app.delete("/")<br>

# Using Express Router

As the app scales , we have different routes
we need to split our routes to multiple files <br>

#### To Achieve this we have express router
using router we can inject the routes<br>
const router =express.Router();<br>
router.get("/") --> this would exactly match the request and process<br>
unlike app.use("/") would process if any request not found<br>

### Addming 404 Page
check express router

# Filtering Routes

app.use("/admin",AdminRoutes) <br>
app.use("/shop",ShopRoutes)<br>
In this way we can separate routes based on control


