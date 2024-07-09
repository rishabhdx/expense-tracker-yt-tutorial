import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/db/client";

const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  const userAlreadyExists = await prisma.user.findUnique({
    where: {
      clerkUserId: user.id
    }
  });

  if (!userAlreadyExists) {
    const newUser = await prisma.user.create({
      data: {
        clerkUserId: user.id,
        email: user.emailAddresses[0].emailAddress,
        name: user.fullName,
        imageURL: user.imageUrl
      }
    });

    return newUser;
  }

  return userAlreadyExists;
};

export { checkUser };
