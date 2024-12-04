import { useState } from "react";

const characters = [
  { id:0, name: "ルフィ", bounty: "30億", nickname: "麦わらのルフィ" ,affiliation:"麦わら海賊団"},
  { id:1, name: "ゾロ", bounty: "11億1100万", nickname: "海賊狩りのゾロ", affiliation:"麦わら海賊団" },
  { id:2, name: "サンジ", bounty: "11億1100万", nickname: "黒足のサンジ",affiliation:"麦わら海賊団" },
  { id:3, name: "マーシャル・Ｄ・ティーチ", bounty: "22億4760万", nickname: "黒ひげ", affiliation:"黒ひげ海賊団" },
  { id:3, name: "ジーザス・バージェス", bounty: "0", nickname: "チャンピオン", affiliation:"黒ひげ海賊団" },
 ];
 function Profile({ name, bounty, nickname, affiliation }) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <ul>
        <li>
          <b>懸賞金:</b> {bounty}ベリー
          <b>二つ名:</b> {nickname}
          <b>所属:</b> {affiliation}
        </li>
      </ul>
    </section>
  );
}

function Gallery() {
  const [selectedAffiliationIndex, setSelectedAffiliationIndex] = useState(0);

  const handleChange = (event) => {
    setSelectedAffiliationIndex(event.target.value);
  };

  const affiliations = ["麦わら海賊団", "黒ひげ海賊団"];
  const filteredCharacters = characters.filter(
    (character) =>
      character.affiliation === affiliations[selectedAffiliationIndex]
  );

  return (
    <>
      <h1>ワンピースの登場人物</h1>
      <div>
        <label htmlFor="aff-select">海賊団を選択：</label>
        <select
          name="aff-select"
          id="aff-select"
          value={selectedAffiliationIndex}
          onChange={handleChange}
        >
          {affiliations.map((affiliation, index) => (
            <option key={index} value={index}>
              {affiliation}
            </option>
          ))}
        </select>
      </div>
      <div>
        {filteredCharacters.map((character) => (
          <Profile
            key={character.id}
            name={character.name}
            bounty={character.bounty}
            nickname={character.nickname}
            affiliation={character.affiliation}
          />
        ))}
      </div>
    </>
  );
}

export default Gallery;