import { useEffect, useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: null,
  });

  const [allMemes, setAllMemes] = useState([]);

  const handleClick = () => {
    const newImgURL = allMemes[Math.floor(Math.random() * allMemes.length)].url;

    setMeme((prevMeme) => ({ ...prevMeme, randomImage: newImgURL }));
  };

  const handleChange = (e) => {
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [e.target.name]: e.target.value,
      };
    });
  };

  useEffect(() => {
    (async () => {
      const data = await fetch("https://api.imgflip.com/get_memes").then((x) =>
        x.json()
      );

      const memes = data.data.memes.filter((meme) => meme.box_count === 2);
      setAllMemes(memes);
    })();
  }, []);

  return (
    <main>
      <div className="form">
        <div className="inputs">
          <input
            type="text"
            placeholder="Upper phrase"
            name="topText"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Lower phrase"
            name="bottomText"
            onChange={handleChange}
          />
        </div>

        <button onClick={handleClick}>Get a new meme image</button>
      </div>

      {meme.randomImage ? (
        <div className="meme-container">
          <img className="memeImg" src={meme.randomImage} alt="The Meme" />
          <h2 className="memeText top">{meme.topText}</h2>
          <h2 className="memeText bottom">{meme.bottomText}</h2>
        </div>
      ) : (
        <div className="meme-container">
          <p>"Waiting for someone to meme..."</p>
        </div>
      )}
    </main>
  );
}
