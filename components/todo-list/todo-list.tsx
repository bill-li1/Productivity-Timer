import { useState } from "react"
import { Box, List } from "@chakra-ui/react"
import { ITodo } from "../../util/types"
import Todo from "./todo"
import TodoForm from "./todo-form"

const TodoList = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  const addTodo = (todo: ITodo) => {
    setTodos([...todos, todo])
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
    console.log(newTodos)
    setTodos(newTodos)
  }

  return (
    <Box mt={2}>
      <h2>Todo List</h2>
      <TodoForm addTodo={addTodo} />
      <List>
        {todos.map((todo: ITodo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </List>
    </Box>
  )
}

export default TodoList
