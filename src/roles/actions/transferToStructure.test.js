import transferToStructure from './transferToStructure';

describe('Roles - Actions - transferToStructure', () => {
  const fullTower = {
    structureType: STRUCTURE_TOWER,
    energy: 1000,
    energyCapacity: 1000,
  };

  const emptyTower = {
    structureType: STRUCTURE_TOWER,
    energy: 500,
    energyCapacity: 1000,
  };

  it('should return false if no structures are found', () => {
    const creep = {
      pos: {
        findClosestByPath: jest.fn(() => null),
      },
    };

    expect(transferToStructure(creep, STRUCTURE_TOWER)).toBe(false);
  });

  it('should transfer energy to structure', () => {
    const creep = {
      pos: {
        findClosestByPath: jest.fn(() => emptyTower),
      },
      transfer: jest.fn(),
    };

    expect(transferToStructure(creep, STRUCTURE_TOWER)).toBe(true);
    expect(creep.transfer).toHaveBeenCalledWith(emptyTower, RESOURCE_ENERGY);
  });

  it('should move closer to structure if it is not in range', () => {
    const creep = {
      pos: {
        findClosestByPath: jest.fn(() => emptyTower),
      },
      transfer: jest.fn(() => ERR_NOT_IN_RANGE),
      moveTo: jest.fn(),
    };

    expect(transferToStructure(creep, STRUCTURE_TOWER)).toBe(true);
    expect(creep.transfer).toHaveBeenCalledWith(emptyTower, RESOURCE_ENERGY);
    expect(creep.moveTo).toHaveBeenCalledWith(emptyTower);
  });
});
