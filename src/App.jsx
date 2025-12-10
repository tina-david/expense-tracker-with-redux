import { ExpenseProvider } from "./context/ExpenseContext"
import AppRouter from "./routes"


function App() {
  return (
 <ExpenseProvider>
      <AppRouter />
    </ExpenseProvider>      
  )
}

export default App
