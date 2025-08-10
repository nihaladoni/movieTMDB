import styled from 'styled-components'

export const CategoryContainer = styled.div<{
  isSelected: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isSelected }) => (isSelected ? '#b269f6' : '#fafafa')};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#000')};
  border-radius: 40px;
  height: 30px;
  width: max-content;
  padding: 0px 16px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`
export const Summary = styled.summary`
  cursor: pointer;
  user-select: none;

  div {
    user-select: none;
  }

  &::-webkit-details-marker {
    display: none;
  }
  &::marker {
    content: '';
  }
`
