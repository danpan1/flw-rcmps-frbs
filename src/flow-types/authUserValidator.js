// @flow
import * as t from 'typed-contracts';
import validate, { type ExtractType } from './validateTypes';

export const authUserContract = t.isObject({
  displayName: t.string,
  email: t.string.optional,
})('authUserValidator');

export const validateAuthUser = validate(authUserContract.maybe);
export type AuthUserType = ExtractType<typeof authUserContract>;
