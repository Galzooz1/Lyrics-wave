/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchSongList
// ====================================================

export interface FetchSongList_songs_user {
  __typename: "UserType";
  id: string | null;
  nickname: string | null;
}

export interface FetchSongList_songs_usersLike {
  __typename: "UserType";
  id: string | null;
  nickname: string | null;
}

export interface FetchSongList_songs_usersDislike {
  __typename: "UserType";
  id: string | null;
  nickname: string | null;
}

export interface FetchSongList_songs_lyrics_usersLike {
  __typename: "UserType";
  id: string | null;
  nickname: string | null;
}

export interface FetchSongList_songs_lyrics_usersDislike {
  __typename: "UserType";
  id: string | null;
  nickname: string | null;
}

export interface FetchSongList_songs_lyrics {
  __typename: "LyricType";
  id: string | null;
  content: string | null;
  likes: number | null;
  dislikes: number | null;
  usersLike: (FetchSongList_songs_lyrics_usersLike | null)[] | null;
  usersDislike: (FetchSongList_songs_lyrics_usersDislike | null)[] | null;
}

export interface FetchSongList_songs {
  __typename: "SongType";
  id: string | null;
  title: string | null;
  likes: number | null;
  dislikes: number | null;
  user: FetchSongList_songs_user | null;
  usersLike: (FetchSongList_songs_usersLike | null)[] | null;
  usersDislike: (FetchSongList_songs_usersDislike | null)[] | null;
  lyrics: (FetchSongList_songs_lyrics | null)[] | null;
}

export interface FetchSongList {
  songs: (FetchSongList_songs | null)[] | null;
}
