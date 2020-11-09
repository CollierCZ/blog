import React from "react";
import styled from "styled-components";

import Heading from "@kiwicom/orbit-components/lib/Heading";
import { useSiteMetadata } from "../hooks/use-metadata";

const StyledHeading = styled("div")`
  text-shadow: 1px 1px #000;
`;

const PageDescription = ({ text }) => {
  const siteMetadata = useSiteMetadata();

  return (
    <StyledHeading>
      <Heading element="h2" type="displaySubtitle" inverted>
        {text ? text : siteMetadata.elements.metadata__description.value}
      </Heading>
    </StyledHeading>
  );
};

export default PageDescription;
