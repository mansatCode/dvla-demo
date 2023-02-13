import { useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import React from 'react';
import { DVLA_APIKEY } from '@env';

const dvla = () => {
  const [dvlaData, setDvlaData] = React.useState(null)
  const [registrationNumber, setRegistrationNumber] = React.useState(null)
  const [motValid, setMotValid] = React.useState(false)

  useEffect(() => {
    var data = JSON.stringify({ registrationNumber: registrationNumber });

    var config = {
      method: 'post',
      url:
        'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles',
      headers: {
        'x-api-key': DVLA_APIKEY,
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function(response) {
        setDvlaData(response.data)
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [registrationNumber])


  function submitRegistrationNumber() {
    console.log(dvlaData.taxStatus)
    const mot = dvlaData.motStatus
    mot === 'Valid' ? setMotValid(true) : setMotValid(false);
  }

  return (
    <View>
      <TextInput 
        placeholder='Enter registration plate'
        onChangeText={text => setRegistrationNumber(text)}
      />
      <TouchableOpacity onPress={submitRegistrationNumber}>
        <Text>Submit</Text>
      </TouchableOpacity>
      <Text>{JSON.stringify(dvlaData)}</Text>
      {motValid && <Text>MOT is valid</Text>}
    </View>
  )
}

export default dvla