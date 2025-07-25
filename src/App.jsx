// importing the useState() hook from React at top of App.jsx
import { useState } from 'react';
import './App.css';

const App = () => {
  // Setting up state - state can be a boolean, a string, a number, an array of objects, a piece of data that you are using to control keeping some data on the screen & that data can be updated.
  // useState() is invoking the useState function & helping us get our return values.
  // useState() returns an array & pulls out the 2 variables of that array in its corresponding positions.
  // Can pass an argument to useState.
  // ! need to initialize dark mode to a value, which now is false.
  // Thus, updating the initial state value to `false` below.
  // The 'false' part is an optional initial state or the state variable.

  const [isDarkMode, setIsDarkMode] = useState(true);
  console.log('Our isDarkMode state value is:', isDarkMode);
  // Make sure console.log is outside of the return statement.

  const [userInfo, setUserInfo] = useState({
    firstName: "Jane",
    lastName: "Doe",
    hasPets: false,
    age: 25,
  });
  console.log(isDarkMode);
  console.log(userInfo);

  const handleDarkMode = () => {
    console.log('before setIsDarkMode is called' , isDarkMode);
    console.log('Dark mode is working!');
    setIsDarkMode(true);
    console.log('after setIsDarkMode is called' , isDarkMode);
  }

  const handleLightMode = () => {
    console.log('Light mode is working!');
    setIsDarkMode(false);
  }

  return (
    <>
      {/* ternary operator below */}
      <div className={isDarkMode ? 'dark' : 'light'} >
        <h1>Hello world!</h1>
        <p>Hello, my name is {userInfo.firstName} {userInfo.lastName},
          I am {userInfo.age} years old, and I {userInfo.hasPets ? 'have' : 'do not have'} pets.</p>
      </div>
      <div>
        <button onClick={handleDarkMode}>Dark Mode</button>
        <button onClick={handleLightMode}>Light Mode</button>

      </div>
    </>
  );
};

export default App;


