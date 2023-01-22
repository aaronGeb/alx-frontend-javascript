import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const image = await uploadPhoto();
    const user = await createUser();
    return { image, user };
  } catch (err) {
    return { photo: null, user: null };
  }
}
