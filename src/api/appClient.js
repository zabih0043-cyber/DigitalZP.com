export const appClient = {
  auth: {
    async me() {
      return null;
    },
    logout() {
      return null;
    },
    redirectToLogin(url = "/") {
      if (typeof window !== "undefined") {
        window.location.href = url;
      }
    },
  },
};

export default appClient;
