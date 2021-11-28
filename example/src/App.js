import React from 'react'
import { CustomContext } from './CustomContext'
import { ExampleComponent } from 'wgas'
import styles from './styles.module.css'
import 'wgas/dist/index.css'

function SamePackageExampleComponent(){
  return (
    <CustomContext.Consumer>
      {(value)=>(
        <div className={styles.test}>Example Component: {value}</div>
      )}
    </CustomContext.Consumer>
  )
}

const App = () => {
  return (
    <CustomContext.Provider value = "Create React Library Example 😄 {From Top Level Context}" >
      <SamePackageExampleComponent/>
      <ExampleComponent />
    </CustomContext.Provider>
  )
}

export default App
