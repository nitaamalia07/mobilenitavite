// src/supabase.ts
import { createClient } from '@supabase/supabase-js';

// Ambil kredensial dari file .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Buat client Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
