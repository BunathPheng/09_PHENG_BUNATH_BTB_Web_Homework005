export default async function getAllCatoons() {
    try {
        const res = await fetch(`${process.env.BASE_URL}/cartoon`);
        if (!res.ok) {
            throw new Error(`Failed to fetch books: ${res.statusText}`);
        }

        const data = await res.json();
       
        if (!data || !data.payload) {
            throw new Error("Invalid API response: 'books' property is missing");
        }

        return data.payload;
    } catch (err) {
    
        console.error("Error fetching books:", err.message);
        throw err;
    }
}