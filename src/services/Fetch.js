export const api = async () => {
  try {
    const res = await fetch('https://api.github.com/users/derprofi');
    const data = await res.json();
    console.log(data)
  // since fetch will not throw an http error, we have to catch it and throw it ourself
  } catch (err) {
      console.log(err)
  }
};
