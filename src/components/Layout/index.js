import React, { useState, useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';

import {
  Container,
  TopBar,
  Link,
  Numbers,
  Content,
  Header,
  Footer,
  FooterLine,
} from './styles';

const Layout = ({ children }) => {
  const [checked, setChecked] = useState(false);
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <Header>
        <TopBar>
          <div>
            <Link selected to="/">
              World stats
            </Link>
            <Link to="/">Daily evolution</Link>
          </div>
          <div>
            Light
            <Switch
              checkedIcon={false}
              uncheckedIcon={false}
              className="switcher"
              onChange={value => setChecked(value)}
              checked={checked}
              onColor="#777777"
              offColor="#e8e8e8"
            />
            Dark
          </div>
        </TopBar>
        <h1>COVID-19 Information Tracker</h1>
        <Numbers>
          <div>
            <h3>150.000</h3>
            <small>Confirmed</small>
          </div>
          <div>
            <h3>150.000</h3>
            <small>Recovered</small>
          </div>
          <div>
            <h3>150.000</h3>
            <small>Deaths</small>
          </div>
        </Numbers>
      </Header>
      <Content>{children}</Content>
      <Footer>
        <FooterLine>
          <p>Developed by Pablo Cruz</p>
          <a
            href="https://www.linkedin.com/in/pablo-cruz-17901a177/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin size={24} color={colors.primary} />
          </a>
          <a
            href="https://github.com/pabloVinicius/covid-19-dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub size={20} color={colors.primary} />
          </a>
        </FooterLine>
      </Footer>
    </Container>
  );
};

export default Layout;
