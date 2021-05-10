import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vvkigpuupgryhjvwxkrj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNDY4NTM1MiwiZXhwIjoxOTMwMjYxMzUyfQ.eyUpG9STqntzDJ0mywuRN_T_8akSXg5MeKh4avXPpIU";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
