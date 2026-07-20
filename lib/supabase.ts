import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Lead {
  id?: string;
  full_name: string;
  business_name: string;
  business_email: string;
  phone_number: string;
  country: string;
  state: string;
  created_at?: string;
}

export async function submitLead(lead: Omit<Lead, 'id' | 'created_at'>) {
  const { data, error } = await supabase.from('leads').insert([lead]).select();
  if (error) throw error;
  return data;
}
