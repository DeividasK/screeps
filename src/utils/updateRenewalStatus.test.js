import updateRenewalStatus from './updateRenewalStatus';
jest.mock('structures/actions/assignBody', () => {
  findBiggestCreatableBody: jest.fn();
});

describe('updateRenewalStatus', () => {
  it('should return if renewalStatus is "never"', () => {
    const mockedCreep = {
      memory: {
        needsRenewal: 'never',
      },
    };
    expect(updateRenewalStatus(mockedCreep)).toBeUndefined();
  });

  it('should set renewal status to "no" if it is undefined', () => {
    const mockedCreep = {
      memory: {},
    };
    expect(updateRenewalStatus(mockedCreep)).toBeUndefined();
    expect(mockedCreep.memory.needsRenewal).toEqual('no');
  });

  it('should set renewal status to "no" if status is "yes" and ticksToLive is above maxThreshold (1450)', () => {
    const mockedCreep = {
      ticksToLive: 1451,
      memory: {
        needsRenewal: 'yes',
      },
    };
    expect(updateRenewalStatus(mockedCreep)).toBeUndefined();
    expect(mockedCreep.memory.needsRenewal).toEqual('no');
  });

  it('should return if ticksToLive is above min threshold', () => {
    const mockedCreep = {
      ticksToLive: 1440,
      memory: {
        needsRenewal: 'no',
      },
    };
    expect(updateRenewalStatus(mockedCreep)).toBeUndefined();
    expect(mockedCreep.memory.needsRenewal).toEqual('no');
  });
});
