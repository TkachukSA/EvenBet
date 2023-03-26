import React from 'react';
import './App.css';
import {AppLayout} from "./components/AppLayout/AppLayout";
import {AnimationPage} from "./pages/AnimationPage/AnimationPage";

function App() {
  return (
    <div className="App">
        <AppLayout>
            <AnimationPage/>
        </AppLayout>
    </div>
  );
}

export default App;
