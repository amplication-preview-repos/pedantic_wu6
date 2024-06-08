import { Appointment } from "../appointment/Appointment";

export type Doctor = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  id: string;
  name: string | null;
  specialty: string | null;
  updatedAt: Date;
};
