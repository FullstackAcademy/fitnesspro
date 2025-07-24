import useMutation from "../api/useMutation";

export default function RoutineForm() {
  const {
    mutate: add,
    loading,
    error,
  } = useMutation("POST", "/routines", ["routines"]);

  const addRoutine = (formData) => {
    const name = formData.get("name");
    const goal = formData.get("goal");
    const isPublic = formData.get("isPublic") === "on";
    add({ name, goal, isPublic });
  };

  return (
    <>
      <h2>Add a new routine</h2>
      <form action={addRoutine}>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Goal
          <input type="text" name="goal" />
        </label>
        <label>
          Public
          <input type="checkbox" name="isPublic" />
        </label>
        <button>{loading ? "Adding..." : "Add routine"}</button>
        {error && <output>{error}</output>}
      </form>
    </>
  );
}