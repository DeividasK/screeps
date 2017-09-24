export function createArea(
  centerPosition: RoomPosition,
  radius: number,
): AreaDimensions {
  const top = centerPosition.y - radius;
  const bottom = centerPosition.y + radius;
  const left = centerPosition.x - radius;
  const right = centerPosition.x + radius;

  const min = 0;
  const max = 50;

  return {
    top: top >= min ? top : min,
    bottom: bottom <= max ? bottom : max,
    left: left >= min ? left : min,
    right: right <= max ? right : max,
  };
}
