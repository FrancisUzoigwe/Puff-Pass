import { RouterProvider } from "react-router-dom";
import { mainRoute } from "./Router/mainRoute";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./Global/store";
import { Provider } from "react-redux";
const App = () => {
  const persistor = persistStore(store);
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={mainRoute} />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
