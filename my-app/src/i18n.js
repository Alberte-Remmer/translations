import i18n from "i18next"; //Selve motoren der håndterer sprog, keys, fallback osv.
import { initReactI18next } from "react-i18next"; //Binder i18next til React, så vi kan bruge det i vores komponenter (hooks som useTranslation)

import da from "./locales/da/translations.json"; //Importerer vores danske oversættelser
import en from "./locales/en/translations.json"; //Importerer vores engelske oversættelser

const resources = {
    da:{ "translation": da },//Samler vores danske oversættelser under "da" namespace
    en:{ "translation": en }//Samler vores engelske oversættelser under "en" namespace
};

if (!i18n.isInitialized){ //Tjekker om i18n allerede er initialiseret for at undgå dobbelt initialisering
    i18n.use(initReactI18next).init({ //Initialiserer i18n med React integration
        resources, //Tilføjer vores oversættelsesressourcer
        lng: "da", //Sætter standard sproget til dansk
        fallbackLng: "en", //Sætter fallback sprog til engelsk, hvis en oversættelse mangler
        interpolation: {
            escapeValue: false //Deaktiverer escaping, da React allerede håndterer det (React escaper allerede)
            // Escaping tvinger tekst til at blive behandlet som tekst (ikke HTML/JS).
        },
    });
}

export default i18n; //Eksporterer den konfigurerede i18n instans, så den kan bruges i resten af appen