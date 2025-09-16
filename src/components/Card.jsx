export function Card ({movie}){
    return(
        <div className="">
            <img className=""
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
            alt={movie.title} />

            <div className="">
                <h2 className="">{movie.title}</h2>
                <p className="">{movie.vote_range}</p>
            </div>
        </div>
    )
}