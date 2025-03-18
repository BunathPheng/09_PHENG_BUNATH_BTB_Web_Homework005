export default  async  function  getAllCartoonsByCategories(){
    const res = await fetch(`${process.env.BASE_URL}/cartoon_genre`);
    if (!res.ok) {
        throw new Error(`Failed to fetch books: ${res.statusText}`);
    }
    const data = await res.json();
    if (!data ||!data.payload) {
        throw new Error("Invalid API response: 'books' property is missing");
    }
    return data;
 
}