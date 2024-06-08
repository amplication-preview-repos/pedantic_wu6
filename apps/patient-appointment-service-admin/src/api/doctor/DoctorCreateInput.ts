import { AppointmentCreateNestedManyWithoutDoctorsInput } from "./AppointmentCreateNestedManyWithoutDoctorsInput";

export type DoctorCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutDoctorsInput;
  name?: string | null;
  specialty?: string | null;
};
