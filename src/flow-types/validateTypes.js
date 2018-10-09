// @flow

import * as t from "typed-contracts";

type Validator<T> = mixed => t.ValidationError | T;
type StrictValidator<T> = mixed => T;

function validate<T>(validator: Validator<T>): StrictValidator<T> {
  return (value: mixed) => {
    const validationResult = validator(value);
    if (validationResult instanceof t.ValidationError) {
      throw validationResult;
    }
    return (validationResult: T);
  };
}

export type ExtractType<C: Validator<any>> = $Call<
  $Call<typeof validate, C>,
  mixed,
  string,
  >;

export const isMap = <T>(
  contract: (valueName: string, value: mixed) => t.ValidationError | T,
): t.Contract<{ [key: string]: T }> =>
  t.of(
    (valueName, value): any => {
      if (typeof value !== "object" || value === null)
        return new t.ValidationError(valueName, value, "Object");

      const entries = Object.entries(value);
      for (let index = 0; index < entries.length; index += 1) {
        const result = contract(
          `${valueName}[${entries[index][0]}]`,
          entries[index][1],
        );
        if (result instanceof t.ValidationError) return result;
      }

      return value;
    },
  );

export default validate;
