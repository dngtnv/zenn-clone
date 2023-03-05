export function parseJwt(token: string | undefined | null) {
  if (!token) {
    return null
  }
  const segments = token.split('.')
  if (segments.length !== 3) {
    console.error('Invalid JWT format')
    return null
  }
  const base64Url = segments[1]
  const base64 = base64Url.replace('-', '+').replace('_', '/')
  try {
    return JSON.parse(atob(base64))
  } catch (error) {
    console.error('Error parsing JWT:', error)
    return null
  }
}
