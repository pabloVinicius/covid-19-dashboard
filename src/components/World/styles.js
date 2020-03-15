import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const Tip = styled.small`
  font-size: 0.85rem;
  color: ${props => props.theme.colors.primary};
  margin-top: 0.5rem;
  line-height: 1.125rem;
  align-self: center;
  text-align: center;
`;

export const CountryStats = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 1rem;
  }

  h5 {
    font-size: 1.25rem;
    font-weight: 600;
  }
`;
