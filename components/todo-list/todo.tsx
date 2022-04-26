import { useState, useEffect } from "react"
import { ITodo } from "../../util/types"
import { Box, Text, ListItem, useColorModeValue } from "@chakra-ui/react"
import { BsFillTrashFill, BsFileEarmarkPlusFill } from "react-icons/bs"

interface ITodoProps {
  todo: ITodo
  removeTodo: (id: string) => void
  toggleCompleted: (id: string) => void
  openSubForm: (id: string) => void
}

const getFormattedDate = (date: Date) => {
  let year = date.getFullYear().toString().slice(2, 4)
  let month = (1 + date.getMonth()).toString().padStart(2, "0")
  let day = date.getDate().toString().padStart(2, "0")

  return month + "/" + day + "/" + year
}

const Todo = (props: ITodoProps) => {
  const { todo, removeTodo, toggleCompleted, openSubForm } = props
  const actualDate: Date = new Date(todo.createdAt);
  const time: string = actualDate
    .toLocaleTimeString()
    .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")

  const today = new Date()
  const [date, setDate] = useState<string>(getFormattedDate(today))

  useEffect(() => {
    switch (actualDate.getDay()) {
      case today.getDay():
        setDate("Today")
        break
      case today.getDate() - 1:
        setDate("Yesterday")
        break
    }
  }, [])

  return (
    <Box>
      <ListItem mt={1}>
        <Box display="flex" className="TodoLine" ml={todo.indent * 8}>
          <Box w="100%" onClick={() => toggleCompleted(todo.id)}>
            <Box display="flex">
              {todo.indent > 0 ? (
                <Text fontSize={18}>&#8226;</Text>
              ) : (
                <Text fontSize={18}>&#8211;</Text>
              )}
              <Text
                ml="5px"
                fontSize={todo.indent > 0 ? 17 : 18}
                alignItems="center"
                display="flex"
                style={{
                  textDecoration: todo.completed ? "line-through" : null,
                }}
              >
                {todo.description}
              </Text>
            </Box>
          </Box>
          <Box className="Buttons" ml="auto">
            <Text
              fontSize={16}
              textColor={useColorModeValue("gray.600", "gray.400")}
              alignItems="center"
              ml={2}
              display="flex"
              overflow="hidden"
              whiteSpace="nowrap"
            >
              {date}
            </Text>
            <Text
              fontSize={16}
              textColor={useColorModeValue("gray.600", "gray.400")}
              alignItems="center"
              display="flex"
              ml={2}
              overflow="hidden"
              whiteSpace="nowrap"
            >
              {time}
            </Text>
            {todo.indent < 3 ? (
              <Box
                display="flex"
                ml={3}
                alignItems="center"
                onClick={() => openSubForm(todo.id)}
                aria-label="Remove Todo"
              >
                <BsFileEarmarkPlusFill size={20} />
              </Box>
            ) : null}
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
    </Box>
  )
}

export default Todo
