export default  async  function  getAllBookByCategories(){
    const res = await fetch(`${process.env.BASE_URL}/book_category`);
    if (!res.ok) {
        throw new Error(`Failed to fetch books: ${res.statusText}`);
    }
    const data = await res.json();
    if (!data ||!data.payload) {
        throw new Error("Invalid API response: 'books' property is missing");
    }
    return data;
 
}