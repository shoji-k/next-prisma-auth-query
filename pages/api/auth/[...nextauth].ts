import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session: async (session, user) => {
      session.user.id = user.id;
      return Promise.resolve(session);
    },
  },
};
export default (req, res) => NextAuth(req, res, options);
