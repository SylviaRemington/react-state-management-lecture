// importing the useState() hook from React at top of App.jsx
import { useState } from 'react';
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState();
  console.log('Our isDarkMode state value is:', isDarkMode);
  // Make sure console.log is outside of the return statement.
  
  return (
    <h1>Hello world!</h1>
  );
};

export default App;

