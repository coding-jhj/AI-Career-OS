export type CareerStage = "junior" | "mid" | "senior" | "career-switcher";

export type UserProfile = {
  id: string;
  email: string;
  fullName: string | null;
  targetRole: string | null;
  careerStage: CareerStage;
  createdAt: string;
  updatedAt: string;
};

export type SignInFormState = {
  email: string;
  secret: string;
};
