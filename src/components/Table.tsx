import React from "react";
import { useTranslation } from "react-i18next";
import movies from '../data/movies.json'

interface Movie {
    year: number,
    title: string,
    director: string
}

export const Table: React.FC = () => {
    const {t} = useTranslation();

    return (
        <div className={'h-screen p-6 text-white'}>
            <table className={'w-[70%] mx-auto text-left table-fixed'}>
                <thead className={'bg-gray-200 text-gray-800'}>
                <tr>
                    <th className={'p-3'}>{t("header.year")}</th>
                    <th className={'p-3'}>{t("header.movie_title")}</th>
                    <th className={'p-3'}>{t("header.director")}</th>
                </tr>
                </thead>
                <tbody>
                {movies.map((movie: Movie, index: number) => (<tr
                    key={movie.title}
                    className={
                        'border-b border-b-primary-light last-of-type:border-b-0'
                    }
                >
                    <td className={'p-3'}>{movie.year}</td>
                    <td className={'p-3'}>{t(`titles.${movie.title.toLowerCase().replaceAll(' ', '_').replaceAll(',', '')}`)}</td>
                    <td className={'p-3'}>{t(movie.director)}</td>
                </tr>))}
                </tbody>
            </table>
        </div>
    )
}