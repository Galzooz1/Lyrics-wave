/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: topSongs
// ====================================================

export interface topSongs_topSongs_lyrics {
  __typename: "LyricType";
  content: string | null;
  likes: number | null;
}

export interface topSongs_topSongs {
  __typename: "SongType";
  id: string | null;
  title: string | null;
  likes: number | null;
  dislikes: number | null;
  date: any | null;
  lyrics: (topSongs_topSongs_lyrics | null)[] | null;
}

export interface topSongs {
  topSongs: (topSongs_topSongs | null)[] | null;
}

export interface topSongsVariables {
  limitAmount: number;
  sortMethod: string;
}
