// @flow

import type { BookingType } from 'api/BookingsService';
import type { AuthUserType } from 'flow-types/authUserValidator';
import type { ReduxFetchable } from 'flow-types/reducks-types';

export type SessionState = {
  authUser: AuthUserType | null,
  sessionChecked: boolean,
};

export type BookingState = {
  data: BookingType[],
  ...$Exact<ReduxFetchable>,
};

export type AppStateType = $ReadOnly<{
  bookings: BookingState,
  // TODO multiple indexes not supported https://flow.org/try/#0JYWwDg9gTgLgBAJQKYEMDGMA0cDecDCE4EAdkifAL5wBmURcA5FKhowNwBQnMAnmEjgAFemADOcALy5OcOGOABzEgC55MKMBKLMnSlzSkx8AGIB5MysbmzjadYsdOhksbg2ATFc92mPrnwCiFBQUjIAkADagUgQNO4WALpwaiQAriAARkhQunJRMXEJZh6Jasaa2nrcQA
  '@sessionState': SessionState,
}>;
