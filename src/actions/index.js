export const ADD_COMPANY_TO_FAVORITES = "ADD_COMPANY_TO_FAVORITES";
export const REMOVE_COMPANY_FROM_FAVORITES = "REMOVE_COMPANY_FROM_FAVORITES";
export const GET_JOBS = "GET_JOBS";

export const removeFavoriteCompanyAction = (index) => ({
  type: REMOVE_COMPANY_FROM_FAVORITES,
  payload: index,
});

export const addFavoriteCompanyAction = (company) => ({
  type: ADD_COMPANY_TO_FAVORITES,
  payload: company,
});

export const getJobsAction = (searchQuery, searchParameter, skip) => {
  return async (dispatch) => {
    // let searchParameter = "title";
    // let searchQuery = "developer";
    // let skip = "0";
    try {
      let response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?${searchParameter.toLowerCase()}=${searchQuery}&limit=10&offset=${skip}`
      );
      if (response.ok) {
        let jobs = await response.json();
        dispatch({
          type: "GET_JOBS",
          payload: jobs.data,
        });
      } else {
        console.log("error");
      }
    } catch (error) {}
  };
};
