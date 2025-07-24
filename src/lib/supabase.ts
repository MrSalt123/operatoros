import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create client only on the client side
let supabase: any = null;

if (typeof window !== 'undefined') {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase };

export interface DownloadLead {
  id?: string;
  email: string;
  phone: string;
  workflow_title: string;
  created_at?: string;
} 