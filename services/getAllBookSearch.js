export default async function   getAllBookSearch(id) {
    const url = `${process.env.BASE_URL}/book_category/search?query=${id}`;
    console.log("Fetching from:", url);

    try {
        const res = await fetch(url);
        console.log("Response status:", res.status);

        if (!res.ok) {
            throw new Error(`Failed to fetch cartoons: ${res.statusText}`);
        }

        const data = await res.json();
        console.log("Fetched Data:", data); 
        if (!data || !data.payload) {
            throw new Error("Invalid API response: 'payload' property is missing");
        }

        return data.payload;    
    } catch (error) {
        console.error("API Fetch Error:", error);
        throw error;
    }
}
