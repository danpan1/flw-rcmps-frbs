import * as t from 'typed-contracts';

type Validator<T> = mixed => t.ValidationError | T;
type StrictValidator<T> = mixed => T;

export function validate<T>(validator: Validator<T>): StrictValidator<T> {
  return (value:mixed) => {
    const validationResult = validator(value);
    if(validationResult instanceof t.ValidationError){
      throw validationResult
    }
    return (validationResult:T)
  };
}

export type ExtractType<C: Validator<any>> = $Call<
  $Call<typeof validate, C>,
  mixed,
  string,
>;
