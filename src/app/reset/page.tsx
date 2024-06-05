import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function ResetPasswordForm(): JSX.Element {
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        >
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Inserisci la nuova password
          </Heading>
          <FormControl id="email" isRequired>
            <FormLabel>Indirizzo Email</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Imposta
            </Button>
          </Stack>
        </Stack>
      </Flex>
    );
  }