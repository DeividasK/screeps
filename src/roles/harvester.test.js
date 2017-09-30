jest.mock('actions', () => ({
  storeEnergy: jest.fn(),
}));

jest.mock('./actions', () => ({
  build: jest.fn(() => false),
  fillStorage: jest.fn(),
  pickupEnergy: jest.fn(() => false),
  harvestEnergy: jest.fn(creep => (creep.memory.hasEnergy ? false : true)),
}));

import actions from 'actions';
import Actions from './actions';
import { run } from './harvester';

describe('Role - Harvester - run', () => {
  it('should harvest energy if it does not have it', () => {
    const mockCreep = {
      memory: {
        hasEnergy: false,
      },
      pos: {
        findClosestByPath: jest.fn,
      },
    };

    run(mockCreep);

    expect(Actions.harvestEnergy).toHaveBeenCalledWith(mockCreep);
  });

  it('should store energy if there is capacity in spawns or extensions', () => {
    const mockCreep = {
      memory: {
        hasEnergy: true,
      },
      room: {
        energyAvailable: 500,
        energyCapacityAvailable: 1000,
      },
    };

    run(mockCreep);

    expect(actions.storeEnergy).toHaveBeenCalledWith(mockCreep);
  });

  it('should build construction sites if there is no empty capacity to store energy', () => {
    const mockCreep = {
      memory: {
        hasEnergy: true,
      },
      room: {
        energyAvailable: 1000,
        energyCapacityAvailable: 1000,
      },
    };

    run(mockCreep);

    expect(Actions.build).toHaveBeenCalledWith(mockCreep);
  });

  it('should fill storage if there are no construction sites and there is no empty capacity to store energy', () => {
    const mockCreep = {
      memory: {
        hasEnergy: true,
      },
      room: {
        energyAvailable: 1000,
        energyCapacityAvailable: 1000,
      },
    };

    run(mockCreep);

    expect(Actions.build).toHaveBeenCalledWith(mockCreep);
  });
});