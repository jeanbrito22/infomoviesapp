export class MovieApiConfig {
    
    private static _apiKey: string = "c09b1eae1c4e4ddc2fa403f1a9fe1dd0";
    private static language: string = "pt-BR";


    static getApiKey(): string {
        return MovieApiConfig._apiKey;
    }

    static setLanguage(language: string): void {
        MovieApiConfig.language = language;
    }

    static getLanguage(): string {
        return MovieApiConfig.language;
    } 
    
}