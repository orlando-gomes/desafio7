import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import Toast from 'react-native-simple-toast';

import api from '../../../services/api';
import { formatPrice } from '../../../util/format';
import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id, navigation }) {
  const productExists = yield select((state) =>
    state.cart.find((p) => p.id === id)
  );
  const stockResponse = yield call(api.get, `/stock/${id}`);

  const stockAmount = stockResponse.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amountWanted = currentAmount + 1;

  if (amountWanted > stockAmount) {
    Toast.showWithGravity(
      'Quantidade solicitada fora de estoque!',
      3000,
      Toast.CENTER
    );
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amountWanted));
  } else {
    const response = yield call(api.get, `/products/${id}`);
    const data = {
      ...response.data,
      amount: 1,
      formattedPrice: formatPrice(response.data.price),
    };
    yield put(addToCartSuccess(data));
    navigation.navigate('Cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stockResponse = yield call(api.get, `/stock/${id}`);
  const stockAmount = stockResponse.data.amount;

  if (amount > stockAmount) {
    Toast.showWithGravity(
      'Quantidade solicitada fora de estoque!',
      3000,
      Toast.CENTER
    );
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
