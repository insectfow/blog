import { ref } from 'vue';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let res = await fetch('~!@~!@');

      if (!res.isSuccess) {
        throw Error('fail');
      }
      posts.value = await res.json();

    } catch (error) {
      error.value = err.message;
    }
  }

  return { posts, err, load };
}

export default getPosts;