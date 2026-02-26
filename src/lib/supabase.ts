// Re-export the canonical Supabase client so all imports use the same instance
export { supabase } from '@/integrations/supabase/client'

export const isSupabaseConfigured = true

export const createNotification = async (data: any) => {
  // notifications table doesn't exist yet — no-op for now
  return null
}
