import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { lighten } from 'polished';

export const Container = styled.View`
  flex: 1;
  background: #202020;
  padding: 30px;
  flex-direction: column;
`;

export const ProductBox = styled.View`
  background: #fff;
  min-height: 320px;
  width: 220px;
  border-radius: 8px;
  padding: 20px;
  align-self: center;
  margin-bottom: 25px;
`;

export const ProductImage = styled.Image`
  width: 170px;
  height: 150px;
  border-radius: 32px;
  background: #eee;
  align-self: center;
`;

export const ProductText = styled.Text`
  color: #777;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Price = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const ButtonAdd = styled(RectButton).attrs({
  rippleColor: lighten(0.2, '#7159c1'),
})`
  background: #7159c1;
  flex-direction: row;
  height: 40px;
  border-radius: 6px;
  align-self: stretch;
`;

export const IconView = styled.View`
  background: rgba(0, 0, 0, 0.2);
  flex-direction: row;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
  align-items: center;
  padding-left: 5px;
  padding-right: 10px;
  width: 53px;
  justify-content: space-between;
`;

export const TextView = styled.View`
  flex-grow: 1;
  flex-direction: row;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
  align-items: center;
  padding-left: 5px;
  padding-right: 10px;
  width: 53px;
  justify-content: center;
`;

export const Amount = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
`;
export const TextButton = styled.Text`
  color: #fff;
  font-size: 20px;
  justify-content: center;
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  align-self: center;
`;
