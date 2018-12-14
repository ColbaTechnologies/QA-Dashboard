import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_ROOT_URL
});

axios.defaults.headers.common["Accept"] = "application/json;api-version=1.0";

export const DataSource = options => {
  const onSuccess = response => {
    return options.params && options.params.withHeader
      ? response
      : response.data;
  };

  const onError = error => {
    console.log(error);
    return Promise.reject(error.response || error.message);
  };

  if (options.config && options.config.handleError === false) {
    return client(options).then(onSuccess);
  }
  return client(options)
    .then(onSuccess)
    .catch(onError);
};
