"use client";

import { useTranslation } from "react-i18next";
import "../../i18n";
import HeaderMessage from "../components/HeaderMessage";
import LanguageSwitcher from "../components/LanguageSwitcher";
import {FiAlertCircle} from "react-icons/fi";
import {CgProfile} from "react-icons/cg";

export default function CustomerSummaryPanel() {
    const { t, i18n } = useTranslation();

    return(
        <div>
            <HeaderMessage
                title="Customer summary panel - in progress"
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
            {/* Customer summary panel */}
            <div className="rounded-lg bg-white p-4 shadow-xs border border-gray-200 lg:w-1/5">
                {/* Alerts */}
                <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 rounded-sm bg-orange-100 p-3">
                        <FiAlertCircle className="text-red-800" />
                        <span className="text-red-800">{t("pages.customerSummaryPanel.alerts.nameAddressProtection")}</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-sm bg-orange-100 p-3">
                        <FiAlertCircle className="text-red-800" />
                        <span className="text-red-800">{t("pages.customerSummaryPanel.alerts.inArrears")}</span>
                    </div>
                </div>

                {/* General Section */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-sm">▼</span>
                        <h2 className="text-lg font-semibold">{t("pages.customerSummaryPanel.sections.general.title")}</h2>
                    </div>

                    <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                            
                            <span className="text-blue-400 text-2xl"><CgProfile/></span>
                            <span className="font-semibold">Customer name (Age)</span>
                        </div>
                    </div>
                    <div className="grid grid-cols gap-y-2 gap-x-4 text-sm mb-4">
                        <span className="text-gray-600">{t("common.fields.customerNumber")}:</span>
                        <span className="text-gray-600">{t("common.fields.cpr")}:</span>
                        <span className="text-gray-600">{t("common.fields.phone")}:</span>
                        <span className="text-gray-600">{t("common.fields.email")}:</span>
                        <span className="text-gray-600">{t("common.fields.address")}:</span>
                    </div>

                    {/* Economy */}
                    <h3 className="text-md font-semibold mb-2">{t("pages.customerSummaryPanel.sections.general.economy.title")}</h3>
                    <div className="grid grid-cols gap-y-2 gap-x-4 text-sm mb-4">
                        <span className="text-gray-600">{t("pages.customerSummaryPanel.sections.general.economy.totalPremium")}</span>
                    </div>

                    {/* Relations */}
                    <h3 className="text-md font-semibold mb-2">{t("pages.customerSummaryPanel.sections.general.relations.title")}</h3>
                    <div className="space-y-2 mb-4">
                        <div className="text-sm">
                            <span className="">Relation type (dynamic)<br/><span className="text-gray-600">Gitte Nielsen Vendelboe (1980)</span></span>
                        </div>
                    </div>

                    {/* Company Information */}
                    <h3 className="text-md font-semibold mb-2">{t("pages.customerSummaryPanel.sections.general.companyInformation.title")}</h3>
                    <div className="grid grid-cols gap-y-2 text-sm mb-4">
                        <span className="text-gray-600">{t("common.fields.agency")}</span>
                        <span className="text-gray-600">{t("common.fields.caseworker")}</span>
                    </div>

                    {/* Other Information */}
                    <h3 className="text-md font-semibold mb-2">{t("pages.customerSummaryPanel.sections.general.otherInformation.title")}</h3>
                    <div className="grid grid-cols gap-y-2 text-sm mb-4">
                        <span className="text-gray-600">{t("pages.customerSummaryPanel.sections.general.otherInformation.numberOfActivePolicies")}</span>
                        <span className="text-gray-600">{t("pages.customerSummaryPanel.sections.general.otherInformation.numberOfOffers")}</span>
                        <span className="text-gray-600">{t("pages.customerSummaryPanel.sections.general.otherInformation.addressProtection")}</span>
                        <span className="text-gray-600">{t("pages.customerSummaryPanel.sections.general.otherInformation.advertisingProtection")}</span>
                        <span className="text-gray-600">{t("pages.customerSummaryPanel.sections.general.otherInformation.preferredChannel")}</span>
                    </div>
                    <div className="mt-6 h-px w-full bg-zinc-200 mb-4" />
                </div>

                {/* Consents */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-sm">▼</span>
                        <h2 className="text-lg font-semibold">{t("pages.customerSummaryPanel.sections.consents.title")}</h2>
                    </div>

                    <h3 className="text-md font-semibold mb-2">{t("pages.customerSummaryPanel.sections.consents.generalConsents.title")}</h3>
                    <div className="grid grid-cols gap-y-2 text-sm mb-4">
                        <span className="text-gray-600">{t("pages.customerSummaryPanel.sections.consents.generalConsents.marketing")}</span>
                        <span className="text-gray-600">{t("pages.customerSummaryPanel.sections.consents.generalConsents.PersonalData")}</span>
                    </div>
                    <h3 className="text-md font-semibold mb-2">{t("pages.customerSummaryPanel.sections.consents.activeConsentsForOffers.title")}</h3>
                    <div className="grid grid-cols gap-y-2 text-sm mb-4">
                        <span className="text-gray-600">{t("pages.customerSummaryPanel.sections.consents.activeConsentsForOffers.informationOtherCompanies")}</span>
                        <span className="text-gray-600">{t("pages.customerSummaryPanel.sections.consents.activeConsentsForOffers.cancellationOtherCompanies")}</span>
                    </div>
                    <div className="mt-6 h-px w-full bg-zinc-200 mb-4" />
                </div> 

                {/* Portfolio */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-sm">▼</span>
                        <h2 className="text-lg font-semibold">{t("pages.customerSummaryPanel.sections.portfolio.title")}</h2>
                    </div>
                </div>
             </div>   
            <LanguageSwitcher />
        </div>
    )

}