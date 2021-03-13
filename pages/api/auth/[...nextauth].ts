import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import axios from "axios";

import * as apiEndPoints from "../../../src/routes/api";

const providers = [
  Providers.Credentials({
    name: 'Credentials',
    authorize: async (credentials) => {
      try {
        const user = await axios.post(apiEndPoints.login,
        { ...credentials },
        {
          headers: {
            accept: '*/*',
            'Content-Type': 'application/json'
          }
        })

        if (user) {
          return {status: 'success', data: user.data.user}
        }
      } catch (e) {
        console.log("error -> ", e);
        const errorMessage = e.response.data.message
        throw new Error(errorMessage + '&email=' + credentials.email)
      }

    }
  })
]

const callbacks = {
  async jwt(token, user) {
    if (user) {
      token.accessToken = user.data.token
    }

    return token
  },

  async session(session, token) {
    session.accessToken = token.accessToken
    return session
  }
}

const options = {
  providers,
  callbacks,
  pages: {
    error: '/login' // Changing the error redirect page to our custom login page
  }
}

export default (req, res) => NextAuth(req, res, options)
