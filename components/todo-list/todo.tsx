import { ITodo } from "../../util/types"
import { Text, ListItem, Checkbox, IconButton } from "@chakra-ui/react"
import { AiOutlineCloseCircle } from "react-icons/ai"

interface ITodoProps {
  todo: ITodo
  removeTodo: (id: string) => void
  toggleCompleted: (id: string) => void
}

const Todo = (props: ITodoProps) => {
  const { todo, removeTodo, toggleCompleted } = props
  return (
    <ListItem>
      <Checkbox checked={todo.completed} onClick={() => toggleCompleted(todo.id)} />
      <Text>
        {todo.description}
      </Text>
      <IconButton onClick={() => removeTodo(todo.id)} aria-label='Remove Todo' icon={<AiOutlineCloseCircle />} />
    </ListItem>
  )
}

export default Todo
