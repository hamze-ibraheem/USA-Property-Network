export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TrustFactorItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStepItem {
  stepNumber: number;
  title: string;
  description: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}
