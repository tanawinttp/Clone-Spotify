import React from "react";
import Layout from "../../Layout/Layout";
import {
  FaBackward,
  FaForward,
  FaGreaterThan,
  FaLessThan,
} from "react-icons/fa";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import SongBar from "../MasterBar/SongBar";

const songs = [
  {
    id: Math.random() * Date.now(),
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    mp3: new Audio("/src/assets/mp3/Tum Hi Ho.mp3"),
  },
  {
    id: Math.random() * Date.now(),
    title: "Ae Dil Hai Mushkil",
    artist: "Arijit Singh",
    mp3: new Audio("/src/assets/mp3/ae.mp3"),
  },
  {
    id: Math.random() * Date.now(),
    title: "Mirchi Awards",
    artist: "Arijit Singh",
    mp3: new Audio("/src/assets/mp3/Mashup.mp3"),
  },
  {
    id: Math.random() * Date.now(),
    title: "Judaiyaan",
    artist: "Arijit Singh",
    mp3: new Audio("/src/assets/mp3/Judaiyaan.mp3"),
  },
  {
    id: Math.random() * Date.now(),
    title: "Heeriye",
    artist: "Arijit Singh",
    mp3: new Audio("/src/assets/mp3/Heeriye.m4a"),
  },
  {
    id: Math.random() * Date.now(),
    title: "Tu hi Hai Aashiqui",
    artist: "Arijit Singh",
    mp3: new Audio("/src/assets/mp3/Tu Hi Hai Aashiqui.mp3"),
  },
];

const Home = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center mb-2">
        <div className="flex gap-2 items-center">
          <FaLessThan className="bg-white/10 text-3xl p-1 rounded-[50%]" />
          <FaGreaterThan className="bg-white/10 text-3xl p-1 rounded-[50%]" />
        </div>
        <div>
          <Link
            to={"/signup"}
            className="rounded-full mt-4 px-8 text-base py-2 text-white font-semibold"
          >
            Sign Up
          </Link>

          <Link
            to={"/login"}
            className="rounded-full text-black mt-4 px-8 text-base py-3 bg-white font-semibold"
          >
            Log in
          </Link>
        </div>
      </div>
      <div className="tertiary_bg mx-4 px-4 py-4">
        <div className="flex justify-between my-4 items-center">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Focus
          </span>
          <span>Show All</span>
        </div>
        <div className="grid gap-6 grid-cols-5">
          {songs.map((song) => {
            return <Card key={song.id} song={song} />;
          })}
        </div>

        <div className="flex justify-between my-4 items-center">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Spotify List
          </span>
          <span>Show All</span>
        </div>
        <div className="grid gap-6 grid-cols-5">{/* <Card /> */}</div>
      </div>
      <SongBar />
    </Layout>
  );
};

export default Home;
