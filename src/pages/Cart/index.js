import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  ProductBox,
  CartList,
  ProductImage,
  ProductView,
  TextPriceView,
  ProductText,
  Price,
  IconView,
  Amount,
  SubtotalView,
  Subtotal,
  ControlsView,
  TotalView,
  LabelTotal,
  Total,
  ButtonClose,
  TextButton,
  ButtonDecrease,
  ButtonIncrease,
  ButtonDelete,
} from './styles';
import Header from '../../components/Header';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

export default function Cart({ navigation }) {
  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );
  const total = useSelector((state) =>
    formatPrice(
      state.cart.reduce((totalPrice, product) => {
        return totalPrice + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <Header navigation={navigation} />
      <CartList
        data={cart}
        keyExtractor={(cartItem) => cartItem.id.toString()}
        renderItem={({ item }) => (
          <ProductBox>
            <ProductView>
              <ProductImage
                source={{
                  uri: item.image,
                }}
              />
              <TextPriceView>
                <ProductText>{item.title}</ProductText>
                <Price>{item.formattedPrice}</Price>
              </TextPriceView>
              <IconView>
                <ButtonDelete
                  onPress={() => dispatch(CartActions.removeFromCart(item.id))}
                >
                  <Icon name="delete-forever" size={35} color="#7159c1" />
                </ButtonDelete>
              </IconView>
            </ProductView>
            <SubtotalView>
              <ControlsView>
                <ButtonDecrease onPress={() => decrement(item)}>
                  <Icon
                    name="remove-circle-outline"
                    size={25}
                    color="#7159c1"
                  />
                </ButtonDecrease>

                <Amount value={item.amount.toString()} />
                <ButtonIncrease onPress={() => increment(item)}>
                  <Icon name="add-circle-outline" size={25} color="#7159c1" />
                </ButtonIncrease>
              </ControlsView>

              <Subtotal>{item.subtotal}</Subtotal>
            </SubtotalView>
          </ProductBox>
        )}
        ListFooterComponent={() => (
          <TotalView>
            <LabelTotal>TOTAL</LabelTotal>
            <Total>{total}</Total>
            <ButtonClose>
              <TextButton>FINALIZAR PEDIDO</TextButton>
            </ButtonClose>
          </TotalView>
        )}
      />
      {/* End of CartList */}
    </Container>
  );
}

Cart.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
};
