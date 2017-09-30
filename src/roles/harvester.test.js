jest.mock('./actions', () => ({
  build: jest.fn(() => false),
  fillStorage: jest.fn(),
  pickupEnergy: jest.fn(() => false),
  harvestEnergy: jest.fn(creep => (creep.memory.hasEnergy ? false : true)),
  transferToStructure: jest.fn(),
}));

import actions from './actions';
import { run } from './harvester';

describe('Role - Harvester - run', () => {
  it('should harvest energy if it does not have it', () => {
    const creep = {
      memory: {
        hasEnergy: false,
      },
      pos: {
        findClosestByPath: jest.fn,
      },
    };

    run(creep);

    expect(actions.harvestEnergy).toHaveBeenCalledWith(creep);
  });

  it('should store energy if there is capacity in spawns or extensions', () => {
    const creep = {
      memory: {
        hasEnergy: true,
      },
      room: {
        energyAvailable: 500,
        energyCapacityAvailable: 1000,
      },
      transfer: jest.fn(),
    };

    run(creep);

    expect(actions.transferToStructure).toHaveBeenCalledWith(
      creep,
      STRUCTURE_SPAWN,
    );
  });

  it('should build construction sites if there is no empty capacity to store energy', () => {
    const creep = {
      memory: {
        hasEnergy: true,
      },
      room: {
        energyAvailable: 1000,
        energyCapacityAvailable: 1000,
      },
    };

    run(creep);

    expect(actions.build).toHaveBeenCalledWith(creep);
  });

  it('should fill storage if there are no construction sites and there is no empty capacity to store energy', () => {
    const creep = {
      memory: {
        hasEnergy: true,
      },
      room: {
        energyAvailable: 1000,
        energyCapacityAvailable: 1000,
      },
    };

    run(creep);

    expect(actions.build).toHaveBeenCalledWith(creep);
  });
});
