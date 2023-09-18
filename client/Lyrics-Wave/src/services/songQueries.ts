import { gql } from "@apollo/client";

export const FETCH_SONG_LIST = gql`
query FetchSongList {
	songs {
    id
    title
    likes
    dislikes
    user {
      id
      nickname
    }
    usersLike {
      id
      nickname
    }
    usersDislike {
      id
      nickname
    }
    lyrics {
      id
      content
      likes
      dislikes
      usersLike {
        id
        nickname
      }
      usersDislike {
        id
        nickname
      }
    }
  }
}
`;

export const FETCH_TOP_SONGS = gql`
query topSongs($limitAmount: Int!, $sortMethod: String!) {
  topSongs(limitAmount: $limitAmount, sortMethod: $sortMethod) {
      id
      title
      likes
      dislikes
    date
    lyrics{
      id
      content
      likes
      dislikes
    }
  }
}
`