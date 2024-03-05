import App from "@/App";
import { render } from "@testing-library/react";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

describe("<App/>", () => {
  test("Print JSX", () => {
     render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    
  });
});
