import axios from "axios";

export const setLoaded = (payload) = ({
  type: 'SET_LOADED',
  payload, 
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });
  axios
  .get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`,)
  .then(({ data }) => {
    dispatch(setPizzas(data));
  })
  .catch(() => {
    console.log('не удалось загрузить все пиццы');
  });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});

