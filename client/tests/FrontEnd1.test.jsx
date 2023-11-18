import { render, screen, cleanup } from "@testing-library/react";
import {
  CreateDog,
  Detail,
  Home,
  Landing,
} from "../src/components/index.components";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// FRONT END 1 TESTS: BASIC

function SimulatedMain(param) {
  const { element } = param;
  let simulatedRouter = createBrowserRouter([
    {
      path: "*",
      element: element,
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={simulatedRouter} />
    </Provider>
  );
}

describe("FRONT END BASIC TESTS", () => {
  afterEach(cleanup);
  it("Landing component must exist and render at least one image", () => {
    render(<SimulatedMain element={<Landing />}></SimulatedMain>);
    expect(screen.getAllByRole("img").length).toBeGreaterThan(0);
  });
  it("Detail page must exist and render the required info: image, weight, height, temperament, life expectancy, name and ID", () => {
    render(<SimulatedMain element={<Detail />} />);
    expect(screen.getAllByRole("heading").length).toBeGreaterThan(0);
    screen.getByText("Height:");
    screen.getByText("Weight:");
    screen.getByText("ID:");
    screen.getByText("Life expectancy:");
    screen.getByText("Temperaments:");
    expect(screen.getAllByRole("img").length).toBeGreaterThan(0);
  });
  it("Create component must exist and have a form rendered on It", () => {
    render(<SimulatedMain element={<CreateDog />}></SimulatedMain>);
    screen.getByRole("form");
  });
  it("Home component must exist and have at least an image rendered", () => {
    render(<SimulatedMain element={<Home />} />);
    expect(screen.getAllByRole("img").length).toBeGreaterThan(0);
  });
});
describe("HOME COMPONENT", () => {
  it("Home must have at least: one text input working as searchBar, two buttons and two inputs", () => {
    render(<SimulatedMain element={<Home />} />);
    screen.getByRole("textbox");
    expect(screen.getAllByRole("option").length).toBeGreaterThan(1);
    expect(screen.getAllByRole("button").length).toBeGreaterThan(1);
  });
});
