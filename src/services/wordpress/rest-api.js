import axios from 'axios';

/*----------------------------
Get Website Content
----------------------------*/

export function getWebsiteContent() {
  return new Promise((resolve, reject) => {
    axios
      .get('http://celsowhite-api.localhost/wp-json/wp/v2/website')
      .then(response => {
        const websiteData = response.data.map(website => {
          return website.custom;
        });
        resolve(websiteData);
      });
  });
}
