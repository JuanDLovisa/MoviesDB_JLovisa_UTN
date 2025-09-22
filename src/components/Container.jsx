import { useState, useEffect } from "react";
import { Card } from "./Card";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export function Container() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    let url = "";

    if (search === "") {
      // Películas populares
      url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=${page}`;
    } else {
      // Búsqueda global
      url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-ES&query=${encodeURIComponent(search)}&page=${page}`;
    }

    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results || []);
        setTotalPages(data.total_pages || 1);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [search, page]);

  // 🔄 Resetear página al cambiar búsqueda
  useEffect(() => {
    setPage(1);
  }, [search]);

  return (
    <>
      <h1 className="text-3xl font-bold text-center p-4">Películas Populares</h1>

      {/* 🔎 Buscador */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Buscar película..."
          className="bg-slate-600 px-4 py-2 rounded-lg w-80 text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ⏳ Loading */}
      {loading ? (
        <p className="text-center text-xl">Cargando...</p>
      ) : (
        <>
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 px-4">
            {movies.length > 0 ? (
              movies.map((movie) => <Card key={movie.id} movie={movie} />)
            ) : (
              <p className="col-span-full text-center">No se encontraron resultados</p>
            )}
          </div>

          {/* 📄 Paginación */}
          {movies.length > 0 && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                className="cursor-pointer px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 disabled:opacity-50"
                disabled={page === 1}
                onClick={() => setPage((prev) => prev - 1)}
              >
                ◀ Anterior
              </button>

              <span className="text-lg font-semibold">
                Página {page} de {totalPages}
              </span>

              <button
                className="cursor-pointer px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 disabled:opacity-50"
                disabled={page === totalPages}
                onClick={() => setPage((prev) => prev + 1)}
              >
                Siguiente ▶
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
}