/**
 * Runtime Environment Variable Validator
 * Validates presence of critical environment variables on startup.
 */

interface EnvConfig {
  NEXT_PUBLIC_SUPABASE_URL?: string;
  NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;
  PAYSTACK_PUBLIC_KEY?: string;
  PAYSTACK_SECRET_KEY?: string;
}

export function validateEnv(): EnvConfig {
  const isProduction = process.env.NODE_ENV === "production";

  const config: EnvConfig = {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    PAYSTACK_PUBLIC_KEY: process.env.NEXT_PUBLIC_PAYSTACK_KEY,
    PAYSTACK_SECRET_KEY: process.env.PAYSTACK_SECRET_KEY,
  };

  if (isProduction) {
    const missing: string[] = [];
    if (!config.NEXT_PUBLIC_SUPABASE_URL) missing.push("NEXT_PUBLIC_SUPABASE_URL");
    if (!config.NEXT_PUBLIC_SUPABASE_ANON_KEY) missing.push("NEXT_PUBLIC_SUPABASE_ANON_KEY");
    if (!config.PAYSTACK_SECRET_KEY) missing.push("PAYSTACK_SECRET_KEY");

    if (missing.length > 0) {
      console.warn(`[Config Warning] Missing production variables: ${missing.join(", ")}`);
    }
  }

  return config;
}
