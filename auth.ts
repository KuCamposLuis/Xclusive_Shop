import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { Login } from './models/types';
import bcrypt from 'bcrypt';

async function getUser(email: string): Promise<Login | undefined> {
  try {
    const response = await fetch(`https://tu-api.com/usuarios?email=${email}`);
    const data = await response.json();

    return data[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
          if (parsedCredentials.success) {
            const{email,password} = parsedCredentials.data;
            const user = await getUser(email);
            if (!user) return null;
            const passwordsMatch = await bcrypt.compare(password, user.contraseña)
             if (passwordsMatch) return user;
          }

          console.log('Credenciales incorre')
          return null;
      },
    }),
  ],
});
