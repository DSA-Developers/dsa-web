import React from 'react';
import './App.css';
import { TextField } from './components/TextField';

const App = (): JSX.Element => {
    return (
        <div className="App">
            <TextField text="hi" />
        </div>
    );
};

export default App;
