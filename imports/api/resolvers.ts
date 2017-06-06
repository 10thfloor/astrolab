
export const resolvers = {
    Query: {
        user(root, args, context) {
            return context.user
        },
    },
    User: {
        emails: ({ emails }) => emails,
        profile: ({ profile }) => profile
    },
}
