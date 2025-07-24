import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../auth/AuthContext";
import useMutation from "../api/useMutation";


const fetchActivityDetails = async (id) => {
  const response = await fetch(`activities/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

const ActivityDetails = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery({
    queryKey: ["activity", id],
    queryFn: () => fetchActivityDetails(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>Duration: {data.duration} minutes</p>
      <p>Calories Burned: {data.calories} kcal</p>
    </div>
  );
};
export default ActivityDetails;

function deleteActivity() {
    const { token } = useAuth();
    const {
      mutate: deleteActivity,
      loading,
      error,
    } = useMutation("DELETE", "/activities/" + activity.id, ["activities"]);

    return (
      <li>
        {token && (
          <button onClick={() => deleteActivity()}>
            {loading ? "Deleting" : error ? error : "Delete"}
          </button>
        )}
      </li>
    );
}