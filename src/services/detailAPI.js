export const fetchDetail = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const json = await res.json();
  console.log(json);
  return json;
};
