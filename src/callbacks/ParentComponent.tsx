import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const handleChildClick = (message: string) => {
        console.log("MESSAGE FROM CHILD COMPONENT: ")
        console.log(message)
    }
  return (
    <div>
        <h1>PARENT COMPONENT</h1>
            <ChildComponent buttonClick={handleChildClick}/>
        <h1>PARENT COMPONENT</h1>
    </div>
  )
}

export default ParentComponent