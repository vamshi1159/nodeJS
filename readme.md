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

