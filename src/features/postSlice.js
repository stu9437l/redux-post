import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { formatDistanceToNow } from "date-fns";

const initialState = [
  {
    title: "Written tutorials and how to’",
    content:
      "Tutorials and how-to guides are a great way to engage your audience and educate them in a single blog post. Plus, they’re easy to work on too since you’re already familiar with the topic.",
    time: formatDistanceToNow(
      new Date(),
      { minutes: 10 },
      { includeSeconds: true }
    ).toString(),
  },
  {
    title: "Written tutorials and how to’",
    content:
      "Tutorials and how-to guides are a great way to engage your audience and educate them in a single blog post. Plus, they’re easy to work on too since you’re already familiar with the topic.",
    time: formatDistanceToNow(
      new Date(),
      { minutes: 5 },
      { includeSeconds: true }
    ).toString(),
  },
  {
    title: "Written tutorials and how to’",
    content:
      "Tutorials and how-to guides are a great way to engage your audience and educate them in a single blog post. Plus, they’re easy to work on too since you’re already familiar with the topic.",
    time: formatDistanceToNow(
      new Date(),
      { minutes: 2 },
      { includeSeconds: true }
    ).toString(),
  },
];

const PostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addpost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            time: formatDistanceToNow(new Date(), {
              includeSeconds: true,
            }).toString(),
          },
        };
      },
    },
  },
});
export const selectCount = (state) => state.posts.value;

export const { addpost } = PostSlice.actions;

console.log(selectCount);

export default PostSlice;
