import NextAuth from "next-auth/next";

const handler = NextAuth({
session:{
    strategy:'jwt'
},
providers:[

],
pages: {
    
}
})

export {handler as GET, handler as POST}