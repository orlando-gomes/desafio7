import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, ButtonLogo, Logo, TextCount, ButtonCart } from './styles';

import logo from '../../assets/logo.png';

export default function Header({ navigation }) {
  const cartSize = useSelector((state) => state.cart.length);

  const goToHome = (nav) => {
    nav.navigate('Home');
  };

  const goToCart = (nav) => {
    nav.navigate('Cart');
  };

  return (
    <Container>
      <ButtonLogo onPress={() => goToHome(navigation)}>
        <Logo source={logo} />
      </ButtonLogo>

      <ButtonCart onPress={() => goToCart(navigation)}>
        <TextCount>{cartSize}</TextCount>
        <Icon name="shopping-basket" size={35} color="#fff" />
      </ButtonCart>
    </Container>
  );
}

Header.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
};
