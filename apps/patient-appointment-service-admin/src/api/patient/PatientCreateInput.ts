import { AppointmentCreateNestedManyWithoutPatientsInput } from "./AppointmentCreateNestedManyWithoutPatientsInput";

export type PatientCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutPatientsInput;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
};
