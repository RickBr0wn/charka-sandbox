import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/core'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar({ isAuthenticated }) {
  return (
    <Box bg="#333" p={2} color="#fff" position="fixed" width="100vw">
      <Flex align="center" justify="space-between">
        <Link to="/">
          <Flex align="center" justify="space-between" width={150}>
            <FaGithub />
            <Text>Rick Brown 2020</Text>
          </Flex>
        </Link>
        <Flex>
          {isAuthenticated ? (
            <>
              <Link to="/private">
                <Box mr={4}>Private</Box>
              </Link>
              <Link to="/logout">
                <Box mr={4}>Logout</Box>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <Box mr={4}>Login</Box>
              </Link>
              <Link to="/signup">
                <Box mr={4}>SignUp</Box>
              </Link>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
