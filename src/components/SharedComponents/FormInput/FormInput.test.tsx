import * as React from "react";
import { shallow } from "enzyme";

import { FormInput, InputWrapper } from "./FormInput";

describe("Form Input", () => {
  let wrapper;
  let mockOnChange;

  beforeEach(() => {
    mockOnChange = jest.fn();

    const mockProps = {
      disabled: false,
      name: "text",
      placeholder: "Enter your name",
      onChange: mockOnChange,
      value: "Terungwa Kombol"
    };

    wrapper = shallow(<FormInput {...mockProps} />);
  });
  it("should call onChange when input changes", () => {
    wrapper.find("input").simulate("change");
    expect(mockOnChange).toHaveBeenCalled();
  });

  it("should render input wrapper", () => {
    expect(wrapper.exists(InputWrapper)).toBe(true);
  });

  it("should have expected props", () => {
    expect(wrapper.find({ value: "Terungwa Kombol" })).toHaveLength(1);
    expect(wrapper.find({ name: "text" })).toHaveLength(1);
    expect(wrapper.find({ placeholder: "Enter your name" })).toHaveLength(1);
    expect(wrapper.find({ disabled: false })).toHaveLength(1);
  });
});
