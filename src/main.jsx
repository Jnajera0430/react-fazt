import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { TaskContextProvider } from './context/TaskContext';
import { BrowserRouter} from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <TaskContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TaskContextProvider>
    
  
)

