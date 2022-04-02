import { useState, useEffect } from "react"
import { ITodo } from "../../util/types"
import { Box, Text, Fade, ListItem } from "@chakra-ui/react"
import { BsFillTrashFill, BsFileEarmarkPlusFill } from "react-icons/bs"
import SubForm from "./sub-form"

interface ITodoProps {
  todo: ITodo
  removeTodo: (id: string) => void
  toggleCompleted: (id: string) => void
  addTodo: (todo: ITodo, id: string) => void
}

const Todo = (props: ITodoProps) => {
  const { todo, removeTodo, toggleCompleted, addTodo } = props
  const time: string = todo.createdAt
    .toLocaleTimeString()
    .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")

  const today = new Date()
  const [date, setDate] = useState<string>("")
  const [subForm, setSubForm] = useState<boolean>(false)
  useEffect(() => {
    switch (todo.createdAt.getDay()) {
      case today.getDay():
        setDate("Today")
        break
      case today.getDate() - 1:
        setDate("Yesterday")
        break
    }
  }, [])

  useEffect(() => {
    console.log(subForm)
  }, [subForm])

  return (
    <Fade in={true}>
      <ListItem mt={1} marginLeft={todo.indent * 5}>
        <Box display="flex" className="TodoLine">
          <Box w="100%" onClick={() => toggleCompleted(todo.id)}>
            <Box display="flex">
              <Text fontSize={18}>&#8211;</Text>
              <Text
                ml="5px"
                fontSize={18}
                alignItems="center"
                display="flex"
                style={{
                  textDecoration: todo.completed ? "line-through" : null,
                }}
              >
                {todo.description} {todo.indent}
              </Text>
            </Box>
          </Box>
          <Box className="Buttons" ml="auto">
            <Text
              fontSize={16}
              textColor="gray.400"
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
              textColor="gray.400"
              alignItems="center"
              display="flex"
              ml={2}
              overflow="hidden"
              whiteSpace="nowrap"
            >
              {time}
            </Text>
            <Box
              display="flex"
              ml={3}
              alignItems="center"
              onClick={() => setSubForm(!subForm)}
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
      {subForm ? (
        <Fade in={true}>
          <Box marginLeft={(todo.indent + 1) * 5}>
            <SubForm
              addTodo={addTodo}
              indent={todo.indent + 1}
              prevId={todo.id}
              setSubForm={setSubForm}
            />
          </Box>
        </Fade>
      ) : null}
    </Fade>
  )
}

export default Todo
