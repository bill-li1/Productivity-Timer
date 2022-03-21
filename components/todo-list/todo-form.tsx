import { useState } from "react"
import { Input } from "@chakra-ui/react"
import { ITodo } from "../../util/types"
import { v4 as uuidv4 } from "uuid"

interface ITodoFormProps {
  addTodo: (todo: ITodo) => void
}

const Todo = (props: ITodoFormProps) => {
  const { addTodo } = props

  const defaultTodo: ITodo = {
    id: "",
    createdAt: new Date(),
    indent: 0,
    description: "",
    completed: false,
  }
  const [todo, setTodo] = useState<ITodo>(defaultTodo)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, description: e.target.value })
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (todo.description.trim()) {
      addTodo({ ...todo, id: uuidv4(), createdAt: new Date() })
      setTodo(defaultTodo)
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Input
        mt={2}
        mb={2}
        fontSize="18"
        label="Task"
        type="text"
        name="task"
        variant="unstyled"
        placeholder="New Task"
        value={todo.description}
        onChange={handleInputChange}
      />
    </form>
  )
}

export default Todo
