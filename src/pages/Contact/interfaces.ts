export interface FormSubmission {
  FullName: string;
  EmailAddress: string;
  PhoneNumbers: string[];
  bIncludeAddressDetails: boolean;
  Message: string;
  AddressDetails: Address;
}

interface Address {
  AddressLine1: string;
  AddressLine2: string;
  CityTown: string;
  StateCounty: string;
  PostCode: string;
  Country: string;
}

export interface SubmitState {
  loading: boolean;
  error: string[] | null;
  data: string | null;
}
