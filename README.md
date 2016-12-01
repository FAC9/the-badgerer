# The-Badgerer

![Lovely Badger](public/images/badger-logo.png)

Description: A platform for writing and sharing reviews of coding resources. 

## Install Guide
- Clone this repo and cd into it
- Add ENV variables (shh, don't tell anyone them though)- 
- export postgres://wyszobbe:ePctrGaBUCZkYX5roORrRawzM99NNC6-@qdjjtnkv.db.elephantsql.com:5432/wyszobbe
- export DB_MAX_CONNECTIONS = 2
- Run npm install to install all dependencies

## Start Guide
- Run npm run dev to start the server
- Navigate to http://localhost:8080/ in your browser
- View live [here](http://the-badgerer.herokuapp.com/)

## User stories:

As a curious learned FAC9 badger...
- I can log in with Username: yourgithubhandle (e.g jwhiles), Password: BigBadBadger.
- I can also log out.
- On the home page, I can see a list of 5 recent reviews, and top 5 resources.
- I can see a list of all resources.
- I can see a list of reviews of a particular resource.
- I can see a users profile and their reviews.
- I can submit a review on a resource profile page.
- I can edit and delete and my own reviews.

## Schema

![Schema](schema.png)

## Route names:
- / - (home)
- /user/{user_id} (user profile)
- /resources (list of resources)
- /resource/{resource_id} (resource profile)
- /login (to log in)
- /logout (to log out) 
- /edit/{review_id} (available for when I want to edit one of my reviews)
- /delete/{review_id} (available for when I want to delete one of my reviews)
- /addreview/{resource_id} (available when I am logged in and submitting via resource profile)
