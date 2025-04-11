import { useState } from "react";

function AddTodoForm(props)
{
    const activityArr = props.activityArr;
    const setActivityArr = props.setActivityArr;

    const [newactivity, setNewactivity] = useState("")
    function handleChange(event)
    {
        setNewactivity(event.target.value)

    }
    function addActivity()
    {
        setActivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
        setNewactivity("")

    }
    return(
        <div className="flex flex-col gap-3" >
    <h1 className="text-2xl font-medium">Manage Activites</h1>

    <div>
    <input value={newactivity} onChange={handleChange}type = "text" className="border border-black rounded-md bg-transparent p-1" placeholder="Next Activity?"/>
    <button onClick={addActivity} className="border border-black rounded-md bg-black text-green-600  p-1 ">Add</button>
    </div>
    </div>
    )

}
export default AddTodoForm;