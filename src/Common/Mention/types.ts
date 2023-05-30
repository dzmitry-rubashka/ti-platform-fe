export type MentionType = "primary" | "secondary";

export interface MentionProps {
  type: MentionType;
  username: string;
}
