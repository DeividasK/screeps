import {
  findBiggestCreatableBody,
  calculateBodyCost,
  getAvailableEnergy,
  assignBody,
} from './assignBody';

describe('getAvailableEnergy', () => {
  it('if urgent should return smallest body cost if energy is less than that.', () => {
    const fakeSpawn = {
      energy: 50,
      energyCapacity: 300,
      room: {
        energyAvailable: 50,
      },
    };

    expect(getAvailableEnergy(fakeSpawn, true)).toEqual(200);
  });

  it('Role: harvester. should return max spawn capacity + energy available in extensions', () => {
    const fakeSpawn = {
      energy: 50,
      energyCapacity: 300,
      room: {
        energyAvailable: 250,
      },
    };

    expect(getAvailableEnergy(fakeSpawn, true)).toEqual(250);
  });

  it('Role: others. Should return ', () => {
    const fakeSpawn = {
      room: {
        energyCapacityAvailable: 800,
      },
    };

    expect(getAvailableEnergy(fakeSpawn)).toEqual(800);
  });
});

describe('calculateBodyCost', () => {
  it('should return the energy cost of the body parts array', () => {
    const bodyCost1 = calculateBodyCost([WORK, CARRY, MOVE]);
    expect(bodyCost1).toBe(200);

    const bodyCost2 = calculateBodyCost([
      WORK,
      WORK,
      CARRY,
      CARRY,
      CARRY,
      CARRY,
      MOVE,
      MOVE,
    ]);
    expect(bodyCost2).toBe(500);
  });
});

describe('findBiggestCreatableBody', () => {
  it('should return the biggest body for the available energy', () => {
    expect(findBiggestCreatableBody(500, [WORK, MOVE, CARRY])).toEqual([
      WORK,
      MOVE,
      CARRY,
      WORK,
      MOVE,
      CARRY,
      WORK,
    ]);
    expect(findBiggestCreatableBody(505, [WORK, MOVE, CARRY])).toEqual([
      WORK,
      MOVE,
      CARRY,
      WORK,
      MOVE,
      CARRY,
      WORK,
    ]);
  });

  it('should return the smallest body if energy is minimal', () => {
    expect(findBiggestCreatableBody(200, [WORK, MOVE, CARRY])).toEqual([
      WORK,
      MOVE,
      CARRY,
    ]);
  });
});
