import { db } from "@/lib/db";

export const getOrCreateConversation = async (
  memberOneId: string,
  memberTwoId: string
) => {
  try {
    let conversation =
      (await findConversation(memberOneId, memberTwoId)) ||
      (await findConversation(memberTwoId, memberOneId));

    if (!conversation) {
      conversation = await createNewConversation(memberOneId, memberTwoId);
    }

    return conversation;
  } catch (error) {}
};

const findConversation = async (memberOneId: string, memberTwoId: string) => {
  try {
    return await db.conversation.findFirst({
      where: {
        AND: [{ memberOneId: memberOneId }, { memberTwoId: memberTwoId }],
      },
      include: {
        memberOne: {
          include: {
            profile: true,
          },
        },
        memberTwo: {
          include: {
            profile: true,
          },
        },
      },
    });
  } catch (error) {
    return null;
  }
};

// 해당 Member와 이전에 대화한 기록이 있는 경우, 기존의 대화 기록을 렌더링
// 대화 기록이 없는 경우, 새로운 대화 기록 생성
const createNewConversation = async (
  memberOneId: string,
  memberTwoId: string
) => {
  try {
    return await db.conversation.create({
      data: {
        memberOneId,
        memberTwoId,
      },
      include: {
        memberOne: {
          include: {
            profile: true,
          },
        },
        memberTwo: {
          include: {
            profile: true,
          },
        },
      },
    });
  } catch (error) {
    return null;
  }
};
