export type User =
  | {
      id: number;
      created_at: number;
      name: string;
      email: string;
      phone: string;
      alert_preferences: alert_preferences;
      job_preferences: job_preferences;
      hospital_id: hospital_id[];
    }
  | undefined;

export type hospital_id = {
  id: string;
  created_at: string;
  name: string;
  city: string;
};

export type alert_preferences = { email: boolean; text: boolean };

export type job_preferences = { call: boolean; shift: boolean };
