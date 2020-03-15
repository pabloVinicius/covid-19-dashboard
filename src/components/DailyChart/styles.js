import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 710px) {
    margin-bottom: 10vw;
  }
`;

export const Scroller = styled.div`
  width: 100vw;
  height: fit-content;

  @media screen and (max-width: 710px) {
    overflow-x: auto;
  }
`;

export const Container = styled.div`
  width: 70vw;
  height: 30vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  @media screen and (max-width: 710px) {
    padding-right: 5vw;
    width: 250vw;
    height: 100vw;
  }
`;

export const Tip = styled.small`
  font-size: 0.85rem;
  color: ${props => props.theme.colors.primary};
  margin-top: 0.5rem;
  line-height: 1.125rem;
  align-self: center;
  text-align: center;

  @media screen and (max-width: 710px) {
    font-size: 3vw;
    margin-top: 1.11vw;
    line-height: 3vw;
  }
`;
