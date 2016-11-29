# The-Badgerer

Description: A platform for writing and sharing reviews of coding resources. 

## User stories:

- I can log in.
- I can see a list of recent reviews.
- I can see a list of reviewed resources.
- I can create, edit and view my own reviews.
- I can see a list of reviews of a particular resource.
- I can click on a listed review to read it.
- (optional extra) I can see a list of reviews by a particular user.
Focus on getting this functionality rather than making the frontend look good. Build your endpoints first.

## Layout

### default.html:

- Site Title & Footer

## Partials

### header.html:

- If (not logged in), Login Button (when clicking on login button, hapi form appears to login).
- If (logged in), user pic/name - when clicking on pic/name goes to user profile view.
- If (logged in), Logout button (when clicking on logout button), login button appears.

### resources.html: 

- Table element
- Headers include Resource, Type, Number of Reviews, Average User Rating
- Each table elemment contains corresponding data, and link to corresponding resource when clicked.

### reviews.html: 

- Reviews title
- Unordered list element for each review with list items...
- if (resource value given) displays resource, when clicked takes you to resource profile
- if (user value given) displays user who submitted review, when clicked takes you to their profile
- creation date and review body given
- if (user can_edit property) displays edit and delete button. Delete goes to delete route and removes post, edit goes to edit view

## Views

### home.html:

- Top 5 Resources (clicking on resource name goes to resource profile view)
- Latest 5 reviews (clicking on review snippet expands it, clicking on user name goes to user profile view, clicking on resource name goes to resource profile view).

### user-profile.html:

- User Pic.
- User Name.
- User signup date.
- User reviews (clicking on review snippet expands it).
- If (logged in), user reviews will have edit/delete buttons next to them. If edit button clicked, goes to Edit View for that review. If delete button clicked, confirm popup appears ('Are you sure you want to delete this?'), if (Yes) User Profile view reloads, if (No) popup disapears without changes.

### resource_list.html:

- List of resources.
- For each resource, you can see Name, Type (online tutorial PAID/ online tutorial FREE/ offline course PAID/ offline course FREE/ book/ blog), Number of Reviews, average rating.
- If (click on Name, goes to Profile view).
- If (click on Header for rating) goes to Resources view but sorted by rating.

### resource_profile.html:

- Resource pic.
- Resource name.
- Resource type.
- Overall rating.
- Resource reviews. For each review (show review snippet- when clicked expands, show rating, show user (when clicking on user user goes to profile)).
- If (logged in) show form to submit review, with fields to enter text, give rating, button to submit. 
- If (not logged in) show text to say 'log in to submit a review'.

### edit.html:
 
- Name of resource
- Text (shown by value attribute of input field)
- Rating
- Button for Update (when clicked, goes to user profile)
- Button for Delete (when clicked, goes to user profile)

### login:

- Title displaying login
- (if recently submitting incorrect login details) error message containg info about login failure
- Form to enter username and password
- Submit button (if successful, redirects to home with priveleges, if not, reloads with error message)
- Back button (when clicked, goes to home)
