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