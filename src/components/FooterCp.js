import React from 'react';
import styled, { color } from 'styled';

const Footer = styled.footer`
    padding: 1em;
    text-align: center;
    color: ${color.light};
    background-color: ${color.dark};
`

const FooterCp = () => {
  return (
    <Footer>Copyright &copy;LeeJongHoo</Footer>
  )
}

export default FooterCp