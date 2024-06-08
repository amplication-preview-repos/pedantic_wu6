import { Doctor } from "../doctor/Doctor";
import { Patient } from "../patient/Patient";

export type Appointment = {
  appointmentDateTime: Date | null;
  createdAt: Date;
  doctor?: Doctor | null;
  id: string;
  medicalIssue: string | null;
  patient?: Patient | null;
  updatedAt: Date;
};
