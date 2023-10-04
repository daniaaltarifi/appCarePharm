import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  userInfo: null,
};

// Create an async function to fetch the userInfo from AsyncStorage
async function fetchUserInfoFromAsyncStorage() {
  try {
    const userInfoString = await AsyncStorage.getItem('userInfo');
    if (userInfoString) {
      return JSON.parse(userInfoString);
    }
  } catch (error) {
    // Handle AsyncStorage errors here, e.g., log the error
    console.error('AsyncStorage error:', error);
  }
  return null; // Return null if there's an error or no data in AsyncStorage
}

// Initialize the userInfo asynchronously in your initial state
fetchUserInfoFromAsyncStorage().then((userInfo) => {
  initialState.userInfo = userInfo;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      try {
        AsyncStorage.setItem('userInfo', JSON.stringify(action.payload));
      } catch (error) {
        // Handle AsyncStorage errors here, e.g., log the error
        console.error('AsyncStorage error:', error);
      }

      // Other logic
    },
    logout: (state, action) => {
      state.userInfo = null;
      try {
        AsyncStorage.removeItem('userInfo');
        AsyncStorage.removeItem('expirationTime');
      } catch (error) {
        // Handle AsyncStorage errors here, e.g., log the error
        console.error('AsyncStorage error:', error);
      }

      // Other logic
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
