/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import DetailPage from '../src/containers/DetailPage';
 
 // Note: test renderer must be required after react-native.
 import renderer from 'react-test-renderer';
 
 it('Detail page renders correctly or not ', () => {
   renderer.create(<DetailPage />).toJSON();
 });
 