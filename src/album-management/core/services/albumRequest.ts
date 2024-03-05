import axios from "axios";
import { Album } from "../models/album";

const API_URL = import.meta.env.VITE_ALBUMPHOTO_APP_BASE_URL;

const ALBUM_URL = `${API_URL}/albums/`;

export class AlbumRequests {
    
    getAlbumList() {
        return axios.get<Album>(ALBUM_URL);
    }
    
    getAlbumById(albumId:number) {
        return axios.get<Album>(ALBUM_URL + `/${albumId}`);
    }

}
