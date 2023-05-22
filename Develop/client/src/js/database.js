import { openDB } from 'idb';

const initializeDatabase = async () => {
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });
};

export const putDataToDatabase = async (content) => {
  console.error('putDataToDatabase not implemented');
  console.log('PUT to the database');

  const jateDb = await openDB('jate', 1);
  const transaction = jateDb.transaction('jate', 'readwrite');
  const store = transaction.objectStore('jate');
  const request = store.put({ id: 1, value: content });
  const result = await request;
  console.log('🚀 - data saved to the database', result.value);
};

export const getDataFromDatabase = async () => {
  console.error('getDataFromDatabase not implemented');

  const jateDb = await openDB('jate', 1);
  const transaction = jateDb.transaction('jate', 'readonly');
  const store = transaction.objectStore('jate');
  const request = store.get(1);
  const result = await request;
  console.log('result.value', result.value);
  return result?.value;
};

initializeDatabase();

