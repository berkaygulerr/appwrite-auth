import { Client, Account, ID } from "appwrite";

const client = new Client()
  .setEndpoint("http://localhost/v1")
  .setProject("638658e879bd691b07dc");

export const id = ID.unique();
export const account = new Account(client);
