import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = 'https://aclysbcubdevqwkkrmrp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjbHlzYmN1YmRldnF3a2tybXJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2MzYxMjksImV4cCI6MjA2MzIxMjEyOX0.tRm1LJD8aHpCC4r2Ekd4BsfMulK-1fHCOIWsEAiy_QU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
