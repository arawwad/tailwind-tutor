export function classNameWithTooltip(classes: string) {
  return {
    className: classes,
    'data-tooltip-id': 'hints',
    'data-tooltip-content': classes,
  };
}
