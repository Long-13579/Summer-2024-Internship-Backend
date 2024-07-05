import * as cloudinaryRepo from "../repositories/cloudinary.js";

export function changeFilmPosterUrl(film) {
    const posterUrl = cloudinaryRepo.getUrl(film.poster);
    film.poster = posterUrl;
}

export function changeListFilmPosterUrl(films) {
    films.forEach(film => {
        changeFilmPosterUrl(film);
    });
}