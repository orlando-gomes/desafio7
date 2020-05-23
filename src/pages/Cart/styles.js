import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #202020;
  padding: 30px;
  flex-direction: column;
`;

export const CartList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  align-self: center;
  background: #fff;
  width: 300px;
  border-radius: 8px;
`;

export const ProductBox = styled.View`
  width: 300px;
  border-radius: 8px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  align-self: center;
`;

export const ProductView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 70px;
  border-radius: 32px;
  background: #eee;
  align-self: center;
`;

export const TextPriceView = styled.View`
  width: 150px;
  padding-left: 10px;
`;

export const ProductText = styled.Text`
  font-size: 15px;
  color: #777;
  text-transform: capitalize;
`;

export const Price = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const IconView = styled.View`
  width: 30px;
`;

export const SubtotalView = styled.View`
  background: #eee;
  padding: 6px;
  border-radius: 8px;
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ControlsView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Amount = styled.TextInput.attrs({
  editable: false,
  height: 30,
  width: 60,
})`
  background: #fff;
  color: #aaa;
  padding-bottom: 5px;
  font-size: 15px;
  font-weight: bold;
`;

export const Subtotal = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const TotalView = styled.View`
  width: 300px;
  padding: 20px;
  flex-direction: column;
  align-items: center;
`;

export const LabelTotal = styled.Text`
  color: #999;
  font-size: 20px;
`;

export const Total = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const ButtonDecrease = styled(RectButton)``;
export const ButtonIncrease = styled(RectButton)``;
export const ButtonDelete = styled(RectButton)``;

export const ButtonClose = styled(RectButton)`
  background: #7159c1;
  height: 50px;
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;
