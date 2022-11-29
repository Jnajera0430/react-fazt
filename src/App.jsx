
import { BrowserRouter , Routes,Route,Link} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Main from './components/Main';
function App() {  
  return (
    <div className='h-full'>
      <nav className='flex flex-row w-full gap-5 justify-end'>
        <Link to={'my-react-task-list/'} className='bg-green-500 rounded-sm w-20 text-center'>Home</Link>
        <Link to={'my-react-task-list/about'} className='bg-green-500 rounded-sm w-20 text-center'>About</Link>
        <Link to={'my-react-task-list/tarea'} className='bg-green-500 rounded-sm w-20 text-center'>Task</Link>
      </nav>  
      
        <Routes>
          <Route path='my-react-task-list/' element={<Home/>}/>
          <Route path='my-react-task-list/about' element={<About/>}/>
          <Route path='my-react-task-list/tarea' element={<Main/>}/>
        </Routes>
       
    </div>
  )
}

export default App;