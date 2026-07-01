import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export interface Product {
  id: string
  product_code: string
  name: string
  category: string
  brand: string
  model: string
  year: string | null
  image_url: string
  description: string | null
  sort_order: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export async function fetchProducts(): Promise<Product[]> {
  if (!supabase) return []

  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .order('category', { ascending: true })
    .order('product_code', { ascending: true })

  if (error) {
    throw new Error(error.message)
  }

  return data ?? []
}
