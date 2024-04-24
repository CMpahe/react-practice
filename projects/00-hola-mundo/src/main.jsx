
import React from 'react'
import ReactDOM from 'react-dom/client'
//aqui se aplican las importaciones necesarias para que se ejecute el codigo 
import { App } from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

//con el metodo render podemos hacer que el elemento root renderice lo que se le pasa como parametro (solo acepta un parametro)
root.render(
  <App/>
)

