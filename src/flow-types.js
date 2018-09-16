// @flow
import {
  array,
  object,
  string,
  union,
  ValidationError,
} from 'typed-contracts';

type Person = {
  name: string,
  gender: 'm' | 'f',
  friends: $ReadOnlyArray<Person>,
  email?: string | $ReadOnlyArray<string>,
};

// person returns Person-compatible value or ValidationError
export const authUserValidator = object({
  sss: string,
  displayName: string,
  email: string.optional,
});
export const authUserValidator2 = string;

export type AuthUserType = {|
  displayName: ?string,
  email: string,
|};

// export type ExtractType<C: Validator<any>> = $Call<
//   $Call<typeof validate, C>,
//   mixed,
//   string,
// >;
