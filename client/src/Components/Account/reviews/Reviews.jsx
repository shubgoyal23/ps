import axios from "axios";
import React, { useEffect, useState } from "react";
import conf from "../../../service/conf/conf";
import ReviewCard from "./ReviewCard";

function Reviews() {
  const [reviewDate, setReviewData] = useState([]);
  useEffect(() => {
    axios
      .get(`${conf}/api/v1/reviews/list`, {}, { withCredentials: true })
      .then((res) => {
        setReviewData(res.data?.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (<div>
    <h1 className="text-xl font-semibold underline">All reviews</h1>
    <ReviewCard />
  </div>)
}

export default Reviews;
