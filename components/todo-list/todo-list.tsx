import { useState } from "react"
import { Box, List } from "@chakra-ui/react"
import { ITodo } from "../../util/types"
import Todo from "./todo"
import TodoForm from "./todo-form"

const TodoList = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  const addTodo = (todo: ITodo, pos: number) => {
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
    <Box mt={2}>
      <h2>Todo List</h2>
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
      <TodoForm addTodo={addTodo} todosLength={todos.length} />
    </Box>
  )
}

export default TodoList
