import './App.scss'
import {Navigation} from "./routes"
import './tailwind.css'; 

window.process = {
  env: {
    NODE_ENV: 'development' // o 'production' dependiendo del entorno
  }
};

function App() {
  return (
    <>
      <Navigation />
    </>
  )
}

export default App
