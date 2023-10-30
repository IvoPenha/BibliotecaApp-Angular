export const environment = {
  production: false,
  apiUrl: 'https://bibliotecaappmvp.azurewebsites.net/api',

  sessionPrefix: '',
  logging: false,

  isProduction (): boolean {
    return this.production;
  },

  isDevelopment (): boolean {
    return !this.production;
  }
};
