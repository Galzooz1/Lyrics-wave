import { FetchSongList } from "../../services/__generated__/FetchSongList";
import { topSongs } from "../../services/__generated__/topSongs";

export interface IHomeState {
    songList: FetchSongList | null;
    topLikedSongs: topSongs | null;
    topDateSongs: topSongs | null;
}

