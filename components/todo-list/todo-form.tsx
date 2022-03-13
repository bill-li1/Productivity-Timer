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
      addTodo({ ...todo, id: uuidv4() })
      setTodo(defaultTodo)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        mt={2}
        mb={2}
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
