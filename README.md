# Increment Counter

In this app I added a "Increment" button and click handler to the Click Counter application. When user clicks on the button, the count increments by 1.

## Instructions

*  Created React App boilerplate by create-react-app command line. 

* This App uses Bootstrap. Added the Bootstrap CDN to the `index.html` file.

  ```html
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css"/>
  ```

* Add the `Counter` component to add a `Increment` button which _decreases_ the value of `this.state.count` by one
each time it is clicked.


* Separate the `card-body` element aand put it into a new component named `cardBody`. 
Render `cardBody` inside of the `Counter` component and pass the `count` state and 
click handlers to the new component as props. 

* Start the app in dev mode by running `npm start`.
