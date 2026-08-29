export type TeamMember = {
  id: number;
  name: string;
  designation: string;
  image: string;
  bio?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
};
