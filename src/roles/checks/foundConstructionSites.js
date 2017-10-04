// @flow
export default function foundConstructionSites(creep: Creep): boolean {
  const constructionSites = creep.room.find(FIND_MY_CONSTRUCTION_SITES);

  return constructionSites.length === 0;
}
