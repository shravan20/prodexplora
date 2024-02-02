export interface IOpenIdProvider {
    /**
     * The name of the OpenID provider (e.g., Google, Facebook).
     */
    provider: string;

    /**
     * The unique identifier for the user provided by the OpenID provider.
     */
    identifier: string;
}
