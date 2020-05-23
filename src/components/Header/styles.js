import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

export const ButtonLogo = styled(RectButton)`
  height: 27px;
  margin-bottom: -5px;
`;

export const ButtonCart = styled(RectButton)``;

export const Logo = styled.Image`
  /*
  width: 275px;
  height: 36px;
*/
  width: 210px;
  height: 27px;
`;

export const TextCount = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  background: #7159c1;
  margin-left: 20px;
  margin-bottom: -16px;
  width: 20px;
  text-align: center;
  border-radius: 10px;
  z-index: 1;
`;
