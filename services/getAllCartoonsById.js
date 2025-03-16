export default async function getAllCartoonById(id) {
    const res = await fetch(`${process.env.BASE_URL}/cartoon/${id}`);
    if (!res.ok) {
        throw new Error(`Failed to fetch book: ${res.statusText}`);
    }
    const data = await res.json();
    if (!data ||!data.payload) {
        throw new Error("Invalid API response: 'book' property is missing");
    }
    return data.payload;
}