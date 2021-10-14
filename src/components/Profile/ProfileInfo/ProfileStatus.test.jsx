import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  //pass
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="STATUS TEXT" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("STATUS TEXT");
  });

  //pass
  test("after creation <p> with status should be displayed", () => {
    const component = create(<ProfileStatus status="STATUS TEXT" />);
    const root = component.root;
    let p = root.findByType("p");
    expect(p).not.toBeNull();
  });
  //pass
  test("after creation <input> shouldn`t be displayed", () => {
    const component = create(<ProfileStatus status="STATUS TEXT" />);
    const root = component.root;
    expect(() => {
      let input = root.findByTyinpute("input");
    }).toThrow();
  });
  //pass
  test("after creation <p> should contains correct status", () => {
    const component = create(<ProfileStatus status="STATUS TEXT" />);
    const root = component.root;
    let p = root.findByType("p");
    expect(p.children[0]).toBe("STATUS TEXT");
  });

  //pass
  test("input should be displayed in editMode instead of span", () => {
    const component = create(<ProfileStatus status="STATUS TEXT" />);
    const root = component.root;
    let p = root.findByType("p");
    p.props.onDoubleClick();
    let input = root.findByType("input");
    expect(input.props.value).toBe("STATUS TEXT");
  });

  //pass
  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(
      <ProfileStatus status="STATUS TEXT" updateStatus={mockCallback} />
    );
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
