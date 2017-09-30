// @flow
export default function build(creep: Creep) {
  // Look for construction sites
  const constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);

  if (!constructionSite) {
    return false;
  }

  const status = creep.build(constructionSite);

  if (status === ERR_NOT_IN_RANGE) {
    creep.moveTo(constructionSite);
  }

  return true;
}
