import './App.css'
import { Route, Routes} from 'react-router-dom'
import { AlbumPages } from './album-management/albumPages'

function App() {

  return (

    <div className='container'>

      <Routes>
        <Route index element={<AlbumPages/>} />
        <Route path="/" element={<AlbumPages/>} />
      </Routes>

    </div>
  )
}

export default App
