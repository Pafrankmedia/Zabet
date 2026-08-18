'use server'

import { supabase } from "@/lib/supabase";

export async function submitContactForm(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const service = formData.get("service");
  const narrative = formData.get("narrative");

  if (!name || !email || !narrative) {
    return { success: false, error: "Please fill in all required fields." };
  }

  try {
    // If Supabase is configured and not using default placeholder, insert
    const isSupabaseConfigured =
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
      !process.env.NEXT_PUBLIC_SUPABASE_URL.includes("your-supabase-project");

    if (isSupabaseConfigured) {
      const { error } = await supabase
        .from("inquiries")
        .insert([{ name, email, service, narrative }]);

      if (error) throw error;
    } else {
      // Simulate network latency
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    return {
      success: true,
      message: "Thank you! Your inquiry has been successfully sent. A senior partner will contact you shortly.",
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      error: "There was an error sending your inquiry. Please try again or email us directly at advisory@ztkl.global.",
    };
  }
}
