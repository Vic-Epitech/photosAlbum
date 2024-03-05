import { useEffect, useState } from "react"
import { AlbumRequests } from "../core/services/albumRequest"
import { Album } from '../core/models/album';

const albumRequests = new AlbumRequests()

const AlbumList = () => {

    const [loading, setLoading] = useState(true)
    const [albumsList, setalbumsList] = useState(Array<Album>)
  
    const getAlbumList = async() => {

        try {
            const getAlbumList = await albumRequests.getAlbumList();
            console.log(getAlbumList.data);
            setalbumsList(getAlbumList.data);
            setLoading(false);
        }
        catch (error) {
            console.error(error);
            alert(error);
        }
      
    }

    useEffect( () => {

        getAlbumList();

    }, [])

    return (

        <>

        <h1>Album Photo 🖼️</h1>

        <div className="container">

            <div className="row">

                {albumsList?.map((row) => (

                    <a href="#" key={row.id} className="col-12 col-md-3 album">
                            
                        <span>{row.title}</span>
                            
                    </a>
  
                ))}

            </div>

        </div>
        
        </>
    
    )

}

export {AlbumList}
