/**
 * Environment variables with validation
 *
 * This file provides type-safe access to environment variables
 * and validates they exist at runtime.
 */

const getEnvVar = (key: string, defaultValue?: string): string => {
  const value = import.meta.env[key] || defaultValue;

  if (!value) {
    console.warn(`Missing environment variable: ${key}`);
  }

  return value || "";
};

export const env = {
  // API Configuration
  apiUrl: getEnvVar("VITE_API_URL", "http://localhost:3000/api"),

  // Stripe (Payment Processing)
  stripePublicKey: getEnvVar("VITE_STRIPE_PUBLIC_KEY"),

  // Feature Flags
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,

  // App Configuration
  appName: "MusicConnect",
  appVersion: getEnvVar("VITE_APP_VERSION", "0.0.0"),
} as const;

/**
 * Validate critical environment variables
 * Call this at app initialization
 */
export const validateEnv = (): void => {
  const required = [];

  // In production, these are required
  if (env.isProduction) {
    if (!env.apiUrl) required.push("VITE_API_URL");
    if (!env.stripePublicKey) required.push("VITE_STRIPE_PUBLIC_KEY");
  }

  if (required.length > 0) {
    throw new Error(
      `Missing required environment variables: ${required.join(", ")}\n` +
        "Please check your .env file.",
    );
  }
};
