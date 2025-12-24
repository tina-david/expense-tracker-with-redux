// import { ExpenseProvider } from "./context/ExpenseContext"
import AppRouter from "./routes"
import {Provider} from "react-redux"
import { store } from "./redux/slices/store/store"

function App() {
  return (
<Provider store={store} >
    <AppRouter />
    </Provider>
  )
}

export default App
