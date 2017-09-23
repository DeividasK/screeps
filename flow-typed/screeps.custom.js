declare type BodyParts = Array<BodyPartType>;
declare type CreepRole = 'harvester' | 'upgrader' | 'builder';

declare type CreepSchema = {
  role: CreepRole,
  body: Array<BodyPartType>,
};

declare type MemoryObject = {
  creeps: {
    [name: string]: any,
  },
  queue: Array<CreepSchema>,
  roles: {
    [CreepRole]: number,
  },
};

declare var Memory: MemoryObject;
