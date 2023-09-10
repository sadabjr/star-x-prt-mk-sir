import React from "react";
import "./style.css";
import YoutubeCard from "../../components/layout/YoutubeCard";
import YouTubePlaylist from "../../components/layout/YoutubePlayList";

const items = [
  // { type: 'video', videoId: 'As3LGNTlPQ0', title: 'Video 1 Title' },
  // { type: 'video', videoId: 'YOUR_VIDEO_ID_2', title: 'Video 2 Title' },
  {
    type: "playlist",
    playlistId: "PLiXSm0yMQQUngy5ZAYDPBcN_u60y3zJ_-",
    title: "MS Word Tutorials",
    img: require("../../asssets/images/Word.png"),
  },
  {
    type: "playlist",
    playlistId: "PLiXSm0yMQQUnswFv9A9-aboTavmS3Aowb",
    img: require("../../asssets/images/Excel.png"),
    title: "MS Excel Tutorials",
  },
  {
    type: "playlist",
    playlistId: "PLiXSm0yMQQUnVong3ik1MvT0jAV_AKK71",
    img: require("../../asssets/images/power.png"),
    title: "MS Power Point Tutorials",
  },
  {
    type: "playlist",
    playlistId: "PLiXSm0yMQQUmsCph_hbecCvLVsA30oR0Y",
    img: require("../../asssets/images/ps.png"),
    title: "Adobe Photoshop Tutorials",
  },
  {
    type: "playlist",
    playlistId: "PLiXSm0yMQQUmvF58_YETn7UiiaK_A-xIU",
    img: require("../../asssets/images/tally.png"),
    title: "Tally Prime Tutorials",
  },
  {
    type: "playlist",
    playlistId: "PLiXSm0yMQQUmOWyUSgJCESp_xb7ECft1G",
    img: require("../../asssets/images/coral.png"),
    title: "Coral Draw Tutorials",
  },
  {
    type: "playlist",
    playlistId: "PLiXSm0yMQQUnNTO-OG9DEEs3ApL2Mg_Y6",
    img: require("../../asssets/images/tips.png"),
    title: "Computer Tricks & Tips",
  },
  {
    type: "playlist",
    playlistId: "PLiXSm0yMQQUnqhHjmwznJ078l4GthDZky",
    img: require("../../asssets/images/dos.png"),
    title: "MS DOS Tutorials",
  },
  {
    type: "playlist",
    playlistId: "PLiXSm0yMQQUmX_mFrWkbFE1msf6QdyUiT",
    img: require("../../asssets/images/paint.png"),
    title: "MS Paint Tutorials",
  },
  {
    type: "playlist",
    playlistId: "PLiXSm0yMQQUkgyJCcZJyy7Bl-BEoBJIHk",
    img: require("../../asssets/images/ccc.png"),
    title: "CCC Tutorials",
  },
  {
    type: "playlist",
    playlistId: "PLiXSm0yMQQUlorqkrrskfLNmUHNQ4y4kG",
    img: require("../../asssets/images/web.png"),
    title: "HTML Tutorials",
  },
  {
    type: "playlist",
    playlistId: "PLiXSm0yMQQUlgGZr2D5uLrGyOX471DX5Y",
    img: require("../../asssets/images/libre.png"),
    title: "Libre Office Tutorials",
  },
];

const Tutorials = () => {
  return (
    <div className="min-h-screen">
      <div>
      <h4
          className="font-bold md:text-3xl text-3xl text-center py-8"
          style={{ textDecoration: "underline" }}
        >
          Tutorials
        </h4>
      </div>
      <div className=" flex justify-center items-center">
        <div className="p-4 gap-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item, index) =>
            item.type === "video" ? (
              <YoutubeCard
                key={index}
                videoId={item.videoId}
                img={item.img}
                title={item.title}
              />
            ) : (
              <YouTubePlaylist
                key={index}
                playlistId={item.playlistId}
                img={item.img}
                title={item.title}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
