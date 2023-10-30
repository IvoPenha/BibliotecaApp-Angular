export const environment = {
  production: false,
  apiUrl: 'https://bibliotecaappmvp.azurewebsites.net/api',

  sessionPrefix: 'todo',
  logging: true,

  isProduction (): boolean {
    return this.production;
  },

  isDevelopment (): boolean {
    return !this.production;
  }
};
