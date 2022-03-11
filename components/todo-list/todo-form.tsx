import { useState } from "react"
import { Button, Input } from "@chakra-ui/react"
import { ITodo } from "../../util/types"
import { v4 as uuidv4 } from "uuid"

interface ITodoFormProps {
  addTodo: (todo: ITodo) => void
}

const Todo = (props: ITodoFormProps) => {
  const { addTodo } = props
  const [todo, setTodo] = useState<ITodo>({
    id: "",
    description: "",
    completed: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, description: e.target.value })
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (todo.description.trim()) {
      addTodo({ ...todo, id: uuidv4() })
      setTodo({
        id: "",
        description: "",
        completed: false,
      })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        mt={2}
        mb={2}
        border="3px solid red"
        label="Task"
        type="text"
        name="task"
        variant="unstyled"
        pluceholder="New Task"
        value={todo.description}
        onChange={handleInputChange}
      />
    </form>
  )
}

export default Todo
