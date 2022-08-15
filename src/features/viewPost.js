import React from "react";
import { useSelector } from "react-redux";

const ViewPost = () => {

    const allPosts= useSelector(state=>state.post)

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
            {
                allPosts.map((value,index)=>{
                    return (
                        <div className="col-4 mb-4 mb-3" key={index}>
                        <div className="card shadow">
                          <div className="card-body">
                            <h5 className="fw-bolder text-primary">{value.title}</h5>
                            <p className="mb-3 text-secondary">{value.content}</p>
                            <p className="text-end mb-0 text-secondary" style={{fontSize:"10px"}}>
                                {value.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                })
            }
         
        </div>
      </div>
    </section>
  );
};

export default ViewPost;
