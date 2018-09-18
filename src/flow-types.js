// @flow
import * as t from 'typed-contracts';

type Validator<T> = (valueName: string, value: mixed) => t.ValidationError | T;
type StrictValidator<T> = mixed => T;

export function validate<T>(
  name: string,
  validator: Validator<T>,
  maybe: boolean
): StrictValidator<T> {
  return (value: mixed) => {
    const validationResult = !maybe ? validator.maybe(name, value) : validator(name, value);
    if (validationResult instanceof t.ValidationError) {
      throw validationResult;
    }
    return (validationResult: T);
  };
}


// type ExtractType<C: Validator<any>> = $Call<
//   $Call<typeof validate, string, C>,
//   mixed,
//   string,
//   >;
// TODO сделал как заработало. не знаю как поправить на ExtractType. Не понятно как добавить maybe
export const authUserValidator: StrictValidator<AuthUserType> = validate('authUserValidator', t.isObject({
  displayName: t.string.optional,
  email: t.string,
}), true);

export type AuthUserType = {
  displayName?: string;
  email: string;
};

