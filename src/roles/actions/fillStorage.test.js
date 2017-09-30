import fillStorage from './fillStorage';

describe('Role - Actions - fillStorage', () => {
  it('should return false if storage is undefined', () => {
    const mockCreep = {
      room: {},
    };

    expect(fillStorage(mockCreep)).toBe(false);
  });

  it('should transfer energy if storage is defined', () => {
    const mockCreep = {
      room: {
        storage: {},
      },
      transfer: jest.fn(),
    };

    expect(fillStorage(mockCreep)).toBe(true);
    expect(mockCreep.transfer).toHaveBeenCalledWith(
      mockCreep.room.storage,
      RESOURCE_ENERGY,
    );
  });

  it('should move to storage if it is not in range', () => {
    const mockCreep = {
      room: {
        storage: {},
      },
      transfer: jest.fn(() => ERR_NOT_IN_RANGE),
      moveTo: jest.fn(),
    };

    expect(fillStorage(mockCreep)).toBe(true);
    expect(mockCreep.transfer).toHaveBeenCalledWith(
      mockCreep.room.storage,
      RESOURCE_ENERGY,
    );
    expect(mockCreep.moveTo).toHaveBeenCalledWith(mockCreep.room.storage);
  });
});
