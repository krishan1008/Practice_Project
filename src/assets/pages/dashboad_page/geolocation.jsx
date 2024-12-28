

import React, { useEffect, useState } from 'react';

import Geolocation from '@react-native-community/geolocation';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const Location = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        Geolocation.getCurrentPosition(e => {
            setData(e)

        })
    }, [])

    useEffect(() => {
        if (data) {

            console.log(data.coords.latitude, 'latitude')
            console.log(data.coords.longitude, 'longitude')

        }
    }, [data])

// krishan pratap singh //


    return (

        <MapView

            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: 28.4377413,
                longitude: 77.0363207,

            }}

        />
    )

};

export default Location;









