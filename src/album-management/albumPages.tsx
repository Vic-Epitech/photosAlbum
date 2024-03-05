import { Route, Routes} from 'react-router-dom'
import { AlbumList } from './pages/album-list'
import { AlbumDetails } from './pages/album-details'

const AlbumPages = () => (

    <Routes>
  
        <Route path='list' element={<AlbumList />} />
        <Route path='details/:albumId' element={<AlbumDetails />} />
  
        <Route index element={<AlbumList />} />
  
    </Routes>
    
  )
  
  export {AlbumPages}