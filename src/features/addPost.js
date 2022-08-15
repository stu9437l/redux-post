import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addpost } from "./postSlice";

const AddPost = () => {
  const [payload, setPayload] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  const dispatch = useDispatch()
  const savePost =()=>{
    if(payload.title && payload.content){
      dispatch(addpost(payload.title,payload.content))
      payload.title("")
      payload.content("")
    }  
  }

  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-6  mx-auto">
            <h5> Add New Blogs</h5>
              <div className="mb-4">
                <label htmlFor="title">Write Title</label>
                <input
                  className="form-control"
                  type="text"
                  name="title"
                  value={payload.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="content">Write Content</label>
                <textarea
                  className="form-control"
                  type="text"
                  name="content"
                  rows={5}
                  value={payload.content}
                  onChange={handleChange}
                  required
                />
              </div>
              <button onClick={savePost}  className="btn btn-primary btn-lg w-100 d-block">
                Add Block
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
