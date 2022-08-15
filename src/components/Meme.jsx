import React from 'react';

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch('https://api.imgflip.com/get_memes');
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  function getMemeImage() {
    const random = Math.floor(Math.random() * allMemes.length);
    const randomMeme = allMemes[random].url;
    setMeme((prevState) => ({
      ...prevState,
      randomImage: randomMeme,
    }));
  }

  function getTexts(event) {
    const { value, name } = event.target;

    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <div className="form">
        <div className="form-inputs">
          <input
            type="text"
            placeholder="Top text"
            className="form-inputs-input"
            name="topText"
            value={meme.topText}
            onChange={getTexts}
          />
          <input
            type="text"
            placeholder="Bottom text"
            className="form-inputs-input"
            name="bottomText"
            value={meme.bottomText}
            onChange={getTexts}
          />
        </div>
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
