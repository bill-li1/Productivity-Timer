import { ITodo } from "../../util/types"
import { useEffect } from "react"
import { Text, ListItem, Checkbox, IconButton } from "@chakra-ui/react"
import { AiOutlineCloseCircle } from "react-icons/ai"

interface ITodoProps {
  todo: ITodo
  removeTodo: (id: string) => void
  toggleCompleted: (id: string) => void
}

const Todo = (props: ITodoProps) => {
  const { todo, removeTodo, toggleCompleted } = props
  console.log(todo.completed)
  useEffect(() => {
    console.log(todo.completed)
  }, [todo.completed])
  return (
    <ListItem border="3px solid blue" display="flex">
      <Checkbox
        isChecked={todo.completed}
        onChange={() => toggleCompleted(todo.id)}
      />
      <Text
        style={{
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.description}
      </Text>
      <IconButton
        size="sm"
        onClick={() => removeTodo(todo.id)}
        aria-label="Remove Todo"
        icon={<AiOutlineCloseCircle />}
      />
    </ListItem>
  )
}

export default Todo
