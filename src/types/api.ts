export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface AdmissionsFormData {
  studentName: string;
  parentName: string;
  phone: string;
  email: string;
  grade: string;
  address: string;
  files?: FileList;
}

export interface EmailRequest {
  formType: 'contact' | 'admissions' | 'admission-modal';
  timestamp: string;
  [key: string]: unknown;
}

export type ApiResponse = {
  success: boolean;
  message: string;
};

