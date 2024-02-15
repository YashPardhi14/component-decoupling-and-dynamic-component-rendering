import { Link } from "react-router-dom"


export default function LoginFailed(){

    return(
<div>
<p className="text-lg text-gray-700">Please log in to access the homepage.</p>
<Link to="/" className="inline-flex items-center px-3 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-700">
           Go to LogIn Page!
          </Link>
</div>
    )
}