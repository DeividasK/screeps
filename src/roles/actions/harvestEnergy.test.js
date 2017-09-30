import harvestEnergy from './harvestEnergy';

describe('Role - Actions - harvestEnergy', () => {
  it('should return false if creep already has energy', () => {
    const creep = {
      memory: {
        hasEnergy: true,
      },
    };

    expect(harvestEnergy(creep)).toBe(false);
  });

  it('should return false if no sources are found', () => {
    const creep = {
      memory: {
        hasEnergy: false,
      },
      pos: {
        findClosestByPath: jest.fn(() => null),
      },
    };

    expect(harvestEnergy(creep)).toBe(false);
  });

  it('should call creep harvest with source', () => {
    const source = { foo: 'bar' };
    const creep = {
      memory: {
        hasEnergy: false,
      },
      pos: {
        findClosestByPath: jest.fn(() => source),
      },
      harvest: jest.fn(),
    };

    expect(harvestEnergy(creep)).toBe(true);
    expect(creep.harvest).toHaveBeenCalledWith(source);
  });

  it('should move towards the source if not in range', () => {
    const source = { foo: 'bar' };
    const creep = {
      memory: {
        hasEnergy: false,
      },
      pos: {
        findClosestByPath: jest.fn(() => source),
      },
      harvest: jest.fn(() => ERR_NOT_IN_RANGE),
      moveTo: jest.fn(),
    };

    expect(harvestEnergy(creep)).toBe(true);
    expect(creep.harvest).toHaveBeenCalledWith(source);
    expect(creep.moveTo).toHaveBeenCalledWith(source);
  });
});
