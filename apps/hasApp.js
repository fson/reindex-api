import getAdminDB from '../db/getAdminDB';

export default async function hasApp(hostname) {
  const adminDB = getAdminDB(hostname);
  try {
    const domain = await adminDB.getByField('Domain', 'hostname', hostname);
    return Boolean(domain);
  } finally {
    await adminDB.close();
  }
}
