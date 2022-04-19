import { useState } from "react"
import { Box, List, Text, Divider } from "@chakra-ui/react"
import { ITodo } from "../../util/types"
import Todo from "./todo"
import Footer from "./footer"
import TodoForm from "./todo-form"
import styled from "@emotion/styled"

const TimerBox = styled.span`
  font-family: Lato;
  font-size: 28px;
  font-weight: bold;
  line-height: 15px;
  text-align: center;
`

const TodoList = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  const findPos = (id: string): number => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        return i + 1
      }
    }
    return todos.length
  }

  const addTodo = (todo: ITodo, id: string) => {
    const pos = findPos(id)
    const before: ITodo[] = todos.slice(0, pos)
    const after: ITodo[] = todos.slice(pos, todos.length)
    setTodos([...before, todo, ...after])
  }

  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo: ITodo) => todo.id !== id))
  }

  const toggleCompleted = (id: string) => {
    const newTodos: ITodo[] = todos.map((todo: ITodo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      } else {
        return todo
      }
    })
    setTodos(newTodos)
  }

  return (
    <Box mt={8}>
      <Box mb={5}>
        <TimerBox>
          <Text>Todo List</Text>
        </TimerBox>
      </Box>
      <Divider />
      <List mt={4}>
        {todos.map((todo: ITodo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            toggleCompleted={toggleCompleted}
            addTodo={addTodo}
          />
        ))}
      </List>
      <TodoForm addTodo={addTodo} todoPos={todos.length} />
      <Divider />
      <Footer />
    </Box>
  )
}

export default TodoList
