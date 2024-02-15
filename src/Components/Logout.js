import { Link } from "react-router-dom";

export default function Logout(){
    return(
        <div className="mt-4 flex justify-end">
          <Link to="/" className="inline-flex items-center px-3 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-700">
            Logout
          </Link>
        </div>
    );
}