import createArea from './createArea';

describe('createArea', () => {
  it('should return an area of a specified radius', () => {
    const fakeRoomPosition = {
      x: 10,
      y: 10,
    };
    const areaDimensions = createArea(fakeRoomPosition, 1);
    expect(areaDimensions).toEqual({
      top: 9,
      left: 9,
      bottom: 11,
      right: 11,
    });
  });

  it('should reduce the area if it is out of map bounds', () => {
    const fakeRoomPosition = {
      x: 0,
      y: 0,
    };
    const areaDimensions = createArea(fakeRoomPosition, 5);
    expect(areaDimensions).toEqual({
      top: 0,
      left: 0,
      bottom: 5,
      right: 5,
    });
  });
});
