import React from 'react';
import './App.css';
import { TextField } from './components/TextField';

const App: React.FC = () => {
  const [title, setTitle] = React.useState(document.title);
  return (
    <div className="App">
      <p>{title === '' ? 'no title :(' : title}</p>
      <TextField
        text={title}
        handleChange={(e) => {
          const newTitle = e.target.value;
          document.title = newTitle;
          setTitle(newTitle);
        }}
      />
    </div>
  );
};

export default App;
