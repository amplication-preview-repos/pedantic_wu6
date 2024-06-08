import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type AppointmentUpdateInput = {
  appointmentDateTime?: Date | null;
  doctor?: DoctorWhereUniqueInput | null;
  medicalIssue?: string | null;
  patient?: PatientWhereUniqueInput | null;
};
