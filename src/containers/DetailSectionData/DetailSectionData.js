import React, { useState, useRef } from "react";

import Loader from "../../components/Loader/Loader";
import axios from "../../axios";

import {
  Wrapper,
  PillsWrapper,
  Pill,
  PillDetail,
  CloseDetailIcon,
} from "./styles";

/* The DetailSectionData component shows more detail into an attribute of a pokemon through a HTTP request
to the pokeapi. 
As an example, bulbasaur's abilities are overgrow and chlorophyll. If we wanted to know more 
about each one, we could just click a button that will be rendered in this component and then 
a section would expand and its content would be filled with the data regarding said ability
that was retrieved from the HTTP request. 

So, the necessary props to render this component are:
* values -> an array of the values that will be rendered as buttons 
* acessPoint -> a string that shows how to acess each value on its array. 
* baseURL -> the baseURL to which we will send HTTP requests in order to get 

*/

function DetailSectionData({ values, acessPoint, baseURL }) {
  //the object that will be populated with the data of each pill
  const [pillsData, setPillsData] = useState(() => {
    let state = {};
    for (let value of values) {
      state[value[acessPoint].name] = null;
    }
    return state;
  });
  const [selectedPill, setSelectedPill] = useState(null);
  const [fetchingDetailData, setFetchingDetailData] = useState(false);

  const selectedPillRef = useRef(null);
  const pillDetailRef = useRef(null);

  const closeDetail = () => {
    pillDetailRef.current.classList.remove("expanded");
  };

  const onPillClick = async (event) => {
    /* On each pill click we need to: 
      1. Unset the previously selected pill
      2. Set the newly selected pill 
      3. Check to see if the expanded section is already expanded. If not, expand it. 
      4. Check to see if the data of this pill has already been fetched. If so, just use the 
      pillsData state object. If not, then make an http request and set the pillsData state object.  
      5. Set the detail section data 
      */

    //unsetting the previously selected pill
    if (selectedPillRef.current) {
      selectedPillRef.current.classList.remove("selected");
    }

    const selectedPillName = event.target.textContent;
    //setting the newly selected pill
    selectedPillRef.current = event.target;
    event.target.classList.add("selected");
    setSelectedPill(selectedPillName);

    //check to see if the expanded section is already expanded.
    const alreadyExpanded = pillDetailRef.current.classList.contains(
      "expanded"
    );

    if (!alreadyExpanded) {
      pillDetailRef.current.classList.add("expanded");
    }

    //check to see if data has already been fetched

    const dataAlreadyFetched = Boolean(pillsData[selectedPillName]);
    //if not, then fetch and set the data
    if (!dataAlreadyFetched) {
      setFetchingDetailData(true);
      //the url from which we will get the detail data
      const pillURL = selectedPillRef.current.getAttribute("data-url");
      //The effect entires are divided by language. We just need to find the one that's in english
      const {
        data: { effect_entries },
      } = await axios.get(pillURL);
      const description = effect_entries
        .find((entry) => entry.language.name === "en")
        .effect.split("\n")
        .join(" ");
      setPillsData((prevState) => ({
        ...prevState,
        [selectedPillName]: description,
      }));
      setFetchingDetailData(false);
    }
  };

  const pills = values.map((value) => (
    <Pill
      onClick={onPillClick}
      key={value[acessPoint].name}
      data-url={value[acessPoint].url}
      style={{
        fontSize: "1.6rem",
        borderRadius: "15px",
      }}
    >
      {value[acessPoint].name}
    </Pill>
  ));
  return (
    <Wrapper>
      <PillsWrapper>{pills}</PillsWrapper>
      <PillDetail ref={pillDetailRef}>
        <CloseDetailIcon onClick={closeDetail} />
        {fetchingDetailData ? <Loader /> : null}

        {!fetchingDetailData && selectedPill ? (
          <>
            <h3 style={{ color: "#FF3838", marginBottom: "1.5rem" }}>
              {selectedPill}
            </h3>
            <p style={{ fontSize: "1.8rem" }}>{pillsData[selectedPill]}</p>
          </>
        ) : null}
      </PillDetail>
    </Wrapper>
  );
}

export default DetailSectionData;
