import transferToStructure from './transferToStructure';

describe('Roles - Actions - transferToStructure', () => {
  it('should return false if not structures are found', () => {
    const creep = {
      pos: {
        findClosestByPath: jest.fn(() => null),
      },
    };

    expect(transferToStructure(creep, STRUCTURE_TOWER)).toBe(false);
  });

  it('should transfer energy to structure', () => {
    const structure = { foo: 'bar' };
    const creep = {
      pos: {
        findClosestByPath: jest.fn(() => structure),
      },
      transfer: jest.fn(),
    };

    expect(transferToStructure(creep, STRUCTURE_TOWER)).toBe(true);
    expect(creep.transfer).toHaveBeenCalledWith(structure, RESOURCE_ENERGY);
  });

  it('should move closer to structure if it is not in range', () => {
    const structure = { foo: 'bar' };
    const creep = {
      pos: {
        findClosestByPath: jest.fn(() => structure),
      },
      transfer: jest.fn(() => ERR_NOT_IN_RANGE),
      moveTo: jest.fn(),
    };

    expect(transferToStructure(creep, STRUCTURE_TOWER)).toBe(true);
    expect(creep.transfer).toHaveBeenCalledWith(structure, RESOURCE_ENERGY);
    expect(creep.moveTo).toHaveBeenCalledWith(structure);
  });
});
