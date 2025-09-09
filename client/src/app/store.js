import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../feature/user/userSlice.js'
import ConnectionsReducer from '../feature/connections/connectionsSlice.js'
import messagesReducer from '../feature/messages/messagesSlice.js'

export const store = configureStore({
    reducer: {
        user: userReducer,
        connections: ConnectionsReducer,
        messages: messagesReducer
    }
})