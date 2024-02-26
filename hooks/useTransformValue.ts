import { useMemo } from "react";

export type IRange = [number, number];

const useTransformValue = (originalValue: number, originalRange: IRange, tranformRange: IRange): number => {
  const transformedValue = useMemo(
    () => transformValue(originalValue, originalRange, tranformRange),
    [originalValue, originalRange, tranformRange],
  );

  return transformedValue;
};

const transformValue = (value: number, originalRange: IRange, tranformRange: IRange): number => {
  const minValue = originalRange[0];
  const maxValue = originalRange[1];
  const newMinValue = tranformRange[0];
  const newMaxValue = tranformRange[1];

  const normalizedValue = (value - minValue) / (maxValue - minValue);
  const newValue = normalizedValue * (newMaxValue - newMinValue) + newMinValue;

  return newValue;
};

export default useTransformValue;
