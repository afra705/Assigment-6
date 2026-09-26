export const getAllWorkouts = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/data.json`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch workout data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching workouts:", error);
    return [];
  }
};