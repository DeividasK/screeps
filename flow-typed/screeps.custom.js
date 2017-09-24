declare type BodyParts = Array<BodyPartType>;
declare type CreepRole = 'harvester' | 'upgrader' | 'builder';
declare type StructureType = $Keys<typeof CONTROLLER_STRUCTURES>;

declare type CreepSchema = {
  role: CreepRole,
  body: Array<BodyPartType>,
};

declare type AreaDimensions = {
  top: number,
  left: number,
  bottom: number,
  right: number,
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
