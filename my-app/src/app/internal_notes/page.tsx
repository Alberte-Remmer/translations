"use client";

import { useTranslation } from "react-i18next";
import "../../i18n";
import HeaderMessage from "../components/HeaderMessage";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function InternalNotes() {
    const { t, i18n } = useTranslation();

    return(
        <div>
            <HeaderMessage
                title="Internal notes - in progress"
                text={
                    <>
                    Follow this link if you want to see the layout in Figma:{" "}
                    <a
                        className="underline text-blue-600 hover:text-blue-800"
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Missing Figma link
                    </a>  
                    </>
                }
            />

            <div>
                
            </div>

            <LanguageSwitcher />
        </div>
    )
}   