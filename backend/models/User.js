// nice code!
// password hashing with bcrypt at cost factor at 10 is gppd 
// Checking result.insertedId after insert is good defensive coding


import bcrypt from "bcrypt";
import { getDB } from "../config/db.js";

export const createUser = async (userData) => {
  const db = getDB();
  const { email, password, name } = userData;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    email: email.toLowerCase(),
    password: hashedPassword,
    name: name.trim(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const result = await db.collection("users").insertOne(user);
  if (!result.insertedId) {
    throw new Error("Failed to insert user - no insertedId returned");
  }
  return { ...user, _id: result.insertedId };
};

// MongoDB _id fields are ObjectId types, but userId coming from the 
//session is likely a plain string. This query will  return null every time. 
//Needs to be:
import { ObjectId } from "mongodb";
// ...
return await db.collection("users").findOne({ _id: new ObjectId(userId) });


export const findUserByEmail = async (email) => {
  const db = getDB();
  return await db.collection("users").findOne({ email: email.toLowerCase() });
};

export const findUserById = async (userId) => {
  const db = getDB();
  return await db.collection("users").findOne({ _id: userId });
};

export const comparePassword = async (candidatePassword, hashedPassword) => {
  return await bcrypt.compare(candidatePassword, hashedPassword);
};
