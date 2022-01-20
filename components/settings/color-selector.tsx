import React, { useState, useEffect } from "react"
import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Center,
  SimpleGrid,
  Input,
  useDisclosure,
} from "@chakra-ui/react"

const ColorSelector = (props: ColorSelectorProps) => {
  const { color, setColor } = props
  const { onOpen, onClose, isOpen } = useDisclosure()

  const colors = [
    "#9E9E9E",
    "#F44336",
    "#424242",
    "#4CAF50",
    "#64B5F6",
    "#1565C0",
    "#FFEB3B",
    "#FF9800",
    "#9C27B0",
    "#E91E63",
  ]

  return (
    <Center>
      <Popover variant="picker" isOpen={isOpen} onClose={onClose}>
        <PopoverTrigger>
          <Button
            _hover={{
              background: `${color}80`,
            }}
            aria-label={color}
            background={color}
            onClick={onOpen}
            height="22px"
            width="22px"
            padding={0}
            minWidth="unset"
            borderRadius={3}
          />
        </PopoverTrigger>
        <PopoverContent width="170px">
          <PopoverArrow bg={color} />
          <PopoverCloseButton color="white" />
          <PopoverHeader
            height="100px"
            backgroundColor={color}
            borderTopLeftRadius={5}
            borderTopRightRadius={5}
            color="white"
          >
            <Center height="100%">{color}</Center>
          </PopoverHeader>
          <PopoverBody height="120px">
            <SimpleGrid columns={5} spacing={2}>
              {colors.map((c) => (
                <Button
                  key={c}
                  aria-label={c}
                  background={c}
                  height="22px"
                  width="22px"
                  padding={0}
                  minWidth="unset"
                  borderRadius={3}
                  _hover={{ background: c }}
                  onClick={() => {
                    setColor(c)
                    onClose()
                  }}
                ></Button>
              ))}
            </SimpleGrid>
            <Input
              borderRadius={3}
              marginTop={3}
              placeholder="red.100"
              size="sm"
              value={color}
              onChange={(e) => {
                setColor(e.target.value)
              }}
            />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Center>
  )
}

interface ColorSelectorProps {
  color: string
  setColor: (color: string) => void
}

export default ColorSelector
