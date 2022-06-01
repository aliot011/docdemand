export type Account = {
  _id: string;
  createdAt: number;
  email: string;
  providerId?: string;
  facilityId?: string;

  //TODO (Shaun): session handling
};

export type Provider = {
  _id: string;
  accountId: string;
  firstName: string;
  lastName: string;
  address?: Address;
  phones: { number: string; mobile: boolean }[];
  alertPreferences: ProviderAlertPreferences;
  credentialedFacilities: (Facility & { active: boolean })[];
};

// Documents that are gathered from the user e.g. credentials or Pagerr contractor agreement
export type Agreement = {
  _id: string;
  userId?: string;
  facilityId?: string;
  identifier: string;
  userSignedDate?: Date;
  facilitySignedDate?: Date;
  pagerrSignedDate?: Date;
  userSignatureRequired: boolean;
  facilitySignatureRequired: boolean;
  pagerrSignatureRequired: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type Facility = {
  _id: string;
  name: string;
  address: Address;
  phone: string;
  active: boolean;
  entranceProtocol: string;
};

export type Address = {
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
};

export type ShiftType = "call" | "shift";

export type ContactMethod = "email" | "text";

export type ProviderType = "phd" | "crna";

export type Specialty =
  | "general anesthesia"
  | "obstetric"
  | "cardiac"
  | "pain management"
  | "regional"
  | "critical care"
  | "pediatric (<1 years old)"
  | "pediatric (<2 years old)"
  | "pediatric (<5 years old)"
  | "pediatric (5-18 years old)";

export type Certification = "board certified" | "board eligible" | "none";

export type Job = {
  id: string;
  hospitalId: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  type: ShiftType;
  open: boolean;
  startTime: Date;
  endTime: Date;
  baseRate: number;
  providerType: ProviderType;
  specialties: Specialty[];
  certifications: Certification[];
  providerId?: string;
};

export type ProviderAlertPreferences = {
  contactMethods: ContactMethod[];
  shiftTypes: ShiftType[];
  facilityIds: string[];
};
