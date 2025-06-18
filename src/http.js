export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  if (!response.ok) {
    throw new Error("Failed to fetch places.");
  }

  const resData = await response.json();

  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {});
  if (!response.ok) {
    throw new Error("Failed to fetch places.");
  }

  const resData = await response.json();

  return resData.places;
}
