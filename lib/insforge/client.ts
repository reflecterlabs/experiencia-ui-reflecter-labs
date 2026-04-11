import { createClient } from '@insforge/sdk'

export function createBrowserClient() {
  if (!process.env.NEXT_PUBLIC_INSFORGE_URL || !process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY) {
    throw new Error('Las variables de entorno de InsForge no están configuradas.')
  }

  return createClient({
    baseUrl: process.env.NEXT_PUBLIC_INSFORGE_URL,
    anonKey: process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY
  })
}

// Cliente global para componentes cliente
export const insforgeClient = createBrowserClient()
