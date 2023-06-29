export default function getInfo(attribute, id) {
    const apiURL = `https://swapi.dev/api/${attribute}/${id}/`;
  
    return fetch(apiURL)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Request failed');
        }
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log('Error:', error);
        return null;
      });
}  