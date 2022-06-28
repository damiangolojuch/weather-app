export const mapPropsToDataAttr = <TProps extends Record<string, any>>(
  props: TProps
): Record<string, any> =>
  Object.keys(props).reduce((previousValue, currentValue) => {
    previousValue[`data-${currentValue.toLowerCase()}`] = props[currentValue];
    return previousValue;
  }, {} as Record<string, any>);
