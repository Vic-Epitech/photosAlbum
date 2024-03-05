/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react"
import { AlbumRequests } from "../core/services/albumRequest";
import { useParams } from "react-router-dom";
import { Album } from '../core/models/album';

const albumRequests = new AlbumRequests()

const AlbumDetails = () => {

  //@ts-ignore
  const albumId:string = useParams()['albumId'];
  const [loading, setLoading] = useState(true)

  const [album, setAlbum] = useState<Album>()

  const getAlbumById = async() => {

      try {
          const getAlbumById = await albumRequests.getAlbumById(albumId);
          console.log(getAlbumById.data);
          setAlbum(getAlbumById.data);
          setLoading(false);
      }
      catch (error) {
          console.error(error);
          alert(error);
      }
    
  }

  useEffect( () => {

      getAlbumById();

  }, [])

  return (

    <>
    
        <h1>Detail </h1>

        {
            loading ?

            <h2>Chargement...</h2>

            :
            
            <>
                <h2>Titre : {album?.title}</h2>
                <h2>User : {album?.userId}</h2>
            </>

        }

    </>
  
  )

}

export {AlbumDetails}
