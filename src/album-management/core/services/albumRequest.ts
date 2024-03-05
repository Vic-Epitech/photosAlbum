import axios from "axios";
import { Album } from "../models/album";

const API_URL = import.meta.env.VITE_APP_SATTIS_BASE_URL;

const CLAIM_ASSIGN_URL = `${API_URL}/api/v1/assign`;

export class AlbumRequests {
    
    getAlbumList() {
        return axios.get<Album>(CLAIM_ASSIGN_URL + 'list');
    }
    
    getAlbumById(claimId:number) {
        return axios.get<Album>(CLAIM_ASSIGN_URL + `/${claimId}`);
    }

    deleteAlbum(AlbumId: number) {
        return axios.delete(CLAIM_ASSIGN_URL + `/${AlbumId}`);
    }

}
