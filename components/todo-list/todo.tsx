import { useState } from "react"

const Todo = () => {
  const [todo, setTodo] = useState<string>("Hello")
  const [todos, setTodos] = useState<string[]>([])
  return <div>Hello</div>
}

export default Todo
