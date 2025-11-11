import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <AppRoutes/>
    </AuthProvider>
  )
}

export default App
