export default async function autoComplete(body: string) {
  const url = `${process.env.NEXT_PUBLIC_RAPIDAPI_BASE_URL}/products/auto-complete`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY as string,
    },
    params: {
      q: body,
    },
  };

  return fetch(url, options)
    .then((response) => response.json())
}
