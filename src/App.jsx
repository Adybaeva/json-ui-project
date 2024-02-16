import './App.css'
import ViewToComponentRenderer from './components/views/ViewToComponentRenderer';
import KodifClient from "./utils/KodifClient"
import { useEffect, useState } from "react";

function App() {
  const kodifClient = new KodifClient()
  const [views, setViews] = useState([])

  useEffect(() => {
    kodifClient.getViews().then(views => {
      console.log(views)
      setViews(views);

    })
  }, []);

  return (
    <div className="App">
      {
        views.map((view, index) => {
          return <ViewToComponentRenderer key={index} view={view} />
        })
      }
    </div>
  )
}

export default App
