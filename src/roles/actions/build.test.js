import build from './build';

describe('Role - Actions - build', () => {
  it('should return if there are no construction sites', () => {
    const mockCreep = {
      pos: {
        findClosestByPath: jest.fn(),
      },
    };
    expect(build(mockCreep)).toBeUndefined();
  });

  it('should try to build the construction site that is found', () => {
    const mockConstructionSite = { foo: 'bar' };
    const mockCreep = {
      build: jest.fn(),
      pos: {
        findClosestByPath: jest.fn(() => mockConstructionSite),
      },
    };
    build(mockCreep);
    expect(mockCreep.build).toHaveBeenCalledWith(mockConstructionSite);
  });

  it('should move towards the construction site if it is not in range', () => {
    const mockConstructionSite = { foo: 'bar' };
    const mockCreep = {
      build: jest.fn(() => ERR_NOT_IN_RANGE),
      moveTo: jest.fn(),
      pos: {
        findClosestByPath: jest.fn(() => mockConstructionSite),
      },
    };
    build(mockCreep);
    expect(mockCreep.build).toHaveBeenCalledWith(mockConstructionSite);
    expect(mockCreep.moveTo).toHaveBeenCalledWith(mockConstructionSite);
  });
});
