import { Button, HStack, Input, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'


function AddTodo({ addTodo }) {

    const toast = useToast()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!content) {
            toast({
                title: 'Write something',
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
            return;
        }
        const todo = {
            id: new Date().getTime(),
            text: content,
            completed: false,
        }
        console.log(todo);
        addTodo(todo);
        setContent('');
    }

    const [content, setContent] = useState('')

return (
    <form onSubmit={handleSubmit}>
        <HStack m={10}>
            <Input variant='filled' placeholder='Write your Todo...' value={content} onChange={(e) => setContent(e.target.value)}/>
            <Button colorScheme='purple' px='8' type='submit'>➕ADD</Button>
        </HStack>
    </form>
)
}

export default AddTodo

