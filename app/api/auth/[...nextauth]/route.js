// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'

import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";
import mongoose from 'mongoose';
import User from '@/app/models/User';
import Payment from '@/app/models/Payment';

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
            if(account.provider == "github") {
                // connect to the database
                const client = await mongoose.connect("mongodb://localhost:27017/getmeatea")
                //check if the user exists in the database 
                const currentUser = User.findOne({email: email})
                if(!currentUser)
                {
                    //create a new user
                    const newUser = new User({
                        email: email,
                        username: email.split("@")[0],
                    })
                    await newUser.save()
                    user.name = newUser.username
                }
                else{
                    user.name = currentUser.username
                }
                return true
            }
        }
    }    
})

export { authoptions as GET, authoptions as POST }