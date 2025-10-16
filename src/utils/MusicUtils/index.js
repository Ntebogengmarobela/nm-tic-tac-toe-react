import { playList } from "./Playlist";

export const randomizeIndex = (playList) =>
  Math.floor(Math.random() * playList.length);
