import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
import '../index.css'
import { GoPlus } from 'react-icons/go';
import { createTask } from '../Hooks/CreateTask';
import { Box, Flex, FormControl, FormLabel, Heading, InputGroup, Text,Input, Textarea, Button } from '@chakra-ui/react';

function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription]=useState('');
    const [validateForm, setValidateForm]= useState({
        title:undefined,
    })
   /*  const {createTask} = useContext(TaskContext); */
    const handleSubmit = (e)=>{
        e.preventDefault();
        createTask({title:title,description:description});
        setTitle('');
        setDescription('')
    }
  return (
    <Flex direction="column" width="100%" height="20%" justifyContent="center" alignItems="center">
        <Heading mb={5}>Todo App</Heading>
        <form  width="100%" onSubmit={handleSubmit} >
            <FormControl display="flex" width="100%" justifyContent="center" alignItems="center"   >
                <Flex width="30%" direction="column">
                    <FormLabel fontWeight="bold">Title:</FormLabel>
                    <Input type="text" placeholder="Add a title" 
                        onChange={(e)=>{
                            setValidateForm({
                                ...validateForm,
                                title: e.target.value.length > 4 ? '': 'Title is required'
                            })
                            setTitle(e.target.value);
                        }}
                        value= {title}
                        required
                        autoFocus
                    />
                
                    <Box height="20px" >
                        {validateForm.title && <Text fontFamily="cursive" color="red.500">{validateForm.title}</Text>}
                    </Box>  
                    <FormLabel fontWeight="bold">Description:</FormLabel>
                    <Textarea placeholder="Add your description" rows="2" onChange={(e)=>{
                            setDescription(e.target.value)
                        }}
                    />
                    <Button type="submit" mt={5}>Save</Button>
                </Flex>
            </FormControl>
        </form>
    </Flex>
    
  )
}

export default TaskForm