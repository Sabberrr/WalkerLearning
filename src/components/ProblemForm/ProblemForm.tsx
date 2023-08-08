import { useState } from "react"
export default function ProblemForm() {
    const [problemInput, setProblemInput] = useState("")
    return (
        <div className="problem_form">
            <input className="problem_input" onChange={(e) => setProblemInput(e.target.value)}/>
            <div>
                <img src={`${process.env.PROD_PORT}&input=solve+${problemInput}`}/>
            </div>
        </div>
    )
}