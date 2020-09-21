import React, { useState } from "react";

import Popup from "../../components/UI/Popup/Popup";
import Loader from "../../components/Loader/Loader";
import typesColors from "../../util/typesColors";
import capitalize from "../../util/capitalize";
import axios from "../../axios";

import {
  Wrapper,
  PokemonTypeButton,
  TypesGrid,
  DamageRelation,
} from "./styles";

function Types() {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  const popupContextJSX =
    loading || !showPopup ? (
      <Loader />
    ) : (
      <>
        <h1 style={{ marginBottom: "3rem", fontWeight: "bold" }}>
          {popupContent.title}
        </h1>
        {popupContent.damageRelations.map((dmgRelation) => (
          <DamageRelation key={dmgRelation.title}>
            <h2>{dmgRelation.title}</h2>
            <p>
              {dmgRelation.values
                .map((relationComponent) => relationComponent.name)
                .join(", ")}
            </p>
          </DamageRelation>
        ))}
      </>
    );

  const onTypeButtonClick = async (event) => {
    setLoading(true);
    setShowPopup(true);
    document.querySelector("body").classList.add("no-scroll");
    const targetType = event.target.getAttribute("data-type");
    const { data } = await axios.get(`/type/${targetType}`);
    console.log(data);
    setPopupContent({
      title: `${capitalize(data.name)} type`,
      damageRelations: [
        {
          title: "Super effective against",
          values: [
            ...data.damage_relations.double_damage_to,
            ...data.damage_relations.no_damage_from,
          ],
        },
        {
          title: "Not very effective against",
          values: [
            ...data.damage_relations.half_damage_to,
            ...data.damage_relations.half_damage_from,
          ],
        },
        {
          title: "Completely ineffective against",
          values: [
            ...data.damage_relations.no_damage_to,
            ...data.damage_relations.double_damage_from,
          ],
        },
      ],
    });
    setLoading(false);
  };

  const closePopup = () => {
    setShowPopup(false);
    document.querySelector("body").classList.remove("no-scroll");
  };

  return (
    <Wrapper>
      {showPopup ? (
        <Popup content={popupContextJSX} onIconClick={closePopup} />
      ) : null}
      <h1 style={{ marginBottom: "2.5rem" }}>All types</h1>
      <p style={{ maxWidth: "590px", marginLeft: "auto", marginRight: "auto" }}>
        There are a lot of types in the pokemon universe. Some of them are
        effective against others, and some are not. <br />
        Click and find out!
      </p>
      <TypesGrid>
        {Object.keys(typesColors).map((type) => (
          <PokemonTypeButton
            bgColor={typesColors[type]}
            key={type}
            data-type={type}
            onClick={onTypeButtonClick}
          >
            {capitalize(type)}
          </PokemonTypeButton>
        ))}
      </TypesGrid>
    </Wrapper>
  );
}

export default Types;
