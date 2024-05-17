// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'

import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";
import mongoose from 'mongoose';
import User from '@/app/models/User';
import Payment from '@/app/models/Payment';
import connectDB from '@/db/connectDb';

export const authoptions = NextAuth({
    providers: [
        // OAuth authentication providers...
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
    ],

    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account.provider == "github") {
                await connectDB()
                //check if the user exists in the database 
                const currentUser = await User.findOne({ email: email })
                if (!currentUser) {
                    //create a new user
                    const newUser = await User.create({
                        email: user.email,
                        username: user.email.split("@")[0],
                    })
                }
                return true
            }
        },
        async session({ session, user, token }) {
            const dbUser = await User.findOne({ email: session.user.email })
            session.user.name = dbUser.username
            return session
        },
    }
})

export { authoptions as GET, authoptions as POST }