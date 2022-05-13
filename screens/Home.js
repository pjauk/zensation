import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {CircleButton, MainButton} from "../components/Button";

const DayCount = (props) => {
    return(
        <View style={{
            marginTop: '10%',
            height: 280,
            padding: '5%',
            backgroundColor: '#5BA9D9',
            textAlign: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{
                fontSize: 22,
                color: '#fff'
            }}>{props.date} days meditated in a row!</Text>
            <Text style={{
                color: '#fff',
                fontSize: 18,
                fontStyle: 'italic',
                marginTop: 5,
            }}>Some kind of quote...</Text>
        </View>
    )
}

const Home = ()  => {
    const navigation = useNavigation();

    return(
        <View style={{
            width: '100%',
        }}>
            <View>
                <DayCount date="2"/>
            </View>
            <Text style={{
                textAlign:'center',
                fontSize: 16,
                marginTop: 10,
                color: '#89888C'
            }}>Quickstart</Text>
            <View style={{
                marginTop: 12,
                marginBottom: 12,
                marginRight: '6%',
                marginLeft: '6%',
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <CircleButton time={ 5 }/>
                <CircleButton time={ 10 }/>
                <CircleButton time={ 15 }/>
            </View>
            <View style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 20,
                justifyContent: 'center',
            }}>
                <MainButton name="Meditate" handlePress={ () => {
                    navigation.navigate("Meditate");
                } }>
                </MainButton>
                <MainButton name="See your Progress" handlePress={ () => {
                    navigation.navigate("Calendar");
                } }>
                </MainButton>
                <MainButton name="Save your streak" handlePress={ () => {
                    navigation.navigate("StreakSave");
                }}>
                </MainButton>
            </View>
        </View>
    )
}

export default Home;
