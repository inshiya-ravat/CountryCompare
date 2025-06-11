import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_PUBLIC_COUNTRY_BASE_URL}),
    endpoints: (builder) => ({
        getCountries: builder.query({
        query: (params) => {
            const queryString = new URLSearchParams(params).toString();
            return `/all?${queryString}`;
        },
        }),
        getCountryByName: builder.query({
            query: (name) => `/name/${name}`,
        }),
    }),
});

export const { useGetCountriesQuery, useGetCountryByNameQuery } = apiSlice;