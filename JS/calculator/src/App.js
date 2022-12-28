import './Assets/css/animation.css'
import './Assets/css/reset.css'
import './Assets/css/style.css'
import './Assets/css/app.css'
import './Assets/css/screen/title.css'
import './Assets/css/screen/output.css'
import './Assets/css/screen/btns.css'

import CompTitle from './Comp/CompTitle.js'
import CompOutput from './Comp/CompOutput.js'
import CompBtns from './Comp/CompBtns.js'
import { createContext, useState } from 'react'

export let AppContext = createContext()
function App() {
  let str = useState('')
  return (
    <AppContext.Provider value={{ str }}>
      <section className="app">
        <CompTitle />
        <CompOutput />
        <CompBtns />
      </section>
    </AppContext.Provider>
  );
}

export default App;

