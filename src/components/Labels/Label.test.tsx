import * as React from "react";
import { shallow, mount } from "enzyme";

import { Labels } from "./Labels";

describe("Form Input", () => {
  let wrapper;
  beforeEach(() => {
    const mockProps = {
      text: "Login"
    };
    wrapper = shallow(<Labels {...mockProps} />);
  });

  it("should render label", () => {
    expect(wrapper.exists("label")).toEqual(true);
  });
});
