import * as React from "react";
import { shallow, mount } from "enzyme";

import { Tooltip, TooltipItem } from "./Tooltip";

describe("Tooltip", () => {
  let wrapper;
  let mockOnMouseLeave;
  let mockOnMouseEnter;
  beforeEach(() => {
    mockOnMouseEnter = jest.fn();
    mockOnMouseLeave = jest.fn();
    const mockProps = {
      text: "Add Task",
      children: {}
    };
    wrapper = shallow(<Tooltip {...mockProps} />);
  });

  it("should render TooltipItem component", () => {
    expect(wrapper.find(TooltipItem)).toHaveLength(1);
  });

  // it("should call onMouseEnter when cursor points on Tooltip component", () => {
  //   wrapper.find("div").simulate("mouseleave");
  //   expect(mockOnMouseEnter).toHaveBeenCalled();
  // });
});
