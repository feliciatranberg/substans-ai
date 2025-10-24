import vidWeb from "../assets/reel-01.mp4";
import vidSoMe from "../assets/reel-02.mp4";
import vidAI from "../assets/dummy.jpg";

export default [
  {
    type: "video",
    src: vidWeb,
    alt: "Reel Webb",
    caption: "Webb lorem ipsum",
    aspect: "9/16",
    autoplay: true,
    loop: true,
    controls: false,
    muted: true,
  },
  {
    type: "video",
    src: vidSoMe,
    alt: "Reel SoMe",
    caption: "Content lorem ipsum",
    aspect: "9/16",
    autoplay: true,
    loop: true,
    controls: false,
    muted: true,
  },
  {
    type: "video",
    src: vidAI,
    alt: "Reel AI",
    caption: "AI lorem ipsum",
    aspect: "9/16",
    autoplay: true,
    loop: true,
    controls: false,
    muted: true,
  },
];
