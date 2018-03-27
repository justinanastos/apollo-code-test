// @flow
/* eslint-env jest */
import main from '../main';

describe('main', () => {
  it('should run without crashing', () => {
    expect(() => main()).not.toThrow();
  });
});
