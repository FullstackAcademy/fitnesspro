import { useAuth } from "../auth/AuthContext";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";
import { Link } from "react-router-dom";

export default function RoutineList() {
  const {
    data: routines,
    loading,
    error,
  } = useQuery("/routines", "routines");

  if (loading || !routines) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <ul>
      {routines.map((routine) => (
        <Link to={`/routines/${routine.id}`} key={routine.id}>
        <RoutineListItem key={routine.id} routine={routine} />
        </Link>
      ))}
    </ul>
  );
}

function RoutineListItem({ routine }) {
  return (
    <li>
      <p>{routine.name}</p>
    </li>
  );
}