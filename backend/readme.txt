Client hits url to login
There is an exchange between the Passport middleware and the Google API
When user is authenticated, Google API sends the user's profile to Google Strategy's callback method.
We write the logic to find user in DB, if not create new user in DB
The done method will call the passport.serialize by passing the user as an argument
The serializeUser method will take care of generating the session token with the user's Id and send it with the response

Afterwards
when a request comes in from the client
passport.initialize() assigns _passport object to the req
checks if there's a session object and if there is one assigns that object to session property

passport.session() looks for user property in request
if it finds one
passes it to the deserializeUser method and calls it