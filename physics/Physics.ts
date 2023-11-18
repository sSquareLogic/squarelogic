class Physics {
  public static calculateRotation = (velocityX: number, velocityY: number): number => {
    const angle = Math.atan2(velocityY, velocityX);
    return angle * (180 / Math.PI);
  };
}

export default Physics;
