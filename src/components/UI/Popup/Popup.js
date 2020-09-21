import React from "react";

import { OuterWrapper, ContentWrapper, CloseIcon } from "./styles";

function Popup({ content, onIconClick }) {
  return (
    <OuterWrapper>
      <ContentWrapper>
        <CloseIcon onClick={onIconClick} />
        {content}
      </ContentWrapper>
    </OuterWrapper>
  );
}

export default Popup;
