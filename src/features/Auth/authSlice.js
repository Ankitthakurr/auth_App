import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import services from "./authService";

let userExist = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
  name: "AUTH",
  initialState: {
    user: userExist ? userExist : null,
    isLoading: false,
    isError: false,
    isSucces: false,
    message: "",
  },
  
  reducers: {
    logout: (state,action) => {
     localStorage.clear();
     return{
      ...state,
      user : null
     }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(register.pending, (state, action) => {
      return {
        ...state,
        isLoading : true,
      };
    });
    builder.addCase(register.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading : false,
        user: action.payload,
        isSucces: true,
      };
    });
    builder.addCase(register.rejected, (state, action) => {
      return {
        ...state,
        isLoading : false,
        isError : true,
        message : action.error.message
      };
    });
    builder.addCase(login.pending, (state, action) => {
      return {
        ...state,
        isLoading : true,
      };
    });
    builder.addCase(login.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading : false,
        user: action.payload,
        isSucces: true,
      };
    });
    builder.addCase(login.rejected, (state, action) => {
      return {
        ...state,
        isLoading : false,
        isError : true,
        message : action.error.message
      };
    });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;

export const register = createAsyncThunk("REGISTER", async (formdata,thunkApi) => {
  try {
    return services.Register(formdata);
  } catch (error) {
  return thunkApi.rejectWithValue(message)
  }
});

export const login = createAsyncThunk("LOGIN", async (formdata,thunkApi) => {
  try {
    return services.Login(formdata);
  } catch (error) {
  return thunkApi.rejectWithValue(message)
  }
});
