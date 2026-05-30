/**
 * TypeScript type definitions
 */

// Component types
export interface PageProps {
  setPage?: (page: string) => void;
}

export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Form types
export interface FormValues {
  [key: string]: string | number | boolean | File | undefined;
}

export interface FormError {
  field: string;
  message: string;
}

// API types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
