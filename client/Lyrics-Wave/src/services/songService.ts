import { useQuery } from "@apollo/client";
import { apolloClient } from "../main";
import { FETCH_SONG_LIST, FETCH_TOP_SONGS } from "./songQueries";
import { FetchSongList } from "./__generated__/FetchSongList";
import { topSongs } from "./__generated__/topSongs";

// const useSongService = () => {
//     const fetchTopSongs = (limitAmount: Number, sortMethod: String) => {
//         const { data: topSongsData, loading:topSongsLoading, error:topSongsError } = useQuery(FETCH_TOP_SONGS, {
//             variables: { limitAmount, sortMethod },
//             fetchPolicy: "cache-and-network"
//         })
//         return [topSongsData, topSongsLoading, topSongsError]
//     }

//     return (
//         fetchTopSongs
//     )
// }

// export default useSongService;

export const fetchTopSongs = (limitAmount: Number, sortMethod: String) => {
    const { data: topSongsData, loading:topSongsLoading, error:topSongsError } = useQuery(FETCH_TOP_SONGS, {
        variables: { limitAmount, sortMethod },
        fetchPolicy: "cache-and-network"
    })
    return [topSongsData, topSongsLoading, topSongsError]
}

// class SongService {

//     async fetchSongList(songs: String): Promise<FetchSongList["songs"]> {
//         try {
//             const res = await apolloClient.query({
//                 query: FETCH_SONG_LIST,
//                 variables: {songs}
//             })
//             if(!res || !res.data) {
//                 throw new Error("Something went wrong")
//             }
//             return res.data
//         } catch(err) {
//             throw err;
//         }
//     }
    
//     async fetchTopSongs(limitAmount: Number, sortMethod: String) {
//         const { loading, error, data } = useQuery(FETCH_TOP_SONGS, {
//             variables: { limitAmount, sortMethod }
//         })
//         if(data) return data;
//         else if(loading) return loading;
//         else if(error) return error;
//         // try {
//         //     const res = await apolloClient.query({
//         //         query: FETCH_TOP_SONGS,
//         //         variables: {limitAmount, sortMethod}
//         //     })
//         //     if(!res || !res.data) {
//         //         throw new Error("Something went wrong")
//         //     }
//         //     return res.data.topSongs
//         // } catch(err) {
//         //     throw err;
//         // }
//     }
// }

// export default new SongService();