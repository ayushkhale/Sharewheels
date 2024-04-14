import React, { useState } from 'react';
import { View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Dropdown = ({ onVehicleChange, onPassengerChange }) => {
  const [vehicleOpen, setVehicleOpen] = useState(false);  
  const [vehicleValue, setVehicleValue] = useState(null);
  const [passengerOpen, setPassengerOpen] = useState(false);
  const [passengerValue, setPassengerValue] = useState(null);

  const vehicleItems = [
    { label: 'Two Wheeler', value: 'two-wheeler', icon: () => <Icon name="two-wheeler" size={20} color="black" /> },
    { label: 'Four Wheeler', value: 'four-wheeler', icon: () => <Icon name="local-taxi" size={20} color="black" /> }
  ];

  const passengerItems = [
    { label: 1, value: '1' },
    { label: 2, value: '2' },
    { label: 3, value: '3' },
    { label: 4, value: '4' },
    { label: 5, value: '5' },
    { label: 6, value: '6' }
  ];

  // Call the provided callback function when vehicle value changes
  const handleVehicleChange = (value) => {
    setVehicleValue(value);
    onVehicleChange(value);
  };

  // Call the provided callback function when passenger value changes
  const handlePassengerChange = (value) => {
    setPassengerValue(value);
    onPassengerChange(value);
  };

  return (
    <View style={{flexDirection:'row'}}>
      <View style={{flex: 0.5,margin:5}}>
        <DropDownPicker
          placeholder="Choose Vehicle"
          open={vehicleOpen}
          items={vehicleItems}
          value={vehicleValue}
          setOpen={setVehicleOpen}
          setValue={handleVehicleChange} // Use the callback function here
          setItems={null}
          placeholderStyle={{
            fontWeight: '800',
          }}
          listItemLabelStyle={{
            fontWeight: '800',
          }}
        />
      </View>
      <View style={{flex: 0.5,margin:5}}>
        <DropDownPicker
          placeholder="Passengers You Can Pick"
          open={passengerOpen}
          items={passengerItems}
          value={passengerValue}
          setOpen={setPassengerOpen}
          setValue={handlePassengerChange} // Use the callback function here
          setItems={null}
          placeholderStyle={{
            fontWeight: '800',
          }}
          listItemLabelStyle={{
            fontWeight: '800',
          }}
        />
      </View>
    </View>
  );
};

export default Dropdown;
