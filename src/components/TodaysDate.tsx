import React from "react";
import { useTranslation } from "react-i18next";
import {DateHelper} from "../services/DateHelper";

export const TodaysDate: React.FC = () => {
    const {i18n} = useTranslation();

    const FRENCH_PATTERN = 'dd-MM-yyyy'
    const ENGLISH_PATTERN = 'MM-dd-yyyy'


    const getCurrentDate = (): any => {
        return DateHelper.formatToLocalString(Date.now(), i18n.language === 'fr' ? FRENCH_PATTERN : ENGLISH_PATTERN)
    }

    return (
        <div className={'absolute left-5 top-8 text-white text-lg font-bold'}>
            {getCurrentDate()}
        </div>
    )
}