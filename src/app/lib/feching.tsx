export const getAllWorkouts = async()=>{
    const res = await fetch('http://localhost:3000//data.json');
    const data = res.json();
    return data;
}
// export const getAllDetails = async()=>{
//     const res = await fetch('http://localhost:3000//data.json');
//     const data = res.json();
//     return data;
// }