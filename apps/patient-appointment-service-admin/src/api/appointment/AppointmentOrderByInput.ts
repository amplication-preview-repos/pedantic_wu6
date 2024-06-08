import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  appointmentDateTime?: SortOrder;
  createdAt?: SortOrder;
  doctorId?: SortOrder;
  id?: SortOrder;
  medicalIssue?: SortOrder;
  patientId?: SortOrder;
  updatedAt?: SortOrder;
};
