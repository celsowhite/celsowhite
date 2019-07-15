import axios from 'axios';

/**
 * Get Posts
 *
 * @param   string   postType - The name of the post type we want to get posts from.
 * @return  object   posts - A list of all the posts from this post type with our custom data.
 */

export function getPosts(postType) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.ROOT_API}/wp-json/wp/v2/${postType}`)
      .then(response => {
        // WP will return additional data on the posts endpoint. This is required data that other apps accessing the api can use.
        // We customize the response by putting all of our custom endpoint data into the 'custom' key. This keeps the data we need centralized
        // and structured in the exact way we want to consume it.
        const posts = response.data.map(post => {
          return post.custom;
        });
        resolve(posts);
      });
  });
}

/**
 * Get Menus
 *
 * @return  object - A tree of data for all the menus in the site. Each menu has an array of the menu items titles and slugs.
 */

export function getMenus() {
  return new Promise((resolve, reject) => {
    axios.get(`${process.env.ROOT_API}/wp-json/cw/v1/menus`).then(response => {
      resolve(response.data);
    });
  });
}

/**
 * Get Page
 *
 * @param   string   slug - The slug of the page.
 * @return  object   pageData - The pages custom data.
 */

export function getPage(slug) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.ROOT_API}/wp-json/wp/v2/pages?slug=${slug}`)
      .then(response => {
        resolve(response.data[0].custom);
      });
  });
}

/**
 * Get Options
 *
 * @return  object - Global option data.
 */

export function getOptions() {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.ROOT_API}/wp-json/cw/v1/options`)
      .then(response => {
        resolve(response.data);
      });
  });
}
