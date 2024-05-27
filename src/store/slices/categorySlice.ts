import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { categories } from "../../constants/constants";
import { TCourse } from "../../types/types";
import { COURSE_URL } from "../../api/url";

export const fetchData = createAsyncThunk(
  'category/fetchData',
  async (_, thunkApi) => {
    try {
      const response = await fetch(COURSE_URL);
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    } 
  }
)

interface IInitialState {
  categoryName: string | undefined;
  categoryIndex: number;
  initialCourses: TCourse[] | undefined;
  courses: TCourse[] | undefined;
  isLoading: boolean;
}

const initialState: IInitialState = {
  categoryName: '',
  categoryIndex: 0,
  initialCourses: [],
  courses: [],
  isLoading: false,
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, { payload }) => {
      if (payload === 0) {
        state.categoryName = '';
        state.categoryIndex = 0;
        state.courses = state.initialCourses;
      } else {
        state.categoryIndex = payload;
        state.categoryName = categories.at(payload);
        state.courses = state.initialCourses?.filter((course) => course.tags.includes(state.categoryName ?? ''));
      }
    },
  },
  extraReducers: (builder) => {
    builder
     .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
     .addCase(fetchData.fulfilled, (state, action: PayloadAction<TCourse[]>) => {
        state.initialCourses = action.payload;
        state.courses = action.payload;
        state.isLoading = false;
      })
     .addCase(fetchData.rejected, (state) => {
        state.isLoading = false;
      })
  }
})

export const selectCategory = (state: { category: IInitialState }) => state.category;

export const { 
  setCategory,
} = categorySlice.actions;

export default categorySlice.reducer;