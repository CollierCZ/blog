import React from "react";
import styled from "styled-components";
import { titleCase } from "../utilities/CaseHelpers";

import Heading from "@kiwicom/orbit-components/lib/Heading";
import { useSiteMetadata } from "../hooks/use-metadata";

const StyledHeading = styled("div")`
  text-shadow: 1px 1px #000;
`;

export const PurePageTitle = ({ text, siteMetadata }) => {
  text = text ? titleCase(text) : null;
  return (
    <StyledHeading>
      <Heading element="h1" type="display" inverted>
        {text ? text : siteMetadata.elements.title.value}
      </Heading>
    </StyledHeading>
  );
};

export const PageTitle = ({ text }) => {
  const siteMetadata = useSiteMetadata();
  return <PurePageTitle text={text} siteMetadata={siteMetadata} />;
};

export default PageTitle;
