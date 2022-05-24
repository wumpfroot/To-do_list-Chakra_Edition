import { HStack, VStack, Text, IconButton, StackDivider, Spacer, Badge} from '@chakra-ui/react'
import { FaTrashAlt } from 'react-icons/fa';
import React from 'react'

function TodoList({ todos, deleteTodo, toggleComplete }) {

    if(!todos.length) {
        return (
            <Badge colorScheme='green' p='4' m='7' borderRadius= 'lg'>
                No todos here! Good for ya!
            </Badge>
        )
    }

return (
    <VStack 
    divider={ <StackDivider/> } 
    borderColor='green.300' 
    borderWidth='3px' 
    p='5' 
    borderRadius='lg'
    w='100%'
    maxW={{base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw'}}
    alignItems='stretch'>
        {todos.map(todo => (
            <HStack key={todo.id}>
                <Text>{todo.text}</Text>
                <Spacer />
                <input className='checkbox' type="checkbox" onChange={() => toggleComplete(todo.id)} checked={todo.completed}/>
                <IconButton icon={ <FaTrashAlt /> } isRound='true' onClick={() => deleteTodo(todo.id)}/>
            </HStack>
        ))}
    </VStack>
)
}

export default TodoList