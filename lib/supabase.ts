import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Lazy singleton — only initialises when first used, so missing env vars
// during local dev without Supabase don't crash the entire page.
let _client: SupabaseClient | null = null;

function getClient(): SupabaseClient | null {
  if (_client) return _client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key || url === 'your-supabase-project-url') {
    console.warn('[Eura] Supabase env vars not set — lead capture disabled.');
    return null;
  }

  _client = createClient(url, key);
  return _client;
}

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
  const client = getClient();

  // Gracefully degrade if Supabase isn't configured — demo still loads
  if (!client) return null;

  const { data, error } = await client.from('leads').insert([lead]).select();
  if (error) throw error;
  return data;
}
