/*
React and Redux: Getting Started with React Redux
This series of challenges introduces how to use Redux with React. First, here's a review of some of the key principles of each technology. React is a view library that you provide with data, then it renders the view in an efficient, predictable way. Redux is a state management framework that you can use to simplify the management of your application's state. Typically, in a React Redux app, you create a single Redux store that manages the state of your entire app. Your React components subscribe to only the pieces of data in the store that are relevant to their role. Then, you dispatch actions directly from React components, which then trigger store updates.

Although React components can manage their own state locally, when you have a complex app, it's generally better to keep the app state in a single location with Redux. There are exceptions when individual components may have local state specific only to them. Finally, because Redux is not designed to work with React out of the box, you need to use the react-redux package. It provides a way for you to pass Redux state and dispatch to your React components as props.

Over the next few challenges, first, you'll create a simple React component which allows you to input new text messages. These are added to an array that's displayed in the view. This should be a nice review of what you learned in the React lessons. Next, you'll create a Redux store and actions that manage the state of the messages array. Finally, you'll use react-redux to connect the Redux store with your component, thereby extracting the local state into the Redux store.


Start with a DisplayMessages component. Add a constructor to this component and initialize it with a state that has two properties: input, that's set to an empty string, and messages, that's set to an empty array.
*/
class DisplayMessages extends React.Component {
  // change code below this line
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    };
  }
  // change code above this line
  render() {
    return <div / >
  }
};

/*
  React and Redux: Manage State Locally First
Here you'll finish creating the DisplayMessages component.


First, in the render() method, have the component render an input element, button element, and ul element. When the input element changes, it should trigger a handleChange() method. Also, the input element should render the value of input that's in the component's state. The button element should trigger a submitMessage() method when it's clicked.

Second, write these two methods. The handleChange() method should update the input with what the user is typing. The submitMessage() method should concatenate the current message (stored in input) to the messages array in local state, and clear the value of the input.

Finally, use the ul to map over the array of messages and render it to the screen as a list of li elements.
*/
class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      };
      this.handleChange = this.handleChange.bind(this);
      this.submitMessage = this.submitMessage.bind(this);
    }
    // add handleChange() and submitMessage() methods here
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }

    submitMessage() {
      this.setState({
        messages: this.state.messages.concat(this.state.input),
        input: ''
      });
    }

    render() {
      const allMessages = this.state.messages.map(function (element) {
          return ( < li key = {
              element
            } > {
              element
            } < /li>)
          });
        return ( <
          div >
          <
          h2 > Type in a new Message: < /h2> {
            /* render an input, button, and ul here */ } <
          input value = {
            this.state.input
          }
          onChange = {
            this.handleChange
          }
          /> <
          button onClick = {
            this.submitMessage
          } > Add message < /button> <
          ul > {
            allMessages
          } <
          /ul> {
            /* change code above this line */ } <
          /div>
        );
      }
    };
    /*
  React and Redux: Extract State Logic to Redux
Now that you finished the React component, you need to move the logic it's performing locally in its state into Redux. This is the first step to connect the simple React app to Redux. The only functionality your app has is to add new messages from the user to an unordered list. The example is simple in order to demonstrate how React and Redux work together.


First, define an action type 'ADD' and set it to a const ADD. Next, define an action creator addMessage() which creates the action to add a message. You'll need to pass a message to this action creator and include the message in the returned action.

Then create a reducer called messageReducer() that handles the state for the messages. The initial state should equal an empty array. This reducer should add a message to the array of messages held in state, or return the current state. Finally, create your Redux store and pass it the reducer.
*/
    const ADD = 'ADD';

    function addMessage(msg) {
      return {
        type: ADD,
        message: msg
      };
    };

    const messageReducer = (state = [], action) => {
      switch (action.type) {
        case ADD:
          return [...state, action.message];
        default:
          return state
      };
    };
    const store = Redux.createStore(messageReducer);


    /*
    React and Redux: Use Provider to Connect Redux to React
    In the last challenge, you created a Redux store to handle the messages array and created an action for adding new messages. The next step is to provide React access to the Redux store and the actions it needs to dispatch updates. React Redux provides its react-redux package to help accomplish these tasks.

    React Redux provides a small API with two key features: Provider and connect. Another challenge covers connect. The Provider is a wrapper component from React Redux that wraps your React app. This wrapper then allows you to access the Redux store and dispatch functions throughout your component tree. Provider takes two props, the Redux store and the child components of your app. Defining the Provider for an App component might look like this:

    <Provider store={store}>
      <App/>
    </Provider>

    The code editor now shows all your Redux and React code from the past several challenges. It includes the Redux store, actions, and the DisplayMessages component. The only new piece is the AppWrapper component at the bottom. Use this top level component to render the Provider from ReactRedux, and pass the Redux store as a prop. Then render the DisplayMessages component as a child. Once you are finished, you should see your React component rendered to the page.

    Note: React Redux is available as a global variable here, so you can access the Provider with dot notation. The code in the editor takes advantage of this and sets it to a constant Provider for you to use in the AppWrapper render method.
    */

    // Redux Code:
    const ADD = 'ADD';

    const addMessage = (message) => {
      return {
        type: ADD,
        message
      }
    };

    const messageReducer = (state = [], action) => {
      switch (action.type) {
        case ADD:
          return [
            ...state,
            action.message
          ];
        default:
          return state;
      }
    };



    const store = Redux.createStore(messageReducer);

    // React Code:

    class DisplayMessages extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          input: '',
          messages: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
      }
      handleChange(event) {
        this.setState({
          input: event.target.value
        });
      }
      submitMessage() {
        const currentMessage = this.state.input;
        this.setState({
          input: '',
          messages: this.state.messages.concat(currentMessage)
        });
      }
      render() {
        return ( <
          div >
          <
          h2 > Type in a new Message: < /h2> <
          input value = {
            this.state.input
          }
          onChange = {
            this.handleChange
          }
          /><br/ >
          <
          button onClick = {
            this.submitMessage
          } > Submit < /button> <
          ul > {
            this.state.messages.map((message, idx) => {
              return ( <
                li key = {
                  idx
                } > {
                  message
                } < /li>
              )
            })
          } <
          /ul> <
          /div>
        );
      }
    };

    const Provider = ReactRedux.Provider;

    class AppWrapper extends React.Component {
      // render the Provider here
      render() {
        return ( <
          Provider store = {
            store
          } >
          <
          DisplayMessages / >
          <
          /Provider>
        )
      }
      // change code above this line
    };

    /*

    React and Redux: Map State to Props
    The Provider component allows you to provide state and dispatch to your React components, but you must specify exactly what state and actions you want. This way, you make sure that each component only has access to the state it needs. You accomplish this by creating two functions: mapStateToProps() and mapDispatchToProps().

    In these functions, you declare what pieces of state you want to have access to and which action creators you need to be able to dispatch. Once these functions are in place, you'll see how to use the React Redux connect method to connect them to your components in another challenge.

    Note: Behind the scenes, React Redux uses the store.subscribe() method to implement mapStateToProps().


    Create a function mapStateToProps(). This function should take state as an argument, then return an object which maps that state to specific property names. These properties will become accessible to your component via props. Since this example keeps the entire state of the app in a single array, you can pass that entire state to your component. Create a property messages in the object that's being returned, and set it to state.


    */

    const state = [];

    // change code below this line
    const mapStateToProps = (state) => {
      return {
        messages: state
      }
    }

    const addMessage = message => {
      return {
        type: "ADD",
        message: message
      };
    };

    const mapStateToProps = state => {
      return {
        messages: state
      };
    };

    const mapDispatchToProps = dispatch => {
      return {
        submitNewMessage: message => {
          dispatch(addMessage(message));
        }
      };
    };

    class Presentational extends React.Component {
      constructor(props) {
        super(props);
      }
      render() {
        return <h3 > This is a Presentational Component < /h3>;
      }
    }

    const connect = ReactRedux.connect;
    // change code below this line
    const ConnectedComponent = connect(
      mapStateToProps,
      mapDispatchToProps
    )(Presentational);

    // Redux:
    const ADD = 'ADD';

    const addMessage = (message) => {
      return {
        type: ADD,
        message: message
      }
    };

    const messageReducer = (state = [], action) => {
      switch (action.type) {
        case ADD:
          return [
            ...state,
            action.message
          ];
        default:
          return state;
      }
    };

    const store = Redux.createStore(messageReducer);

    // React:
    class Presentational extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          input: '',
          messages: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
      }
      handleChange(event) {
        this.setState({
          input: event.target.value
        });
      }
      submitMessage() {
        const currentMessage = this.state.input;
        this.setState({
          input: '',
          messages: this.state.messages.concat(currentMessage)
        });
      }
      render() {
        return ( <
          div >
          <
          h2 > Type in a new Message: < /h2> <
          input value = {
            this.state.input
          }
          onChange = {
            this.handleChange
          }
          /><br / >
          <
          button onClick = {
            this.submitMessage
          } > Submit < /button> <
          ul > {
            this.state.messages.map((message, idx) => {
              return ( <
                li key = {
                  idx
                } > {
                  message
                } < /li>
              )
            })
          } <
          /ul> <
          /div>
        );
      }
    };

    // React-Redux:
    const mapStateToProps = (state) => {
      return {
        messages: state
      }
    };

    const mapDispatchToProps = (dispatch) => {
      return {
        submitNewMessage: (newMessage) => {
          dispatch(addMessage(newMessage))
        }
      }
    };

    const Provider = ReactRedux.Provider;
    const connect = ReactRedux.connect;

    // define the Container component here:
    // define the Container component here:
    class Container extends React.Component {
      constructor(props) {
        super(props);
      }
      render() {
        const connectt = connect(mapStateToProps, mapDispatchToProps)(Presentational)
        return ( <
          Presentational / >
        );
      }
    }


    class AppWrapper extends React.Component {
      constructor(props) {
        super(props);
      }
      render() {
        // complete the return statement:
        return ( <
          Provider store = {
            store
          } >
          <
          Container / >
          <
          /Provider>
        );
      }
    };

    // Redux:
    const ADD = 'ADD';

    const addMessage = (message) => {
      return {
        type: ADD,
        message: message
      }
    };

    const messageReducer = (state = [], action) => {
      switch (action.type) {
        case ADD:
          return [
            ...state,
            action.message
          ];
        default:
          return state;
      }
    };

    const store = Redux.createStore(messageReducer);

    // React:
    const Provider = ReactRedux.Provider;
    const connect = ReactRedux.connect;

    // Change code below this line
    class Presentational extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          input: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
      }
      handleChange(event) {
        this.setState({
          input: event.target.value
        });
      }
      submitMessage() {
        this.props.submitNewMessage(this.state.input);
        this.setState({
          input: ''
        });
      }
      render() {
        return ( <
          div >
          <
          h2 > Type in a new Message: < /h2> <
          input value = {
            this.state.input
          }
          onChange = {
            this.handleChange
          }
          /><br / >
          <
          button onClick = {
            this.submitMessage
          } > Submit < /button> <
          ul > {
            this.props.messages.map((message, idx) => {
              return ( <
                li key = {
                  idx
                } > {
                  message
                } < /li>
              )
            })
          } <
          /ul> <
          /div>
        );
      }
    };
    // Change code above this line

    const mapStateToProps = (state) => {
      return {
        messages: state
      }
    };

    const mapDispatchToProps = (dispatch) => {
      return {
        submitNewMessage: (message) => {
          dispatch(addMessage(message))
        }
      }
    };

    const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

    class AppWrapper extends React.Component {
      render() {
        return ( <
          Provider store = {
            store
          } >
          <
          Container / >
          <
          /Provider>
        );
      }
    };
    // Redux:
    const ADD = 'ADD';

    const addMessage = (message) => {
      return {
        type: ADD,
        message: message
      }
    };

    const messageReducer = (state = [], action) => {
      switch (action.type) {
        case ADD:
          return [
            ...state,
            action.message
          ];
        default:
          return state;
      }
    };

    const store = Redux.createStore(messageReducer);

    // React:
    const Provider = ReactRedux.Provider;
    const connect = ReactRedux.connect;

    // Change code below this line
    class Presentational extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          input: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
      }
      handleChange(event) {
        this.setState({
          input: event.target.value
        });
      }
      submitMessage() {
        this.props.submitNewMessage(this.state.input);
        this.setState({
          input: ''
        });
      }
      render() {
        return ( <
          div >
          <
          h2 > Type in a new Message: < /h2> <
          input value = {
            this.state.input
          }
          onChange = {
            this.handleChange
          }
          /><br / >
          <
          button onClick = {
            this.submitMessage
          } > Submit < /button> <
          ul > {
            this.props.messages.map((message, idx) => {
              return ( <
                li key = {
                  idx
                } > {
                  message
                } < /li>
              )
            })
          } <
          /ul> <
          /div>
        );
      }
    };
    // Change code above this line

    const mapStateToProps = (state) => {
      return {
        messages: state
      }
    };

    const mapDispatchToProps = (dispatch) => {
      return {
        submitNewMessage: (message) => {
          dispatch(addMessage(message))
        }
      }
    };

    const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

    class AppWrapper extends React.Component {
      render() {
        return ( <
          Provider store = {
            store
          } >
          <
          Container / >
          <
          /Provider>
        );
      }
    };