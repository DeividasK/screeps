import {
  findBiggestCreatableBody,
  creepBodies,
  calculateBodyCost,
  getAvailableEnergy,
} from './assignBody';

describe('getAvailableEnergy', () => {
  it('Role: harvester. should return max spawn capacity + energy available in extensions', () => {
    const fakeSpawn = {
      energy: 50,
      energyCapacity: 300,
      room: {
        energyAvailable: 200,
      },
    };

    expect(getAvailableEnergy(fakeSpawn, 'harvester')).toEqual(450);
  });

  it('Role: others. Should return ', () => {
    const fakeSpawn = {
      room: {
        energyCapacityAvailable: 800,
      },
    };

    expect(getAvailableEnergy(fakeSpawn, 'upgrader')).toEqual(800);
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
  it('should return the biggest body if energy is unlimited', () => {
    expect(findBiggestCreatableBody(123456)).toBe(creepBodies[0]);
  });

  it('should return the smallest body if energy is minimal', () => {
    expect(findBiggestCreatableBody(200)).toBe(
      creepBodies[creepBodies.length - 1],
    );
  });
});
