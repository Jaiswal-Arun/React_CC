function Button ({color,handlecolor}) {
    return (
        <button id = {color} className="btn outline-none px-4 py-1 rounded-full text-white shadow-lg hover:opacity-80 hover:brightness-110 hover: cursor-pointer" style={{backgroundColor:color}} onClick={(e) => handlecolor(e.target.id)}> {color} 
        </button>
    )
}

export default Button












