import { ID } from "appwrite";
import { databases } from "./appwrite";

const db = {};

const collection = [
  {
    dbId: import.meta.env.VITE_DATABASE_ID,
    id: import.meta.env.VITE_PUBLIC_COLLECTION_ID,
    name: "public",
  },
  {
    dbId: import.meta.env.VITE_DATABASE_ID,
    id: import.meta.env.VITE_PRIVATE_COLLECTION_ID,
    name: "private",
  },
];

collection.map((col) => {
  db[col.name] = {
    create: (payload, permissions, id = ID.unique()) =>
      databases.createDocument(col.dbId, col.id, id, payload, permissions),

    update: (id, payload, permissions) =>
      databases.updateDocument(col.dbId, col.id, id, payload, permissions),

    delete: (id) => databases.deleteDocument(col.dbId, col.id, id),

    list: (queries = []) => databases.listDocuments(col.dbId, col.id, queries),

    get: (id) => databases.getDocument(col.dbId, col.id, id),
  };
});
export default db;
