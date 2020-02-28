import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import { LoginView } from './views';
function App() {
    return (
        <div style={{ height: '100vh' }}>
            <LoginView />
        </div>
    );
}

export default App;
