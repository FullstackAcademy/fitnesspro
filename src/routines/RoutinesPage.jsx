import { useAuth } from "../auth/AuthContext";
import RoutineForm from "../components/RoutineForm";
import RoutineList from "../components/RoutineList";


export default function RoutinesPage() {
    const { token } = useAuth();
    
    return (
        <>
        <h1>Routines</h1>
        <RoutineList />
        {token && <RoutineForm />}
        </>
    );
    }