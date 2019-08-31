import React from 'react'
import Header from './componentes/Header'
import Sobre from './componentes/Sobre'
import Painel from './componentes/Painel'
import Acoes from './componentes/Acoes'

import {
  BrowserRouter as Router,
  Route,
  Switch
}  from 'react-router-dom'

function App() {

  return (
  <Router>
    <div>
       <Header />
       <Switch>
          <Route path='/' exact component={Painel} />
          <Route path='/acoes' exact component={Acoes} />
          <Route path='/sobre' exact component={Sobre} />

       </Switch>
    </div>
  </Router>
  )
}

export default App
