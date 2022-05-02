import { useState, useContext, useEffect, useRef } from "react"
import { Box, Fade, List, Text, Divider } from "@chakra-ui/react"
import { SettingContext } from "../../pages"
import { ITodo } from "../../util/types"
import Todo from "./todo"
import Footer from "./footer"
import TodoForm from "./todo-form"
import SubForm from "./sub-form"
import styled from "@emotion/styled"
import { AnimatePresence } from "framer-motion"

const TimerBox = styled.span`
  font-family: Lato;
  font-size: 28px;
  font-weight: bold;
  line-height: 15px;
  text-align: center;
`

const TODO_LOCAL_STORAGE_KEY = "todo-list-tods"

const TodoList = () => {
  const { timerSettings } = useContext(SettingContext)
  const [todos, setTodos] = useState<ITodo[]>([])
  const [subFormOpen, setSubFormOpen] = useState<boolean>(false)
  const [subFormPosition, setSubFormPosition] = useState<string>("")
  const [checkedTodos, setCheckedTodos] = useState<number>(0)
  const subFormIndent = useRef<number>(0)

  const findPos = (id: string): number => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        return i
      }
    }
    return todos.length
  }

  const openSubForm = (id: string) => {
    if (id === subFormPosition && subFormOpen) {
      setSubFormOpen(false)
    } else {
      setSubFormOpen(true)
      const start = findPos(id)
      const indent = todos[start].indent
      subFormIndent.current = indent + 1
      setSubFormPosition(id)
      for (let i = start + 1; i < todos.length; i++) {
        if (todos[i].indent > indent) {
          setSubFormPosition(todos[i].id)
        }
      }
    }
  }

  const addTodo = (todo: ITodo, id: string) => {
    const pos = findPos(id) + 1
    const before: ITodo[] = todos.slice(0, pos)
    const after: ITodo[] = todos.slice(pos, todos.length)
    setTodos([...before, todo, ...after])
  }

  const removeTodo = (id: string) => {
    let start = findPos(id)
    let end = start
    const indent = todos[start].indent
    for (let i = start + 1; i < todos.length; i++) {
      if (todos[i].indent <= indent) {
        end = i - 1
        break
      }
    }
    const newTodos = todos.filter((_, index) => index < start || index > end)
    setTodos(newTodos)
    setCheckedTodos(newTodos.filter((todo: ITodo) => todo.completed).length)
  }

  const toggleCompleted = (id: string) => {
    const newTodos: ITodo[] = todos.map((todo: ITodo) => {
      if (todo.id === id) {
        setCheckedTodos(checkedTodos - (todo.completed ? 1 : -1))
        return {
          ...todo,
          completed: !todo.completed,
        }
      } else {
        return todo
      }
    })
    setTodos(newTodos)
  }

  // local storage useEffects
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(TODO_LOCAL_STORAGE_KEY))
    if (storageTodos) {
      setTodos(storageTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(TODO_LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  return (
    <Box mt={timerSettings.hideQuote ? 12 : 8}>
      <Box pb={6} borderBottom="1.25px solid grey">
        <TimerBox>
          <Text>What do you wish to do today?</Text>
        </TimerBox>
      </Box>
      <Divider />
      <List mt={todos.length > 0 ? 2 : 0}>
        <AnimatePresence>
          {todos.map((todo: ITodo) => (
            <Fade key={todo.id} in={true} unmountOnExit={true}>
              <Box key={todo.id}>
                <Todo
                  todo={todo}
                  removeTodo={removeTodo}
                  toggleCompleted={toggleCompleted}
                  openSubForm={openSubForm}
                />
                {subFormOpen && subFormPosition === todo.id ? (
                  <Box ml={subFormIndent.current * 8}>
                    <SubForm
                      addTodo={addTodo}
                      indent={subFormIndent.current}
                      prevId={todo.id}
                      setSubForm={() => setSubFormOpen(false)}
                    />
                  </Box>
                ) : null}
              </Box>
            </Fade>
          ))}
        </AnimatePresence>
      </List>
      <TodoForm addTodo={addTodo} todoPos={todos.length} />
      <Footer numTodos={todos.length - checkedTodos} />
    </Box >
  )
}

export default TodoList
