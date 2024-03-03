export type authResponse = {
    authProvider: [{
        identifier: string,
        provider: string
    }],
    email: string,
    firstName: string,
    lastName: string
}