import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

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

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);

  const amountProduct = useSelector((state) =>
    state.cart.reduce((amountObj, product) => {
      // eslint-disable-next-line no-param-reassign
      amountObj[product.id] = product.amount;
      return amountObj;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map((product) => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id, navigation));
  }

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
            <ButtonAdd onPress={() => handleAddProduct(item.id)}>
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

Home.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
};
