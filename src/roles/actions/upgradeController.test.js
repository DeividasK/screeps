import upgradeController from './upgradeController';

describe('upgradeController', () => {
  it('should upgrade the controller', () => {
    const controller = { foo: 'bar' };
    const creep = {
      room: {
        controller,
      },
      upgradeController: jest.fn(),
    };

    expect(upgradeController(creep)).toBe(true);
    expect(creep.upgradeController).toHaveBeenCalledWith(controller);
  });

  it('should move towards the controller if it is not in range', () => {
    const controller = { foo: 'bar' };
    const creep = {
      room: {
        controller,
      },
      upgradeController: jest.fn(() => ERR_NOT_IN_RANGE),
      moveTo: jest.fn(),
    };

    expect(upgradeController(creep)).toBe(true);
    expect(creep.upgradeController).toHaveBeenCalledWith(controller);
    expect(creep.moveTo).toHaveBeenCalledWith(controller);
  });
});
