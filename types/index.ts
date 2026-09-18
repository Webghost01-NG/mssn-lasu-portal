export type Campus = "Ojo (Main)" | "Epe (Engineering)" | "Ikeja (LASUCOM)";

export type Faculty =
  | "Science"
  | "Law"
  | "College of Medicine"
  | "Engineering"
  | "Management Sciences"
  | "Social Sciences"
  | "Arts"
  | "Education"
  | "Agriculture"
  | "Communication"
  | "Transport & Logistics";

export type Level = "100L" | "200L" | "300L" | "400L" | "500L" | "600L";

export interface MemberProfile {
  id: string;
  matricNumber: string;
  fullName: string;
  email: string;
  phone?: string;
  campus: Campus;
  faculty: Faculty;
  department: string;
  level: Level;
  avatarUrl?: string;
  isAlumni: boolean;
  createdAt: string;
}

export interface DuesPayment {
  id: string;
  profileId: string;
  sessionYear: string; // e.g. "2025/2026"
  category: "Central" | "Faculty" | "Combined";
  amount: number;
  reference: string;
  status: "pending" | "success" | "failed";
  verifiedAt?: string;
  qrVerificationHash: string;
  pdfReceiptUrl?: string;
}

export interface VaultMaterial {
  id: string;
  courseCode: string;
  title: string;
  faculty: Faculty;
  department: string;
  level: Level;
  semester: 1 | 2;
  materialType: "Past Question" | "Summary Note" | "Curriculum Guide" | "Recording";
  fileUrl: string;
  fileSizeKb?: number;
  downloadsCount: number;
  createdAt: string;
}

export interface EventItem {
  id: string;
  title: string;
  slug: string;
  category: "Jihad Week" | "Usrah" | "Sisters Circle" | "Orientation" | "Academic";
  campus: Campus | "All";
  startTime: string;
  endTime?: string;
  venue: string;
  bannerUrl?: string;
  registrationRequired: boolean;
}

export interface CounselingTicket {
  id: string;
  ticketCode: string; // e.g. MSN-CNS-8842
  category: "Spiritual" | "Academic Distress" | "Personal" | "Welfare";
  isAnonymous: boolean;
  status: "submitted" | "assigned" | "resolved" | "closed";
  message: string;
  assignedScholar?: string;
  createdAt: string;
}

export interface ExecutiveMember {
  id: string;
  fullName: string;
  portfolio: string;
  branch: "Central" | "Ojo" | "Epe" | "Ikeja" | "Sisters Directorate";
  tenureSession: string;
  bio?: string;
  avatarUrl?: string;
  contactEmail?: string;
}
