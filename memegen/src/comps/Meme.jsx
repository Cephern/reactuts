import { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: null,
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const handleClick = () => {
    const newImgURL =
      allMemeImages.data.memes[
        Math.floor(Math.random() * allMemeImages.data.memes.length)
      ].url;

    setMeme((prevMeme) => ({ ...prevMeme, randomImage: newImgURL }));
  };

  return (
    <main>
      <div className="form">
        <div className="inputs">
          <input type="text" placeholder="Upper phrase" />
          <input type="text" placeholder="Lower phrase" />
        </div>

        <button onClick={handleClick}>Get a new meme image</button>
      </div>

      <div className="img-container">
        {meme.randomImage ? (
          <img className="memeImg" src={meme.randomImage} alt="The Meme" />
        ) : (
          "Waiting for someone to meme..."
        )}
      </div>
    </main>
  );
}
