export const getUserLikeCount = async ({
  sessionId,
  slug,
}: {
  sessionId: string;
  slug: string;
}) =>
  await prismaClient.like.count({
    where: {
      sessionId,
      contentMeta: {
        is: {
          slug,
        },
      },
    },
  });