import { AppointmentUpdateManyWithoutPatientsInput } from "./AppointmentUpdateManyWithoutPatientsInput";

export type PatientUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutPatientsInput;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
};
