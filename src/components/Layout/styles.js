import styled, { keyframes } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  animation: ${fadeIn} 300ms ease-in;

  h1 {
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
    line-height: 3.6875rem;
    font-size: 3rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  @media screen and (max-width: 710px) {
    padding: 0 4.44vw;
    h1 {
      font-size: 5.88vw;
      line-height: 8.88vw;
      margin-top: 6.66vw;
      margin-bottom: 8.88vw;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 1rem;

  @media screen and (max-width: 710px) {
    margin-bottom: 8.88vw;
  }
`;

export const TopBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: fit-content;
  padding: 2em 7.125rem 1em;
  color: ${props => props.theme.colors.text};

  & > div {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    line-height: 1.5rem;

    & > [class~='switcher'] {
      margin: 0 1em;
    }
  }

  @media screen and (max-width: 710px) {
    padding: 4.44vw 0;

    & > div {
      font-size: 4.44vw;
      line-height: 4.44vw;
      & > [class~='switcher'] {
        margin: 0;

        & svg {
          margin-left: 2px;
          position: absolute;
          top: 2px;
        }
      }
    }
  }
`;

export const Link = styled(RouterLink)`
  font-size: inherit;
  line-height: inherit;
  text-decoration: none;
  font-weight: ${props => (props.selected ? '600' : 'unset')};
  color: ${props =>
    props.selected ? props.theme.colors.primary : props.theme.colors.text};

  :first-of-type {
    ::after {
      content: '|';
      margin: 0 1rem;
    }
  }

  @media screen and (max-width: 710px) {
    :first-of-type {
      ::after {
        content: '|';
        margin: 0 2.22vw;
      }
    }
  }
`;

export const Numbers = styled.div`
  display: flex;
  align-items: center;
  transition: all 0s !important;

  & > div {
    :not(:last-of-type) {
      margin-right: 5rem;
    }
    transition: all 0s !important;

    display: flex;
    flex-direction: column;
    align-items: center;

    :nth-child(1) {
      color: #e60000;
    }

    :nth-child(2) {
      color: #70a800;
    }

    :nth-child(3) {
      color: ${props => props.theme.colors.deaths};
      transition: all 0s !important;
    }

    & > h3 {
      transition: all 0s !important;
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 1.8125rem;
      color: inherit;
    }

    & > small {
      font-weight: 500;
      font-size: 1.25rem;
      color: ${props => props.theme.colors.text};
      line-height: 1.5rem;
    }
  }

  @media screen and (max-width: 710px) {
    & > div {
      :not(:last-of-type) {
        margin-right: 10vw;
      }

      & > h3 {
        font-size: 5.55vw;
        line-height: 5.55vw;
      }

      & > small {
        font-size: 4.44vw;
        line-height: 4.44vw;
      }
    }
  }
`;
export const Content = styled.div`
  display: block;
  flex: 1;
  width: 100%;
`;

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0.5rem 1rem 0;
  margin-bottom: 0.75rem;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  @media screen and (max-width: 710px) {
    padding: 0;
    margin-bottom: 4.44vw;
    flex-direction: column;
    align-items: center;
    justify-content: unset;

    & > div {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const FooterLine = styled.div`
  display: flex;
  color: ${props => props.theme.colors.text};
  align-items: center;

  & > p {
    font-size: 1rem;
    line-height: 1.25rem;
    margin-right: 1rem;
  }

  & > a {
    cursor: pointer;
    :not(:last-of-type) {
      margin-right: 0.5rem;
    }
  }
  @media screen and (max-width: 710px) {
    flex-direction: column;

    & > p {
      font-size: 3vw;
      line-height: 3vw;
      margin-right: 1.11vw;
      text-align: center;
    }

    & > div {
      order: -1;
    }

    & > a {
      cursor: pointer;
      :not(:last-of-type) {
        margin-right: 0.6vw;
      }
    }
  }
`;

export const LastUpdated = styled.small`
  color: ${props => props.theme.colors.text};
  margin-top: 0.5rem;
  text-align: center;
  font-size: 1rem;
  line-height: 1.25rem;
  margin-right: 1rem;

  @media screen and (max-width: 710px) {
    margin-top: 0;
    font-size: 3vw;
    line-height: 3vw;
    margin-right: 0;
    margin-bottom: 2vw;
  }
`;
