import axios from "../config/api";

export function addProduct(dispatch, url, newProduct, contextName) {
  axios({
    url: url,
    method: "POST",
    headers: {
      access_token: localStorage.access_token,
    },
    data: newProduct,
  })
    .then(() => {
      return dispatch(contextName);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function fetchProduct(commit, url, mutation) {
  axios({
    url: url,
    method: "GET",
  })
    .then(({ data }) => {
      return commit(mutation, data);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function editProduct(dispatch, url, newProduct, contextName) {
  axios({
    url: `${url}/${newProduct.id}`,
    method: "PUT",
    headers: {
      access_token: localStorage.access_token,
    },
    data: newProduct,
  })
    .then(() => {
      return dispatch(contextName);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function deleteProduct(dispatch, url, contextName) {
  axios({
    url: `${url}/${newProduct.id}`,
    method: "DELETE",
    headers: {
      access_token: localStorage.access_token,
    },
  })
    .then(() => {
      return dispatch(contextName);
    })
    .catch((err) => {
      console.log(err);
    });
}
