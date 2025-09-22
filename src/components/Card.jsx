export function Card ({movie}){
    return(
        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-105 hover:shadow-xl transition transform duration-300 cursor-pointer">
            <img className="w-full h-[450px] object-cover"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
            alt={movie.title} />

            <div className="p-4">
                <h2 className="text-lg font-semibold line-clamp-2">{movie.title}</h2>
                <p className="text-yellow-400 mt-2">⭐{movie.vote_average}</p>
            </div>
        </div>
    )
}