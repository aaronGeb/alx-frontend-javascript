import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const image = uploadPhoto();
  const user = createUser();

  return Promise.all([image, user])
    .then((values) => console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`))
    .catch(() => console.log('Signup system offline'));
}
