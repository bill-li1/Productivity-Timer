import { useState } from "react"
import { Input, Box, Text } from "@chakra-ui/react"
import { ITodo } from "../../util/types"
import { v4 as uuidv4 } from "uuid"

interface ISubFormProps {
  addTodo: (todo: ITodo, id: string) => void
  indent: number
  prevId: string
  setSubForm: React.Dispatch<React.SetStateAction<boolean>>
}

const SubForm = (props: ISubFormProps) => {
  const { addTodo, indent, prevId, setSubForm } = props

  const defaultTodo: ITodo = {
    id: "",
    createdAt: new Date(),
    indent: indent,
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
      addTodo({ ...todo, id: uuidv4(), createdAt: new Date() }, prevId)
      setTodo(defaultTodo)
      setSubForm(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Box display="flex" mt={1}>
        <Text fontSize={18} mr={2}>
          &#8226;
        </Text>
        <Input
          autoFocus
          fontSize={17}
          type="text"
          name="task"
          variant="unstyled"
          placeholder="New Task"
          value={todo.description}
          onChange={handleInputChange}
        />
      </Box>
    </form>
  )
}

export default SubForm
