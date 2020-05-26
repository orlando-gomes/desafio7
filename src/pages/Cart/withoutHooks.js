import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Esta função liga um ActionCreator com a função dispatch
import { bindActionCreators } from 'redux';
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

const Cart = (props) => {
  const {
    navigation,
    cart,
    total,
    updateAmountRequest,
    removeFromCart,
  } = props;

  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
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
                <ButtonDelete onPress={() => removeFromCart(item.id)}>
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
};

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
  updateAmountRequest: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  total: PropTypes.string.isRequired,
};
