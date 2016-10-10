import { AuthProviders, AuthMethods } from 'angularfire2'

export const firebaseAuthConfig = {
    provider: AuthProviders.Facebook,
    method: AuthMethods.Redirect
}