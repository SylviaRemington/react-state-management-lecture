// importing the useState() hook from React at top of App.jsx
import { useState } from 'react';
import './App.css';

const App = () => {
  // Setting up state - state can be a boolean, a string, a number, an array of objects, a piece of data that you are using to control keeping some data on the screen & that data can be updated.
  // useState() is invoking the useState function & helping us get our return values.
  // useState() returns an array & pulls out the 2 variables of that array in its corresponding positions.
  // ! need to initialize dark mode to a value, which now is false.
  const [isDarkMode, setIsDarkMode] = useState(false);
  console.log('Our isDarkMode state value is:', isDarkMode);
  // Make sure console.log is outside of the return statement.

  return (
    <h1>Hello world!</h1>
  );
};

export default App;

