import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Esta função liga um ActionCreator com a função dispatch
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';

import {
  Container,
  ProductBox,
  ProductImage,
  ProductText,
  Price,
  ButtonAdd,
  IconView,
  Amount,
  TextButton,
  TextView,
  ProductList,
} from './styles';
import Header from '../../components/Header';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map((product) => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  handleAddProduct(id) {
    const { addToCartRequest, navigation } = this.props;

    addToCartRequest(id, navigation);
  }

  render() {
    const { navigation, amountProduct } = this.props;
    const { products } = this.state;

    return (
      <Container>
        <Header navigation={navigation} />
        <ProductList
          data={products}
          keyExtractor={(product) => product.id.toString()}
          renderItem={({ item }) => (
            <ProductBox>
              <ProductImage
                source={{
                  uri: item.image,
                }}
              />
              <ProductText>{item.title}</ProductText>

              <Price>{item.formattedPrice}</Price>
              <ButtonAdd onPress={() => this.handleAddProduct(item.id)}>
                <IconView>
                  <Icon name="add-shopping-cart" size={20} color="#fff" />
                  <Amount>{amountProduct[item.id] || 0}</Amount>
                </IconView>
                <TextView>
                  <TextButton>Adicionar</TextButton>
                </TextView>
              </ButtonAdd>
            </ProductBox>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  amountProduct: state.cart.reduce((amountObj, product) => {
    // eslint-disable-next-line no-param-reassign
    amountObj[product.id] = product.amount;
    return amountObj;
  }, {}),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);

Home.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
  addToCartRequest: PropTypes.func.isRequired,
  amountProduct: PropTypes.string.isRequired,
};
