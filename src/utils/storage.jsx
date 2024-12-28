import AsyncStorage from '@react-native-async-storage/async-storage';

const setLocalStorage = async (key, value) => {
    try {
    await AsyncStorage.setItem(key, value)
    console.log(`storage,${key}`)
    console.log(`storage,${value}`)

    } catch(err) {
        console.log('Storage is not saved properly')
    }
}

const getLocalStorage = async (key) => {
    const getValue = await AsyncStorage.getItem(key)
    console.log(getValue)
    return getValue
}

const removeLocalStorage = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch(err) {
        console.log('Storage not deleted')
    }
}

export {
    setLocalStorage,
    getLocalStorage,
    removeLocalStorage
}