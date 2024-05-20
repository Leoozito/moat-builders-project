"use server";
import { cookies } from 'next/headers'

export async function setToken(token: string) {
  cookies().set("token", token);
}

export async function getToken() {
  const token = cookies().get("token");
  return token?.value;
}