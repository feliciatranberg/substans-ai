import vidWeb from "../assets/reel-01.mp4";
import vidSoMe from "../assets/reel-02.mp4";
import vidAI from "../assets/dummy.jpg";

export default [
  {
    type: "video",
    src: vidWeb,
    alt: "Reel Webb",
    caption: "Webb",
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
    caption: "SoMe",
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
    caption: "AI",
    aspect: "9/16",
    autoplay: true,
    loop: true,
    controls: false,
    muted: true,
  },
];
