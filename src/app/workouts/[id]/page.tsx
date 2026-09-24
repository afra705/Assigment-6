interface IDetailsProps{
    params:Promise<{
        id: string,
    }>
}

const WorkoutDetails = async({params}:IDetailsProps) => {

    const {id} = await params;
     const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    const data = res.json();

    return (
        <div className="white">
            <h1 >details</h1>
        </div>
    );
};

export default WorkoutDetails;