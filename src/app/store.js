import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "../features/postSlice";


const store = configureStore({
  reducer: {
    post: PostSlice.reducer
  }
});
export default store
