import { useState, useEffect } from "react"
import {useParams, Navigate, useNavigate, useLocation} from 'react-router-dom'
import Button from "./Button"

function TaskDetails(){
    const [loading, setLoading] = useState(true)
    const [task, setTasks] = useState({})
    const [error, setError] = useState(null)

    const params = useParams()
    const navigate = useNavigate()
    const {pathname} = useLocation()
    //const location = useLocation()

    useEffect(() => {
        const fetchTask = async () => {
            const res = await fetch(`http://localhost:5000/tasks/${params.id}`)
            if (res.status === 404){
                navigate('/')
                //setError('Task not found')
            }
            const data = await res.json()

            setTasks(data)
            setLoading(false)
        }
        fetchTask()
    }, [])

    /*if (error){
        return <Navigate to='/' />
    }*/

    return loading ? (
        <>
            <h3>Loading ...</h3>
            <p>{pathname}</p>
        </>
    ):(
        <div>
            <h3>{task.text}</h3>
            <p>{task.day}</p>
            <Button onClick={() => navigate(-1) } text="Go Back"/>
        </div>
    )
}


export default TaskDetails