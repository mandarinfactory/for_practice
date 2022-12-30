import './Assets/css/animation.css'
import './Assets/css/reset.css'
import './Assets/css/style.css'
import './Assets/css/app.css'
import './Assets/css/screen/title.css'
import './Assets/css/screen/output.css'
import './Assets/css/screen/btns.css'
import './Assets/css/screen/error.css'

import CompTitle from './Comp/CompTitle.js'
import CompOutput from './Comp/CompOutput.js'
import CompBtns from './Comp/CompBtns.js'
import CompError from './Comp/CompError'
import { createContext, useState } from 'react'

export let AppContext = createContext()
function App() {
  let [str, chStr] = useState('')
  let [showErr, chShowErr] = useState(false)
  return (
    <AppContext.Provider value={{ str, chStr, chShowErr }}>{/* 택배박스에 넣어놓기! */}
      <section className="app">
        <CompTitle />
        <CompOutput />
        <CompBtns />
      </section>
      {
        showErr && <CompError />
      }{/* 조건부로 component나오게 하는것!(2항연산식) */}
    </AppContext.Provider>
  );
}

export default App;

