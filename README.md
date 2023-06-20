# Demo react-i18next

## Install i18n libraries

Run these lines to install i18n libraries
```bash
npm install react-i18next i18next --save
npm install i18next-http-backend i18next-browser-languagedetector --save
```

## Set up i18n.js file

In `src` folder, create a `i18n.js` file :

```js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false,
        }
    });


export default i18n;
```

Backend will allow you to import translations for external files.

Then, import i18n in your `index.tsx` file:

```js
import './i18n'
```

## Create translation tables

In the `public` folder, create one folder by language, and one `translation.json` file into each one of them.
The tree will look like this:

```
├───public
│   ├───locales
│           ├───en
│               ├───translations.json
│           ├───fr
│               ├───translations.json
```

You can add as many languages as you want.
In each one of your `translations.json` files, put your translations like this:

```json
{
  "app_name": "Cannes winners",
  "header": {
    "year": "Year",
    "movie_title": "Movie title",
    "director": "Director"
  },
  "titles": {
    "anatomy_of_a_fall": "Anatomy of a Fall",
    "triangle_of_sadness": "Triangle of Sadness",
    "titane": "Titane",
    "parasite": "Parasite",
    "shoplifters": "Shoplifters",
    "the_square": "The Square",
    "i_daniel_blake": "I, Daniel Blake",
    "dheepan": "Dheepan",
    "winter_sleep": "Winter Sleep",
    "blue_is_the_warmest_colour": "Blue Is the Warmest Colour"
  }
}
```

## Translate your content

Use the useTranslation hook to retrieve content with its key:

```tsx
import React from "react"
import { useTranslation } from 'react-i18next'
import { LanguageSelector } from "./LanguageSelector"

export const Example: React.FC = () => {
    const { t, i18n } = useTranslation()
    return (
       <div>
          {t('app_name')}
       </div>
    )
}
```

## Sources

https://react.i18next.com/latest/using-with-hooks