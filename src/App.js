import React from 'react';
import {
  Heading,
  VStack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import { useState, useEffect } from 'react'


function App() {

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  const toggleComplete = (id) => {
    const newTodos = [...todos].map(todo =>{
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
      })
    setTodos(newTodos)
  }


  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => {
      return todo.id !== id
    })
    setTodos(newTodos)
  }

  return (
  <div className='App'>
    <VStack p={5}>
    <ColorModeSwitcher alignSelf="flex-end" isRound='true' />
          <Heading 
          mb='5' 
          fontWeight="bold" 
          size="2xl" 
          bgGradient="linear(to-r, green.500, orange.300, purple.500)"
          bgClip='text'
          >Chakra To-do App</Heading>
          <AddTodo addTodo={addTodo}/>
          <TodoList todos={ todos } deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
          </VStack>
          </div>
  );
}

export default App;
