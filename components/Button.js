import { TouchableOpacity, Text} from 'react-native';

export const MainButton = ({handlePress, name}  ) => {
    return(
        <TouchableOpacity style={{
            backgroundColor: '#7180D9',
            borderRadius: 10,
            marginTop: 12,
            color: 'white',
            width: '84%',
            height: 65,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }} onPress={ handlePress }>
            <Text style={{
                color: '#fff',
                fontSize: 18,
            }}>
                { name }
            </Text>
        </TouchableOpacity>
    )
}

export const CircleButton = (props) => {
    return(
        <TouchableOpacity style={{
            backgroundColor: '#fff',
            borderWidth: 2,
            borderColor: '#8F92BF',
            borderRadius: 48,
            marginTop: 12,
            width: 80,
            height: 80,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                color: '#8F92BF',
                fontSize: 18,
            }}>
                {props.time}
            </Text>
        </TouchableOpacity>
    )

}
