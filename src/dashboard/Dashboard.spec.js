// Test away// Test away!
import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import { render, fireEvent } from "@testing-library/react";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
    // 2. write this test
    it("matches snapshot", () => {
        const tree = renderer.create(<Dashboard />); // generates a DOM tree

        // snapshots are a JSON representation of the DOM tree
        expect(tree.toJSON()).toMatchSnapshot();
    });
    // it('displays locked when lock is clicked', () => {
    //     const lock = jest.fn()
    //     let lockedMock = ''
    //     let state = { open: true, closed: false, locked: false }
    //     const { container } = render(<Dashboard />)
    //     expect(container.getElementsByTagName('button')[0].disabled).toBe(true)
    //     expect(container.getElementsByTagName('button')[1].disabled).toBe(false)
    // })
})