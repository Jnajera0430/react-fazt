
import { Button, Flex } from '@chakra-ui/react';
import { BrowserRouter , Routes,Route,Link} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Main from './components/Main';
function App() {  
  return (
    <div className='h-full'>
      <Flex direction="row" gap={5} width="100%" justifyContent="flex-end" borderWidth="1px"
          overflow="hidden"
          background="gray.500"
          display="flex"
          alignItems="center"
          height="10%"
          pr="10"
          >
        <Button background="green.300"><Link to={'my-react-task-list/'}  className='rounded-sm w-20 text-center'>Home</Link></Button>
        <Button background="green.300"><Link to={'my-react-task-list/about'} className='rounded-sm w-20 text-center'>About</Link></Button>
        <Button background="green.300"><Link to={'my-react-task-list/tarea'} className='rounded-sm w-20 text-center'>Task</Link></Button>        
      </Flex>

        <Routes>
          <Route path='my-react-task-list/' element={<Home/>}/>
          <Route path='my-react-task-list/about' element={<About/>}/>
          <Route path='my-react-task-list/tarea' element={<Main/>}/>
        </Routes>
       
    </div>
  )
}

export default App;