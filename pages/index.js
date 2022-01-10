import { Formik } from 'formik'
import * as yup from "yup"
import Button from "./components/Button"
import FormField from './components/FormField'
import Menu from './components/Menu'
import { useContext, useCallback } from "react"
import AppContext from "./components/AppContext"
import Home from "./components/Home"
import { AppContextProvider } from './components/AppContext'

export default function Index() {
return (
<AppContextProvider>
  <Home />
  </AppContextProvider>
  )
}
