export { ID } from 'appwrite';
import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: 'https://cloud.appwrite.io/v1',
  projectId: "66582e5c002d3bce78a7",
  databaseId: "66546f1d003a4759fde2",
  storageId: "66546f28003e7be385b3",
  userCollectionId: "66546f9d003361d06009",
  postCollectionId: "66546f7e000de845a94f",
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);