import * as LocalAuthentication from 'expo-local-authentication'

export async function checkBiometryIsAvailable() {
  const isCompatible = await LocalAuthentication.hasHardwareAsync();
      
  if (!isCompatible) {
    throw new Error('Your device isn\'t compatible.')
  }

  const isEnrolled = await LocalAuthentication.isEnrolledAsync();
  
  if (!isEnrolled) {
    throw new Error('No Faces / Fingers found.')
  }
  
  return await LocalAuthentication.authenticateAsync()
}