export function fetchData(url) {
  let status = 'pending';
  let result;
  let suspender = fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error("Error en la respuesta de la API");
      }
      return res.json();
    })
    .then(data => {
      status = 'success';
      result = data;
    })
    .catch(err => {
      status = 'error';
      result = err;
    });

  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    }
  };
}