import { StatusBar } from 'expo-status-bar';
import {useForm, Controller} from 'react-hook-form'
import {VStack, Heading, Center } from 'native-base';
import {Input} from '../components/Input'
import { Button } from '../components/Button';

type FormDataProps = {
  name: String;
  email: String;
  password: String;
  password_confirm: String;
}

export  function SignUp() {
  const {control, handleSubmit,} = useForm<FormDataProps>();
  function handleSignUp(data: FormDataProps ){
    console.log(data);
  }
  return (
    <VStack bgColor='gray.400' flex={1} px ='10'>
     <Center>
       <Heading my={24} >
        Crie sua conta
       </Heading>
       
       <Controller
        control={control}
        name='name'
        rules={{
          required: 'Informe o nome'
        }}
        render={({field:{onChange}}) => (
          <Input placeholder='Nome'onChangeText={onChange}/>
        )}
       />

       <Controller
        control={control}
        name='email'
        rules={{
          required: 'Informe o E-mail'
        }}
        render={({field:{onChange}}) => (
          <Input placeholder='E-mail'onChangeText={onChange}/>
        )}
       />

       <Controller
        control={control}
        name='password'
        rules={{
          required: 'Informe a senha'
        }}
        render={({field:{onChange}}) => (
          <Input placeholder='Senha'
          secureTextEntry
          onChangeText={onChange}/>
        )}
       />

       <Controller
        control={control}
        name='password_confirm'
        rules={{
          required: 'Informe a senha'
        }}
        render={({field:{onChange}}) => (
          <Input placeholder='Confirme a senha'
          secureTextEntry
          onChangeText={onChange}/>
        )}
       />
       <Button title='Cadastrar' onPress={handleSubmit(handleSignUp)}/> 
     </Center>
    </VStack>
  );
}

