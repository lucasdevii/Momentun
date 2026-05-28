import prisma from "../../../database/prisma/prisma.ts";

export const isValidEmail = (email) => {
  // A standard regex for basic email structure
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * @param {{
 *  id?: number,
 *  email?: string,
 *  username?: string
 * }} params
 * @returns usersObject || null
 */
export const findFirstUser = async ({id, email, username}) => {
  const fillters = [
          id ? { id: id } : undefined,
          email ? { email: email } : undefined,
          username ? { username: username } : undefined
        ].filter(Boolean)

  if (!fillters.length){
    return null
  }

  return await prisma.users.findFirst({
    where: {
      OR: fillters
    }
  })
}

export const findUserByEmail = async (email) => {
  return await prisma.users.findUnique({
    where: {
      email:email
    }
  })
} 

export const findUserById = async (id) => {
  return await prisma.users.findUnique({
    where: {
      id:id
    }
  })
} 

/**
 * 
 * @param {User Object {name, email, password, description?}}  
 * @returns UserObject
 */
export const createUser = async ({name, email, password, description}) => {
  
  return await prisma.users.create({
    data: {
      invite_code: inviteCode,
      username: name,
      email: email,
      password: password,
      description: description || ''
    }
  })
}
