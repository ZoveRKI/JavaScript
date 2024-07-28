type ValidatorFunction = (...args: any[]) => boolean;

export const validate_priority = (...validators: ValidatorFunction[]): boolean[] => {
  return validators.map((validator) => validator());
}