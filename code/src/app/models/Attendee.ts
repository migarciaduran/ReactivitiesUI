import { AppUser } from "./AppUser";

export interface Attendee {
  appUserId: string;
  appUser: AppUser;
  activityId: string;
  isHost: boolean;
}