"use client";

import { useTranslation } from "react-i18next";
import "../../i18n";
import HeaderMessage from "../components/HeaderMessage";
import LanguageSwitcher from "../components/LanguageSwitcher";
import {BsArrowRight} from "react-icons/bs";

export default function LandingPage() {
  const { t, i18n } = useTranslation();

  return (
    <div>
        <HeaderMessage
           title="Landing page"
            text={
              <>
                Follow this link if you want to see the layout in Figma:{" "}
                <a
                  className="underline text-blue-600 hover:text-blue-800"
                  href="https://www.figma.com/design/L2gQRXE7PNO5Q3q1qEkns3/Policy360?node-id=3575-6132&t=R2z8XzH7S8FGRm6i-4"
                  target="_blank"
                  rel="noreferrer"
                  >
                  Figma link
                </a>
              </>
            }
          />

        {/* Topbar */}
        <div className="mb-6 flex items-center justify-end rounded-lg bg-white p-4 shadow-sm border border-gray-200">
          <div className="flex items-center gap-2">
            <input
              className="rounded-md border border-zinc-200 px-3 py-2 text-sm"
              placeholder={t("pages.landingPage.layout.topbar.search.placeholder")}
            />
            <button className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              {t("pages.landingPage.layout.topbar.buttons.search")}
            </button>
          </div>
        </div>

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="text-2xl font-bold">
            {t("pages.landingPage.header.welcome", { name: "Henriette" })}
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-md border border-zinc-200 px-3 py-2 text-sm font-semibold hover:bg-gray-50">
              {t("pages.landingPage.layout.topbar.buttons.createNewCustomer")}
            </button>
            <button className="rounded-md border border-zinc-200 px-3 py-2 text-sm font-semibold hover:bg-gray-50">
              {t("pages.landingPage.layout.topbar.buttons.goToClaims")}
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Recent Customers Card */}
          <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">{t("pages.landingPage.cards.recentCustomers.title")}</h2>
              <a href="#" className="flex items-center gap-2 text-sm p-2  hover:underline border rounded-md border-blue-200 border-2">
                {t("pages.landingPage.cards.recentCustomers.cta")} <span className="text-blue-300 text-lg "><BsArrowRight/></span>
              </a>
            </div>
            <div className="space-y-1">
              <div className="grid grid-cols-3 gap-4 pb-3 border-b border-gray-200">
                <span className="text-sm font-semibold text-gray-600">{t("pages.landingPage.cards.recentCustomers.table.columns.name")}</span>
                <span className="text-sm font-semibold text-gray-600">
                  {t("pages.landingPage.cards.recentCustomers.table.columns.customerNumber")}
                </span>
                <span className="text-sm font-semibold text-gray-600">
                  {t("pages.landingPage.cards.recentCustomers.table.columns.lastVisited")}
                </span>
              </div>
              <div className="pt-2">
                <div className="grid grid-cols-3 gap-4 py-2 text-sm">
                  <span>John Doe</span>
                  <span>123456</span>
                  <span>26-02-2026</span>
                </div>
                <div className="grid grid-cols-3 gap-4 py-2 text-sm">
                  <span>Jane Smith</span>
                  <span>789012</span>
                  <span>25-02-2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* My Tasks Card */}
          <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">{t("pages.landingPage.cards.myTasks.title")}</h2>
             <a href="#" className="flex items-center gap-2 text-sm p-2 hover:underline border rounded-md border-blue-200 border-2">
                {t("pages.landingPage.cards.myTasks.cta")} <span className="text-blue-300 text-lg "><BsArrowRight/></span>
              </a>
            </div> 
            <div className="text-gray-500 text-sm">
              No tasks yet
            </div>
          </div>
        </div>

        <LanguageSwitcher />
      </div>
  );
}
