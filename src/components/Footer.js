import styled from 'styled-components'
import React from "react"
import { Text, TextLink } from '@kiwicom/orbit-components'

const FooterContainer = styled.footer`
  margin: 1rem 0 0;
`

const Footer = ({author}) => {
  return (
    <FooterContainer><Text type="secondary">
        &copy; 2018&ndash;{new Date().getFullYear()}{" "}{author}. Powered by <TextLink
  href="https://www.gatsbyjs.org/"
  type="secondary"
>Gatsby</TextLink> and <TextLink
  href="https://kontent.ai"
  type="secondary"
>Kentico Kontent</TextLink>.</Text>
    </FooterContainer>
  );
}

export default Footer;
