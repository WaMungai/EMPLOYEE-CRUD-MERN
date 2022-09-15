import React,{useState}  from 'react'
import {useNavigate} from 'react-router'

function Create() {
    const [form,setForm] = useState({
        name:"",
        position:"", 
        level:""
    })
    const navigate = useNavigate()

    //method to update state properties
function updateForm(value){
    return setForm((prev) =>{
        return {...prev,...value};
    })
}
//function to handle submission 

async function onSubmit(e){
    e.preventDefault()

    //when a post request is sent to the create url, we'll add a new record to the database
    const newPerson = {...form}

    await fetch("http://localhost:5000/record/add",{
        methods:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(newPerson),
    })
    .catch(error =>{
        window.alert(error);
        return
    })
    setForm({name:"",position:"",level:""})
    navigate("/")
}
  return (
    <div>
        <h3>Create new reocrd</h3>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                type="text"
                className="form-control"
                id="name"
                value={form.name}
                onChange={(e) => updateForm({name:e.target.value})}/>
            </div>
            <div className="form-group">
                <label htmlFor="position">Position</label>
                <input
                type="text"
                className="form-control"
                id="position"
                value={form.position}
                onChange={(e) => updateForm({position:e.target.value})}/>
            </div>
            <div>
                <div className="form-check form-check-inline">
                    <input 
                    className="form-check-input"
                    type="radio"
                    name="positionOptions"
                    id="positionIntern"
                    value="Intern"
                    checked={form.levl === "Intern"}
                    onChange={(e) => updateForm({level:e.target.value})}
                    />
                    <label htmlFor="positionIntern" className="form-check-labek">Intern</label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                    className="form-check-input"
                    type="radio"
                    name="positionOptions"
                    id="positionJunior"
                    value="Junior"
                    checked={form.levl === "Junior"}
                    onChange={(e) => updateForm({level:e.target.value})}
                    />
                    <label htmlFor="positionJunior" className="form-check-labek">Junior</label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                    className="form-check-input"
                    type="radio"
                    name="positionOptions"
                    id="positionSenior"
                    value="Senior"
                    checked={form.levl === "Senior"}
                    onChange={(e) => updateForm({level:e.target.value})}
                    />
                    <label htmlFor="positionSenior" className="form-check-labek">Senior</label>
                </div>
            </div>
            <div className="form-group">
                <input 
                type="submit"
                value="Create person"
                className="btn btn-primary"
                />

            </div>
        </form>
    </div>
  )
}

export default Create