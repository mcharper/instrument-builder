import {createStore, applyMiddleware,compose} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

export default function configureStore() {
  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }) : compose;

    const enhancer = composeEnhancers(
      applyMiddleware(thunk),
      // other store enhancers if any
    );

  const store = createStore(rootReducer, enhancer);

  return store;

  // return createStore(
  //   rootReducer,
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  //   applyMiddleware(...thunk)
  // );
}

