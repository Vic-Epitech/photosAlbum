import './App.css'
import { Route, Routes} from 'react-router-dom'
import { AlbumDetails } from './album-management/pages/album-details'
import { AlbumList } from './album-management/pages/album-list'

function App() {

  return (

    <div className='container'>

      <Routes>
        <Route path='list' element={<AlbumList />} />
        <Route path='details/:albumId' element={<AlbumDetails />} />
        <Route path="/" element={<AlbumList/>} />
      </Routes>

    </div>
  )
}

export default App
