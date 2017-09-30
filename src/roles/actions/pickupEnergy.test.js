import pickupEnergy from './pickupEnergy';

describe('Roles - Actions - pickupEnergy', () => {
  it('should return false if creep has energy', () => {
    const creep = {
      memory: {
        hasEnergy: true,
      },
    };

    expect(pickupEnergy(creep)).toBe(false);
  });

  it('should return false if droppedEnergy is null', () => {
    const creep = {
      memory: {
        hasEnergy: false,
      },
      pos: {
        findClosestByPath: jest.fn(() => null),
      },
    };

    expect(pickupEnergy(creep)).toBe(false);
  });

  it('should pick up dropped energy', () => {
    const droppedEnergy = { foo: 'bar' };
    const creep = {
      memory: {
        hasEnergy: false,
      },
      pos: {
        findClosestByPath: jest.fn(() => droppedEnergy),
      },
      pickup: jest.fn(),
    };

    expect(pickupEnergy(creep)).toBe(true);
    expect(creep.pickup).toHaveBeenCalledWith(droppedEnergy);
  });

  it('should move towards the resource if not in range', () => {
    const droppedEnergy = { foo: 'bar' };
    const creep = {
      memory: {
        hasEnergy: false,
      },
      pos: {
        findClosestByPath: jest.fn(() => droppedEnergy),
      },
      pickup: jest.fn(() => ERR_NOT_IN_RANGE),
      moveTo: jest.fn(),
    };

    expect(pickupEnergy(creep)).toBe(true);
    expect(creep.pickup).toHaveBeenCalledWith(droppedEnergy);
    expect(creep.moveTo).toHaveBeenCalledWith(droppedEnergy);
  });
});
