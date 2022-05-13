import React, { useState } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";

import DateTimePicker from '@react-native-community/datetimepicker';

export const SetTimer = () => {
    const [date, setDate] = useState(new Date(1598051730000));

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    return (
        <View>
            <View style={{
                marginTop: 20,
            }}>
            </View>
            <View>
                <DateTimePicker
                    style={{
                        display: "inline"
                    }}
                    testID="dateTimePicker"
                    value={date}
                    mode="time"
                    display="spinner"
                    is24Hour={true}/>
            </View>
        </View>
    );
}

export default SetTimer;
// Just some styles
