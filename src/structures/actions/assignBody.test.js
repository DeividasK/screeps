import {
  findBiggestCreatableBody,
  creepBodies,
  calculateBodyCost,
} from './assignBody';

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
