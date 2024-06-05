import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  type ForgotPasswordFormInputs = {
    email: string;
  };
  
  export default function ForgotPasswordForm(): JSX.Element {
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Hai dimenticato la password?
          </Heading>
          <Text
            fontSize={{ base: 'sm', sm: 'md' }}
            >
            Riceverai una mail con le istruzioni per reimpostare la tua password
          </Text>
          <FormControl id="email">
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
            Richiedi reimpostazione
            </Button>
          </Stack>
        </Stack>
      </Flex>
    );
  }