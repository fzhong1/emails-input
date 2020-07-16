# emails-input
This repository constains an Input field for emails JS library, and it can be used in any other form or app independently.

See [demo](https://fzhong1.github.io/emails-input/) for an example of using this library.

# Set it up
Include the following files in your project:
```html
    <link rel="stylesheet" href="dist/emails-input.css" />
    <script src="dist/emails-input.js"></script>
```

# How to use
### Create a HTML container for emails input widget
```html
  <div id="emails-input" class="emailInput"></div>
```
### Call EmailsInput() function and pass in the container element
```
  var existingEmails = [];
  var inputContainerNode = document.querySelector("#emails-input");
  var emailsInput = EmailsInput(inputContainerNode, existingEmails);
```
### Get all the emails as an array
```
  emailsInput.emails;
```
### Get the number of valid emails
```
  emailsInput.validCount;
```

### Add an email
```
  emailsInput.addEamil('john@gmail.com')
```

# License
ISC
