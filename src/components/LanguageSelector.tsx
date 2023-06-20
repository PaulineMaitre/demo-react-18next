import React from "react";
import { useTranslation } from "react-i18next";
import Select from 'react-select';

export const LanguageSelector: React.FC = () => {
    const {i18n} = useTranslation();

    const updateLanguage = (language: string): void => {
        i18n.changeLanguage(language)
    }

    const handleChange = (selectedOption: any): void => {
        updateLanguage(selectedOption.value)
    }

    const options = [
        {value: 'en', label: 'EN'},
        {value: 'fr', label: 'FR'}
    ]

    return (
        <div className={'absolute top-7 right-5'}>
            <Select
                defaultValue={i18n.language === 'en' ? options[0] : options[1]}
                onChange={handleChange}
                options={options}
            />
        </div>
    )
}