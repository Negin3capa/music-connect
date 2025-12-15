/**
 * Validation utility functions
 */

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate Brazilian CPF
 */
export const isValidCPF = (cpf: string): boolean => {
  const cleaned = cpf.replace(/\D/g, "");

  if (cleaned.length !== 11) return false;
  if (/^(\d)\1+$/.test(cleaned)) return false; // All digits the same

  // Validate check digits
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleaned.charAt(i)) * (10 - i);
  }
  let remainder = 11 - (sum % 11);
  let checkDigit1 = remainder >= 10 ? 0 : remainder;

  if (checkDigit1 !== parseInt(cleaned.charAt(9))) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleaned.charAt(i)) * (11 - i);
  }
  remainder = 11 - (sum % 11);
  let checkDigit2 = remainder >= 10 ? 0 : remainder;

  return checkDigit2 === parseInt(cleaned.charAt(10));
};

/**
 * Validate Brazilian phone number
 */
export const isValidPhone = (phone: string): boolean => {
  const cleaned = phone.replace(/\D/g, "");
  return cleaned.length === 10 || cleaned.length === 11;
};

/**
 * Validate URL format
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Validate password strength
 * Returns true if password meets requirements
 */
export const isStrongPassword = (password: string): boolean => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const minLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);

  return minLength && hasUppercase && hasLowercase && hasNumber;
};

/**
 * Get password strength message
 */
export const getPasswordStrength = (
  password: string,
): {
  strength: "weak" | "fair" | "good" | "strong";
  message: string;
} => {
  if (password.length < 6) {
    return { strength: "weak", message: "Senha muito curta" };
  }

  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const score = [hasUppercase, hasLowercase, hasNumber, hasSpecial].filter(
    Boolean,
  ).length;

  if (score < 2) return { strength: "weak", message: "Senha fraca" };
  if (score === 2) return { strength: "fair", message: "Senha razoável" };
  if (score === 3) return { strength: "good", message: "Senha boa" };
  return { strength: "strong", message: "Senha forte" };
};

/**
 * Validate price range
 */
export const isValidPriceRange = (min: number, max: number): boolean => {
  return min >= 0 && max >= min;
};

/**
 * Validate date is in the future
 */
export const isValidFutureDate = (date: Date | string): boolean => {
  const d = typeof date === "string" ? new Date(date) : date;
  return d > new Date();
};
