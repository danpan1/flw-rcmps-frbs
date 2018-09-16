// @flow
import * as t from 'typed-contracts';

type Validator<T> = (valueName: string, value: mixed) => t.ValidationError | T;
type StrictValidator<T> = mixed => T;

function validate<T>(
  name: string,
  validator: Validator<T>,
): StrictValidator<T> {
  return (value: mixed) => {
    const validationResult = validator(name, value);
    if (validationResult instanceof t.ValidationError) {
      throw validationResult;
    }
    return (validationResult: T);
  };
}

// type ExtractType<C: Validator<any>> = $Call<
//   $Call<typeof validate, C>,
//   mixed,
//   string,
//   >;
type ExtractType<C: Validator<any>> = $Call<
  $Call<typeof validate, string, C>,
  mixed,
  string,
  >;
// type ExtractType<C: Validator<any>> = $Call<typeof t.object, string, C>;
export const authUserValidator = t.isObject({
  displayName: t.string,
  email: t.string.optional,
});

export type AuthUserType = ExtractType<typeof authUserValidator>;
const a: AuthUserType = { g: 2 };
a.email = { f: 1 };

function getConfig(name: string) {
  return {
    name,
    header: {
      time: 0,
    },
  };
}

type ConfigType = $Call<typeof getConfig, string>;

const y: ConfigType = {
  name: '123',
  header: {
    time: 1,
    ll: 2,
  },
};
