import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STUDENT_LIST_BASE_URL } from "../../constant";

const initialState = {
  sudentList: {
    data: [],
    isLoading: false,
    isError: null,
  },
};

export const fetchData = createAsyncThunk("fetchData", async () => {
  try {
    const res = await axios.get(STUDENT_LIST_BASE_URL);
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data);
    } else if (error.request) {
      throw new Error("No response received");
    } else {
      throw new Error("Request Setup Error");
    }
  }
});


export const PostData = createAsyncThunk("postData", async ({ payload }) => {
  try {
    const res = await axios.post(STUDENT_LIST_BASE_URL, payload);
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data);
    } else if (error.request) {
      throw new Error("No response received");
    } else {
      throw new Error("Request Setup Error");
    }
  }
});


export const DeleteData = createAsyncThunk("deletedata", async ({ id }) => {
  try {
    const res = await axios.delete(STUDENT_LIST_BASE_URL + id);
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data);
    } else if (error.request) {
      throw new Error("No response received");
    } else {
      throw new Error("Request Setup Error");
    }
  }
});


export const UpdateData = createAsyncThunk("updatedata", async ({payload , id}) => {
  try {
    const res = await axios.put(STUDENT_LIST_BASE_URL + id, payload);
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data);
    } else if (error.request) {
      throw new Error("No response received");
    } else {
      throw new Error("Request Setup Error");
    }
  }
});

export const reduxSlice = createSlice({
  name: "sudentList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.sudentList.isLoading = true;
        state.sudentList.isError = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.sudentList.isLoading = false;
        state.sudentList.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.sudentList.isLoading = false;
        state.sudentList.isError = action.error.message;
      })
      .addCase(PostData.pending, (state) => {
        state.sudentList.isLoading = true;
        state.sudentList.isError = null;
      })
      .addCase(PostData.fulfilled, (state, action) => {
        state.sudentList.isLoading = false;
        state.sudentList.data = state.sudentList.data.concat(action.payload);
      })
      .addCase(PostData.rejected, (state, action) => {
        state.sudentList.isLoading = false;
        state.sudentList.isError = action.error.message;
      })
      .addCase(DeleteData.pending, (state) => {
        state.sudentList.isLoading = true;
        state.sudentList.isError = null;
      })
      .addCase(DeleteData.fulfilled, (state, action) => {
        state.sudentList.isLoading = false;
        state.sudentList.data = state.sudentList.data.filter(
          (val) => val.id !== action.payload.id
        );
      })
      .addCase(DeleteData.rejected, (state, action) => {
        state.sudentList.isLoading = false;
        state.sudentList.isError = action.error.message;
      })
      .addCase(UpdateData.pending, (state) => {
        state.sudentList.isLoading = true;
        state.sudentList.isError = null;
      })
      .addCase(UpdateData.fulfilled, (state, action) => {
        state.sudentList.isLoading = false;
        const index = state.sudentList.data.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.sudentList.data[index] = action.payload;
        }
      })
      .addCase(UpdateData.rejected, (state, action) => {
        state.sudentList.isLoading = false;
        state.sudentList.isError = action.error.message;
      })
  },
});

export default reduxSlice.reducer;
