import withdrawEnergy from './withdrawEnergy';

describe('Roles - Actions - withdrawEnergy', () => {
  it('should return false if creep has energy', () => {
    const creep = {
      memory: {
        hasEnergy: true,
      },
    };

    expect(withdrawEnergy(creep)).toBe(false);
  });
  it('should return false if there is no storage in the room', () => {
    const creep = {
      memory: {
        hasEnergy: false,
      },
      room: {},
    };

    expect(withdrawEnergy(creep)).toBe(false);
  });

  it('should return false if storage does not have enough energy to fill the creep', () => {
    const creep = {
      memory: {
        hasEnergy: false,
      },
      room: {
        storage: {
          store: {
            energy: 200,
          },
        },
      },
      carryCapacity: 500,
    };

    expect(withdrawEnergy(creep)).toBe(false);
  });

  it('should call withdraw method on the creep', () => {
    const creep = {
      memory: {
        hasEnergy: false,
      },
      room: {
        storage: {
          store: {
            energy: 500,
          },
        },
      },
      carryCapacity: 500,
      withdraw: jest.fn(),
    };

    expect(withdrawEnergy(creep)).toBe(true);
    expect(creep.withdraw).toHaveBeenCalledWith(
      creep.room.storage,
      RESOURCE_ENERGY,
    );
  });

  it('should move to the storage if it is not in range', () => {
    const creep = {
      memory: {
        hasEnergy: false,
      },
      room: {
        storage: {
          store: {
            energy: 500,
          },
        },
      },
      carryCapacity: 500,
      withdraw: jest.fn(() => ERR_NOT_IN_RANGE),
      moveTo: jest.fn(),
    };

    expect(withdrawEnergy(creep)).toBe(true);
    expect(creep.withdraw).toHaveBeenCalledWith(
      creep.room.storage,
      RESOURCE_ENERGY,
    );
    expect(creep.moveTo).toHaveBeenCalledWith(creep.room.storage);
  });
});
