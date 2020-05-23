import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, ButtonLogo, Logo, TextCount, ButtonCart } from './styles';

import logo from '../../assets/logo.png';

const Header = ({ cartSize, navigation }) => {
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
};

const mapStateToProps = (state) => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  cartSize: PropTypes.number.isRequired,
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
};
