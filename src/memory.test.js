import memoryHandler from './memory';

describe('memoryHandler', () => {
  describe('addToQueue', () => {
    it('should add to queue', () => {
      const creepSchema = { role: 'harvester', body: [WORK, CARRY, MOVE] };
      const fakeMemory = { queue: [] };
      memoryHandler.addToQueue(creepSchema, fakeMemory);
      expect(fakeMemory).toEqual({ queue: [creepSchema] });
    });
  });
});
