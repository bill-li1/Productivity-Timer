import { ITodo } from "../../util/types"
import { Box, Text, ListItem } from "@chakra-ui/react"
import {
  BsFillTrashFill,
  BsFileEarmarkPlusFill,
  BsPencilFill,
} from "react-icons/bs"

interface ITodoProps {
  todo: ITodo
  removeTodo: (id: string) => void
  toggleCompleted: (id: string) => void
}

const Todo = (props: ITodoProps) => {
  const { todo, removeTodo, toggleCompleted } = props
  const date: string = todo.createdAt
    .toLocaleTimeString()
    .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")

  return (
    <ListItem mt={2}>
      <Box display="flex" className="TodoLine">
        <Box w="100%" onClick={() => toggleCompleted(todo.id)}>
          <Text
            fontSize={18}
            alignItems="center"
            display="flex"
            style={{
              textDecoration: todo.completed ? "line-through" : null,
            }}
          >
            - {todo.description}
          </Text>
        </Box>
        <Box className="Buttons" ml="auto">
          <Text
            fontSize={16}
            textColor="gray.400"
            alignItems="center"
            display="flex"
            ml={2}
            overflow="hidden"
            whiteSpace="nowrap"
          >
            {date}
          </Text>
          <Box
            display="flex"
            ml={3}
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
