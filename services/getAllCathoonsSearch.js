export default async function getCatoonsSearch(id) {
    const url = `${process.env.BASE_URL}/cartoon_genre/search?genre=${id}`;

    try {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Failed to fetch cartoons: ${res.statusText}`);
        }

        const data = await res.json();

        if (!data || !data.payload) {
            throw new Error("Invalid API response: 'payload' property is missing");
        }

        return data.payload;    
    } catch (error) {

        throw error;
    }
}
