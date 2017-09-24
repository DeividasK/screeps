import { canBuild } from './canBuild';

describe('canBuild', () => {
  it('should return false if allowed amount for structure type is 0', () => {
    const fakeGame = {
      controller: {
        level: 1,
      },
    };
    const allowed = canBuild(fakeGame, STRUCTURE_EXTENSION);
    expect(allowed).toBeFalsy();
  });

  it('should return false if existing structures amount is the same as allowed structures amount', () => {
    const fakeGame = {
      controller: {
        level: 2,
      },
      find: jest.fn(() => [1, 2, 3, 4, 5]),
    };
    const allowed = canBuild(fakeGame, STRUCTURE_EXTENSION);
    expect(allowed).toBeFalsy();
  });

  it('should return false if the sum of existing structures and construction sites for the specified structure type is equal to the allowed amount', () => {
    const fakeGame = {
      controller: {
        level: 2,
      },
      find: jest.fn(type => {
        if (type === FIND_MY_STRUCTURES) {
          return [1];
        }
        return [1, 2, 3, 4];
      }),
    };
    const allowed = canBuild(fakeGame, STRUCTURE_EXTENSION);
    expect(allowed).toBeFalsy();
  });

  it('should return an amount of structure that can be built for the specified structure type', () => {
    const fakeGame = {
      controller: {
        level: 2,
      },
      find: jest.fn(type => {
        if (type === FIND_MY_STRUCTURES) {
          return [1];
        }
        return [1];
      }),
    };
    const allowed = canBuild(fakeGame, STRUCTURE_EXTENSION);
    expect(allowed).toEqual(3);
  });
});
