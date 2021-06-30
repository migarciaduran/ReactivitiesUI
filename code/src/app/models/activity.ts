import { Attendee } from "./Attendee";

export interface Activity {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  city: string;
  venue: string;
  isCancelled: boolean;
  // attendees: Attendee[];
}
