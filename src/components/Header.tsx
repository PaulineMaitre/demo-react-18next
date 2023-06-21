import React from "react"
import { useTranslation } from 'react-i18next'
import { LanguageSelector } from "./LanguageSelector"
import {TodaysDate} from "./TodaysDate";

export const Header: React.FC = () => {

    const {t} = useTranslation()

    return (
        <div className={'bg-[#5bbaad] h-24 flex justify-center items-center'}>
            <TodaysDate />
            <span className={'text-5xl text-white'}
                  style={{ fontFamily: 'LT Diploma' }}
            >
                {t('app_name')}
            </span>
            <LanguageSelector/>
        </div>
    )
}