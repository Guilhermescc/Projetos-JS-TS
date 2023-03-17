import {Button as ButtonNativebase,IButtonProps, Text} from 'native-base'


type Props = IButtonProps & {
    title: string;

}
export function Button({title, ...rest}: Props){
    return(
     <ButtonNativebase
        w = 'full'
        h = {16}
        bg = 'green.700'
        _pressed={{ bgColor: 'green.800'}}
    
       {...rest}
     >
        <Text color='white' fontSize= 'md'>
         {title}
        </Text>
     </ButtonNativebase>
    )

}