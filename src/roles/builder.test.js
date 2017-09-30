jest.mock('./actions', () => ({
  withdrawEnergy: jest.fn(() => true),
}));

import { run } from './builder';
import actions from './actions';

describe('Roles - Builder', () => {
  it('should withdraw energy if there are construction sites', () => {
    const constructionSite = { foo: 'bar' };
    const creep = {
      room: {
        find: jest.fn(() => constructionSite),
      },
    };
    run(creep);
    expect(actions.withdrawEnergy).toHaveBeenCalledWith(creep);
  });
});
