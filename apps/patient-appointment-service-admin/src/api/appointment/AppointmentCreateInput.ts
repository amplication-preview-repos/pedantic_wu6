import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type AppointmentCreateInput = {
  appointmentDateTime?: Date | null;
  doctor?: DoctorWhereUniqueInput | null;
  medicalIssue?: string | null;
  patient?: PatientWhereUniqueInput | null;
};
