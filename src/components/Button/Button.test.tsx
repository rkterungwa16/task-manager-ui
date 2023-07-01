import * as React from "react";
import { shallow } from "enzyme";

import { Button } from "./Button";

describe("Button", () => {
  let wrapper;
  let mockOnClick;

  beforeEach(() => {
    mockOnClick = jest.fn();

    const mockProps = {
      disabled: false,
      color: "#000",
      onClick: mockOnClick,
      text: "Login"
    };

    wrapper = shallow(<Button {...mockProps} />);
  });
  it("should render button with Login text", () => {
    expect(
      wrapper
        .find("button")
        .at(0)
        .text()
    ).toBe("Login");
  });
});
