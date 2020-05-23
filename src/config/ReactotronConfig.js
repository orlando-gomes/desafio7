import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.0.103' })
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  // eslint-disable-next-line no-console
  console.tron = tron;

  // Essa linha limpa minha timeline toda vez que damos
  // refresh na aplicação
  tron.clear();
}
