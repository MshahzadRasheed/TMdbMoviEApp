/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import Home from '../src/containers/Home/index';
 
 // Note: test renderer must be required after react-native.
 import { create } from "react-test-renderer";
 
 describe("List of movies to be printed", () => {
    test("it shows the expected movies list  when goto page (testing the limited amount of data!)", () => {
      const component = create(<Home data="no of data" />);
      const instance = component.getInstance();
      expect(instance.state.data).toBe("");
    });
  });