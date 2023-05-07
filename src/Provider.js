import React, { useState } from 'react'
import { Usercontext } from './Usercontext'
export default function Provider({props}) {
    const [validate,setvalidate]=useState(false)
  return (
    <Usercontext.Provider value={{validate,setvalidate}}>{props.children}</Usercontext.Provider>
  )
}
