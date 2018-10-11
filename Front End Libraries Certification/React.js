class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* change code below this line */ }
        <NonCitrus />
        <Citrus />
         { /* change code above this line */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* change code below this line */ }
        <Fruits />
        { /* change code above this line */ }
        <Vegetables />
      </div>
    );
  }
};

// change code below this line
class MyComponent extends React.Component {
    constructor(props) {
       super(props);
    }
    render() {
      return (
        <div>
          <h1>My First React Component!</h1>
        </div>
      );
    }
  };
  
  ReactDOM.render(<MyComponent />,document.getElementById('challenge-node'));

  //props to stateless function

const CurrentDate = (props) => {
    return (
      <div>
        { /* change code below this line */ }
        <p>The current date is: {props.date}! </p>
        { /* change code above this line */ }
      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          { /* change code below this line */ }
          <CurrentDate date={Date()}/>
          { /* change code above this line */ }
        </div>
      );
    }
  };

  //arrays in react
  const List= (props) => {
    { /* change code below this line */ }
    return <p>{props.tasks.join(', ')}</p>
    { /* change code above this line */ }
  };
  
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          { /* change code below this line */ }
          <List tasks= { ["walk","dog","workout"] } />
          <h2>Tomorrow</h2>
          <List tasks= { ["hiking","watching the world cup","programming"] } />
          { /* change code above this line */ }
        </div>
      );
    }
  };

  /*
  React: Use Default Props
React also has an option to set default props. You can assign default props to a component as a property on the component itself and React assigns the default prop if necessary. This allows you to specify what a prop value should be if no value is explicitly provided. For example, if you declare MyComponent.defaultProps = { location: 'San Francisco' }, you have defined a location prop that's set to the string San Francisco, unless you specify otherwise. React assigns default props if props are undefined, but if you pass null as the value for a prop, it will remain null.


The code editor shows a ShoppingCart component. Define default props on this component which specify a prop items with a value of 0.
*/
const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
    )
  };
  // change code below this line
  ShoppingCart.defaultProps = {items: 0}
  /*
  React: Override Default Props
The ability to set default props is a useful feature in React. The way to override the default props is to explicitly set the prop values for a component.


The ShoppingCart component now renders a child component Items. This Items component has a default prop quantity set to the integer 0. Override the default prop by passing in a value of 10 for quantity.

Note: Remember that the syntax to add a prop to a component looks similar to how you add HTML attributes. However, since the value for quantity is an integer, it won't go in quotes but it should be wrapped in curly braces. For example, {100}. This syntax tells JSX to interpret the value within the braces directly as JavaScript.
*/

const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  }
  
  Items.defaultProps = {
    quantity: 0
  }
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      { /* change code below this line */ }
      return <Items quantity={10} />
      { /* change code above this line */ }
    }
  };

  /*
  Use PropTypes to Define the Props You Expect
React provides useful type-checking features to verify that components receive props of the correct type. For example, your application makes an API call to retrieve data that you expect to be in an array, which is then passed to a component as a prop. You can set propTypes on your component to require the data to be of type array. This will throw a useful warning when the data is of any other type.

It's considered a best practice to set propTypes when you know the type of a prop ahead of time. You can define a propTypes property for a component in the same way you defined defaultProps. Doing this will check that props of a given key are present with a given type. Here's an example to require the type function for a prop called handleClick:

MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }

In the example above, the PropTypes.func part checks that handleClick is a function. Adding isRequired tells React that handleClick is a required property for that component. You will see a warning if that prop isn't provided. Also notice that func represents function. Among the seven JavaScript primitive types, function and boolean (written as bool) are the only two that use unusual spelling. In addition to the primitive types, there are other types available. For example, you can check that a prop is a React element. Please refer to the documentation for all of the options.

Note: As of React v15.5.0, PropTypes is imported independently from React, like this:

import React, { PropTypes } from 'react';
*/

const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  };
  
  // change code below this line
  Items.propTypes = {
  quantity: PropTypes.number.isRequired
  }
  // change code above this line
  
  Items.defaultProps = {
    quantity: 0
  };
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items />
    }
  };

  /*
  React: Access Props Using this.props
The last several challenges covered the basic ways to pass props to child components. But what if the child component that you're passing a prop to is an ES6 class component, rather than a stateless functional component? The ES6 class component uses a slightly different convention to access props.

Anytime you refer to a class component within itself, you use the this keyword. To access props within a class component, you preface the code that you use to access it with this. For example, if an ES6 class component has a prop called data, you write {this.props.data} in JSX.


Render an instance of the ReturnTempPassword component in the parent component ResetPassword. Here, give ReturnTempPassword a prop of tempPassword and assign it a value of a string that is at least 8 characters long. Within the child, ReturnTempPassword, access the tempPassword prop within the strong tags to make sure the user sees the temporary password
*/

class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* change code below this line */ }
            <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
            { /* change code above this line */ }
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          { /* change code below this line */ }
<ReturnTempPassword tempPassword= {"12345678"}/>
          { /* change code above this line */ }
        </div>
    );
  }
};

/*
  React: Review Using Props with Stateless Functional Components
*/

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// change code below this line
const Camper = (props) => <p>{props.name}</p>

Camper.defaultProps = {name: 'CamperBot'};  
Camper.propTypes = { name: PropTypes.string.isRequired }

/*
The code editor has a CampSite component that renders a Camper component as a child. 
Define the Camper component and assign it default props of { name: 'CamperBot' }. 
Inside the Camper component, render any code that you want, but make sure to have one p 
element that includes only the name value that is passed in as a prop. Finally, define 
propTypes on the Camper component to require name to be provided as a prop and 
verify that it is of type string.
*/

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
};
// change code below this line
const Camper = (props) => {
  return (
    <p>{props.name}</p>
  );
};

Camper.defaultProps = { name: 'CamperBot' };

Camper.propTypes = {name: PropTypes.string.isRequired}


/*
You create state in a React component by declaring a state property on the component class in its constructor. This initializes
 the component with state when it is created. 
 The state property must be set to a JavaScript object. Declaring it looks like this:
*/

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state here
  this.state = {
    name: ''
  }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

/*
React: Render State in the User Interface
Once you define a component's initial state, you can display any part of it in the UI that is rendered. If a component is 
stateful, it will always have access to the data in state in its render() method. You can access the data with this.state.

*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
        <h1>{this.state.name}</h1>
        { /* change code above this line */ }
      </div>
    );
  }
};

/*
React: Render State in the User Interface Another Way
There is another way to access state in a component. In the render() method, before the return 
statement, you can write JavaScript directly. For example, you could declare functions, access data from state or props, perform computations on this data, and so on. 
Then, you can assign any data to variables, which you have access to in the return statement.
*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // change code below this line
  var name=this.state.name;
    // change code above this line
    return (
      <div>
        { /* change code below this line */ }
        <h1>{name}</h1>
        { /* change code above this line */ }
      </div>
    );
  }
};

/*
React: Set State with this.setState
The previous challenges covered component state and how to initialize state in the constructor. 
There is also a way to change the component's state. React provides a method for updating component state called setState. 
You call the setState method within your component class like so: this.setState(), passing in an object with key-value pairs. 
The keys are your state properties and the values are the updated state data. For instance, if we were storing a username in state and wanted to update it, it would look like this:
*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // change code below this line
  this.setState({name: "React Rocks!"})
    // change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

/*
React: Bind 'this' to a Class Method
In addition to setting and updating state, you can also define methods for your component class. A class method typically needs to use the this keyword so it can access properties on the class (such as state and props) inside the scope of the method. There are a few ways to allow your class methods to access this.

One common way is to explicitly bind this in the constructor so this becomes bound to the class methods when the component is initialized. You may have noticed the last challenge used this.handleClick = this.handleClick.bind(this) for its handleClick method in the constructor. Then, when you call a function like this.setState() within your class method, this refers to the class and will not be undefined.

Note: The this keyword is one of the most confusing aspects of JavaScript but it plays an important role in React. Although its behavior here is totally normal, these lessons aren't the place for an in-depth review of this so please refer to other lessons if the above is confusing!
*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0
    };
    // change code below this line
this.addItem = this.addItem.bind(this);
    // change code above this line
  }
addItem() {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
        <button onClick={this.addItem}>Click Me</button>
        { /* change code above this line */ }
        <h1>Current Item Count: {this.state.itemCount}</h1>
      </div>
    );
  }
};

/*
React: Use State to Toggle an Element
You can use state in React applications in more complex ways than what you've seen so far. 
One example is to monitor the status of a value, then render the UI conditionally based on this value. 
There are several different ways to accomplish this, and the code editor shows one method.
*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // change code below this line
this.toggleVisibility = this.toggleVisibility.bind(this)
    // change code above this line
  }
  // change code below this line
toggleVisibility(){
this.setState({
visibility: !this.state.visibility
})
}
// change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
};

/*
React: Write a Simple Counter
You can design a more complex stateful component by combining the concepts covered so far. These include initializing state, writing methods that set state, and assigning click handlers to trigger these methods.


The Counter component keeps track of a count value in state. There are two buttons which call methods increment() and decrement(). Write these methods so the counter value is incremented or decremented by 1 when the appropriate button is clicked. Also, create a reset() method so when the reset button is clicked, the count is set to 0.

Note: Make sure you don't modify the classNames of the buttons. Also, remember to add the necessary bindings for the newly-created methods in the constructor.
*/


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // change code below this line
this.increment = this.increment.bind(this);
this.decrement = this.decrement.bind(this);
this.reset = this.reset.bind(this);
    // change code above this line
  }
  // change code below this line
increment() {
 this.state.count += 1;
}
decrement() {
  this.state.count -= 1;
}
reset() {
  this.state.count = 0;
}
  // change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};

/*
React: Create a Controlled Input
Your application may have more complex interactions between state and the rendered UI. For example, form control elements for text input, such as input and textarea, maintain their own state in the DOM as the user types. With React, you can move this mutable state into a React component's state. The user's input becomes part of the application state, so React controls the value of that input field. Typically, if you have React components with input fields the user can type into, it will be a controlled input form.


The code editor has the skeleton of a component called ControlledInput to create a controlled input element. The component's state is already initialized with an input property that holds an empty string. This value represents the text a user types into the input field.

First, create a method called handleChange() that has a parameter called event. When the method is called, it receives an event object that contains a string of text from the input element. You can access this string with event.target.value inside the method. Update the input property of the component's state with this new string.

In the render method, create the input element above the h4 tag. Add a value attribute which is equal to the input property of the component's state. Then add an onChange() event handler set to the handleChange() method.

When you type in the input box, that text is processed by the handleChange() method, set as the input property in the local state, and rendered as the value in the input box on the page. The component state is the single source of truth regarding the input data.

Last but not least, don't forget to add the necessary bindings in the constructor.
*/
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // change code below this line
 this.handleChange = this.handleChange.bind(this)
    // change code above this line
  }
  // change code below this line
handleChange(event) {
event.preventDefault()
this.setState({input: event.target.value})
}
  // change code above this line
  render() {
    return (
      <div>
        { /* change code below this line */}
<input type="text" value={this.state.input} onChange={this.handleChange} />
        { /* change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};