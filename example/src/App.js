import React from 'react'
import { CustomContext } from './CustomContext'
import { ExampleComponent, SubCustomContext } from 'wgas'
import styles from './styles.module.css'
import 'wgas/dist/index.css'

let counter = 0

const sharedValue = {
  value : "Create React Library Example 😄 {From Top Level Context}",
  counterValue: () => { return counter },
  increment: (calledFrom) => { 
    counter ++
    console.log(`${calledFrom} ${counter}`)
  }
}

function SamePackageExampleComponent(){
  return (
    <CustomContext.Consumer>
      {(value)=>(
        value.increment("SampePackageExampleComponent") === undefined && console.log(value)===undefined && 
        <div className={styles.test}>Example Component: {value.value} and counter == {value.counterValue()}</div>
      )}
    </CustomContext.Consumer>
  )
}

const App = () => {
  return (
    <CustomContext.Provider value={sharedValue}>
      <SubCustomContext.Provider value={sharedValue}>
        <SamePackageExampleComponent/>
        <ExampleComponent />
      </SubCustomContext.Provider>
    </CustomContext.Provider>
  )
}

export default App
