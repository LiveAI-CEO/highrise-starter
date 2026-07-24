export interface AppModuleDefinition {
  id: string
  version: string
  description: string
  routes: string[]
}

export const moduleRegistry: Record<string, AppModuleDefinition> = {
  core: {
    id: 'core',
    version: '1.0.0',
    description: 'Health, shell, context boundary, security headers, and application state.',
    routes: ['/', '/system-status']
  }
}
