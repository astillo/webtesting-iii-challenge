// Test away!
import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import { render, fireEvent } from "@testing-library/react";

import Controls from "./Controls";

describe("<Controls />", () => {
    // 2. write this test
    it("matches snapshot", () => {
        const tree = renderer.create(<Controls />); // generates a DOM tree


        expect(tree.toJSON()).toMatchSnapshot();
    });
    it('displays locked when lock is clicked', () => {
        const lock = jest.fn()
        let lockedMock = ''
        let state = { open: true, closed: false, locked: false }
        const { container } = render(<Controls {...state} />)
        expect(container.getElementsByTagName('button')[0].disabled).toBe(true)
        expect(container.getElementsByTagName('button')[1].disabled).toBe(false)
    })
})