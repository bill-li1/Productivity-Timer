import { useState } from "react"
import { Input, useColorModeValue } from "@chakra-ui/react"
import { ITodo } from "../../util/types"
import { v4 as uuidv4 } from "uuid"

interface ITodoFormProps {
  addTodo: (todo: ITodo, id: string) => void
  todoPos: number
}

const TodoForm = (props: ITodoFormProps) => {
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
      addTodo({ ...todo, id: uuidv4(), createdAt: new Date() }, "new")
      setTodo(defaultTodo)
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Input
        mt={2}
        mb={2}
        ml={1}
        fontSize={18}
        type="text"
        name="task"
        variant="unstyled"
        placeholder="Enter a new task..."
        _placeholder={{
          opacity: 0.5,
          color: useColorModeValue("gray.800", "gray.300"),
        }}
        value={todo.description}
        onChange={handleInputChange}
      />
    </form>
  )
}

export default TodoForm
