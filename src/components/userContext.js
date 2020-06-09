import React, { Component } from 'react'

//set default value for context by pass the string as a parameter
const UserContext = React.createContext('learn react')

const UserProvider = UserContext.Provider 
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
export default UserContext