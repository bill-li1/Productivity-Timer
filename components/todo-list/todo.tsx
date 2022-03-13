import { ITodo } from "../../util/types"
import { Box, Text, ListItem } from "@chakra-ui/react"
import { BsFillTrashFill, BsFileEarmarkPlusFill, BsPencilFill } from "react-icons/bs"

interface ITodoProps {
  todo: ITodo
  removeTodo: (id: string) => void
  toggleCompleted: (id: string) => void
}

const Todo = (props: ITodoProps) => {
  const { todo, removeTodo, toggleCompleted } = props

  return (
    <ListItem mt={2}>
      <Box display="flex" className="TodoLine">
        <Box w="100%" onClick={() => toggleCompleted(todo.id)}>
          <Text
            alignItems="center"
            display="flex"
            style={{
              textDecoration: todo.completed ? "line-through" : null,
            }}
          >
            {todo.description}
          </Text>
        </Box>
        <Box className="Buttons" ml="auto">
          <Text></Text>
          <Box
            display="flex"
            alignItems="center"
            onClick={() => removeTodo(todo.id)}
            aria-label="Remove Todo"
          >
            <BsPencilFill size={20} />
          </Box>
          <Box
            display="flex"
            ml={2}
            alignItems="center"
            onClick={() => removeTodo(todo.id)}
            aria-label="Remove Todo"
          >
            <BsFileEarmarkPlusFill size={20} />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            ml={2}
            onClick={() => removeTodo(todo.id)}
            aria-label="Remove Todo"
          >
            <BsFillTrashFill size={20} />
          </Box>
        </Box>
      </Box>
    </ListItem>
  )
}

export default Todo
