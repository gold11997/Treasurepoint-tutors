import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    'https://tgdrmumjmjvdndyazywp.supabase.co',
    'sb_publishable_uK2Mhw6LMqFfsmsZm2ClKg_xo398qvC'
  )
}
