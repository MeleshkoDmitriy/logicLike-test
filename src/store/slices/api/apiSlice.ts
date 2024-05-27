import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { BASE_URL } from "../../../api/url";
export const BASE_URL = 'https://logiclike.com/docs/';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['courses'],
  endpoints: (builder) => ({
    getCoursesWithParams: builder.query({
      query: (params) => {
        let url = '/courses.json';
        if (params) {
          url += `?tags=${encodeURIComponent(params)}`;
        }
        return {
          url,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetCoursesWithParamsQuery } = apiSlice;

