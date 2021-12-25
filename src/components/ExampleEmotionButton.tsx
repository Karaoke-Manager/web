/**
 * This file shows an example on how to use emotions.
 * TODO: How does this work with material ui components?
 * TODO: How to access the MUI theme variables?
 */
import styled from '@emotion/styled';


interface IButtonProps {
    backgroundColor: string;
}

const Button = styled.button<IButtonProps>`
  padding: 32px;
  background-color: ${(props) => props.backgroundColor};
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;

  &:hover {
    color: white;
  }
`;

/**
 * Example Emotion Button
 */
export default function ExampleEmotionButton() {
    return <Button backgroundColor="green">This my button component.</Button>;
}
