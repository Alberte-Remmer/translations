"use client";

import { useTranslation } from "react-i18next";
import "../../i18n";
import HeaderMessage from "../components/HeaderMessage";
import LanguageSwitcher from "../components/LanguageSwitcher";
import {HiInformationCircle} from "react-icons/hi";
import {CgProfile} from "react-icons/cg";
import {RiAlertFill} from "react-icons/ri";

export default function NewCustomerPage() {
    const { t, i18n } = useTranslation();
    return(
        <div>
            <HeaderMessage
                title="New customer page - in progress"
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

            <div className="flex gap-6 mb-6">
                {/* Form for creating a new customer (Existing) */}
                <div className="p-8 max-w-lg">

                {/* Create new customer flow title */} 
                <h1 className="text-xs mb-2">Create new customer (Existing)*</h1>

                {/* Title */} 
                <h1 className="text-2xl font-bold mb-8">{t("pages.newCustomer.title")}</h1>

                {/* Get information section */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                    <h2 className="text-lg mb-4">{t("pages.newCustomer.fetchInfo.heading")}</h2>

                    <div className="mb-4">
                        {/* Radio buttons */}
                        <label className="flex items-center mb-2" >
                        <input type="radio" name="customerType" className="mr-2" defaultChecked />
                        <label className="text-sm">{t("pages.newCustomer.fetchInfo.customerType.private")}</label>
                        </label>
                        <label className="flex items-center mb-2">
                        <input type="radio" name="customerType" className="mr-2"/>
                        <label className="text-sm">{t("pages.newCustomer.fetchInfo.customerType.commercial")}</label>
                        </label>
                    </div>

                    {/* CPR input and Get button */}
                    <div className="flex gap-2 mb-4">
                        <input
                        type="text"
                        placeholder={t("pages.newCustomer.searchField.placeholder")}
                        className="flex-1 border border-gray-300 rounded-md px-3 py-2"
                        />
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">{t("common.buttons.get")}</button>
                    </div>

                    {/* Checkbox for adress protection */}
                    <label className="flex items-center mb-4">
                        <input type="checkbox" className="mr-2"/>
                        <span className="text-sm">{t("pages.newCustomer.addressProtection")}</span>
                    </label>

                    {/* Alert message */}
                    <div className=" bg-blue-50 rounded-md p-4 mb-4">
                        <div className="flex gap-3">
                            <HiInformationCircle className="text-blue-500 text-2xl" />
                            <div>
                               <h3 className="text-blue-500 text-sm">{t('pages.newCustomer.alerts.customerExists.title')}</h3>
                                <p className="text-blue-900 text-sm">{t('pages.newCustomer.alerts.customerExists.description')}</p> 
                            </div>
                        </div>
                    </div>

                    {/* Customer info card */}
                    <div className="bg-white border border-gray-200 rounded-md p-6 mb-6">
                        <div className="flex items-center gap-4 mb-6 ">
                           <span className="text-blue-500 text-4xl"><CgProfile/></span>
                                <div>
                                    <h3 className="font-bold text-sm">Niels Nielsen Vendelboe</h3>
                                    <span className="inline-block text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-2xl mt-1">{t("pages.newCustomer.fetchInfo.customerType.private")}</span>
                                </div>                           
                        </div>

                         {/* Customer details */}
                        <div className="space-y-3">
                            <div className="flex">
                                <span className="text-gray-700 text-sm w-32">{t('common.fields.customerNumber')}:</span>
                                <span className="text-sm">12 34 56 78</span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-700 text-sm w-32">{t('common.fields.cpr')}:</span>
                                <span className="text-sm">300179-4995</span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-700 text-sm w-32">{t('common.fields.phone')}:</span>
                                <span className="text-sm">+45 11 22 33 44</span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-700 text-sm w-32">{t('common.fields.email')}:</span>
                                <span className="text-sm">niels@example.com</span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-700 text-sm w-32">{t('common.fields.address')}:</span>
                                <span className="text-sm">Aldersrogade 8, 1234 København</span>
                            </div>
                        </div>
                    </div>
                    {/* Action buttons */}
                    <div className="flex gap-4">
                        <button className="border border-blue-500 text-gray-700 px-14 py-2 rounded-md hover:bg-gray-50">{t('common.buttons.cancel')}</button>
                        <button className="bg-blue-500 text-white px-12 py-2 rounded-md hover:bg-blue-600">{t('common.buttons.createCustomer')}</button>
                    </div>           
                </div>
                </div>
                {/* Form for creating a new customer (Not existing) */}
                <div className="p-8 max-w-lg">
                
                {/* Create new customer flow title */} 
                <h1 className="text-xs mb-2">Create new customer (Not existing)*</h1>

                {/* Title */} 
                <h1 className="text-2xl font-bold mb-8">{t("pages.newCustomer.title")}</h1>

                {/* Get information section */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                    <h2 className="text-lg mb-4">{t("pages.newCustomer.fetchInfo.heading")}</h2>

                    <div className="mb-4">
                        {/* Radio buttons */}
                        <label className="flex items-center mb-2" >
                        <input type="radio" name="customerType" className="mr-2" defaultChecked />
                        <label className="text-sm">{t("pages.newCustomer.fetchInfo.customerType.private")}</label>
                        </label>
                        <label className="flex items-center mb-2">
                        <input type="radio" name="customerType" className="mr-2"/>
                        <label className="text-sm">{t("pages.newCustomer.fetchInfo.customerType.commercial")}</label>
                        </label>
                    </div>

                    {/* CPR input and Get button */}
                    <div className="flex gap-2 mb-4">
                        <input
                        type="text"
                        placeholder={t("pages.newCustomer.searchField.placeholder")}
                        className="flex-1 border border-gray-300 rounded-md px-3 py-2"
                        />
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">{t("common.buttons.get")}</button>
                    </div>

                    {/* Checkbox for adress protection */}
                    <label className="flex items-center mb-4">
                        <input type="checkbox" className="mr-2"/>
                        <span className="text-sm">{t("pages.newCustomer.addressProtection")}</span>
                    </label>

                    {/* National registry address message */}
                    <div className=" border border-gray-200 shadow-sm rounded-md p-4 mb-4">
                        <div className="flex gap-3">
                            <div>
                               <h3 className="font-semibold text-sm">Anna vera Kristensen</h3>
                               <span className=" text-xs bg-gray-100 border border-gray-200  px-3 py-1 rounded-2xl mt-1">120589-4327</span>
                                <p className="text-gray-600 text-sm mt-4">Svanemøllevej 14B, 3th 2100 København Ø</p> 
                            </div>
                        </div>
                    </div>

                    {/* Checkbox for alternative postal address */}
                    <label className="flex items-center mb-4">
                        <input type="checkbox" className="mr-2"/>
                        <span className="text-sm">{t("pages.newCustomer.alternativePostalAddress")}</span>
                    </label>

                    {/* Contact information */}
                    <div>
                        <h3 className="text-md font-semibold mb-4">{t('pages.newCustomer.contactInformation.heading')}</h3>
                        
                        <div className="space-y-4 mb-4">
                            {/* Phone input */}
                            <div>
                                <label className="flex text-sm justify-between items-center mb-2">
                                    <span>{t('common.fields.phone')}</span>
                                    <span className="text-gray-500">({t('common.labels.optional')})</span>
                                </label>
                                <input type="tel"
                                className="w-full border border-gray-300 rounded-md px-3 py-2" />
                            </div>

                            {/* Email input */}
                            <div>
                                <label className="flex text-sm justify-between items-center mb-2">
                                    <span>{t('common.fields.email')}</span>
                                    <span className="text-gray-500">({t('common.labels.optional')})</span>
                                </label>
                                <input type="email"
                                className="w-full border border-gray-300 rounded-md px-3 py-2" />
                            </div>
                        </div>

                    </div>

                    {/* Alert message */}
                    <div className=" bg-orange-50 rounded-md p-4 mb-4">
                        <div className="flex gap-3">
                            <RiAlertFill className="text-red-800 text-2xl" />
                            <div>
                               <h3 className="text-red-700 text-sm">{t('pages.newCustomer.alerts.missingContactInformation.title')}</h3>
                                <p className="text-red-800 text-sm">{t('pages.newCustomer.alerts.missingContactInformation.description')}</p> 
                            </div>
                        </div>
                    </div>

                    {/* Company information */}
                    <div>
                        <h3 className="text-md font-semibold mb-4">{t('pages.newCustomer.companyInformation.heading')}</h3>
                        <div className="space-y-4">
                            {/* Caseworker dropdown */}
                            <div>
                                <label className="block text-sm  mb-2" >{t('common.fields.caseworker')}
                                    <span>*</span>
                                </label>
                                <select className="w-full border border-gray-300 rounded px-3 py-2 bg-white">
                                    <option value="Sanne">Sanne</option>
                                </select>
                            </div>
                            {/* Agency dropdown */}
                            <div>
                                <label className="block text-sm  mb-2" >{t('common.fields.agency')}
                                    <span>*</span>
                                </label>
                                <select className="w-full border border-gray-300 rounded px-3 py-2 bg-white mb-4">
                                    <option value="Future insurance">Future insurance</option>
                                </select>
                            </div>

                        </div>
                    </div>


                    {/* Action buttons */}
                    <div className="flex gap-4">
                        <button className="border border-blue-500 text-gray-700 px-14 py-2 rounded-md hover:bg-gray-50">{t('common.buttons.cancel')}</button>
                        <button className="bg-blue-500 text-white px-12 py-2 rounded-md hover:bg-blue-600">{t('common.buttons.createCustomer')}</button>
                    </div>           
                </div>
                </div>
                {/* Form for creating a new customer (Alternative postal address) */}
                <div className="p-8 max-w-lg">
                
                {/* Create new customer flow title */} 
                <h1 className="text-xs mb-2">Create new customer (Alternative postal address)*</h1>

                {/* Title */} 
                <h1 className="text-2xl font-bold mb-8">{t("pages.newCustomer.title")}</h1>

                {/* Get information section */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                    <h2 className="text-lg mb-4">{t("pages.newCustomer.fetchInfo.heading")}</h2>

                    <div className="mb-4">
                        {/* Radio buttons */}
                        <label className="flex items-center mb-2" >
                        <input type="radio" name="customerType" className="mr-2" defaultChecked />
                        <label className="text-sm">{t("pages.newCustomer.fetchInfo.customerType.private")}</label>
                        </label>
                        <label className="flex items-center mb-2">
                        <input type="radio" name="customerType" className="mr-2"/>
                        <label className="text-sm">{t("pages.newCustomer.fetchInfo.customerType.commercial")}</label>
                        </label>
                    </div>

                    {/* CPR input and Get button */}
                    <div className="flex gap-2 mb-4">
                        <input
                        type="text"
                        placeholder={t("pages.newCustomer.searchField.placeholder")}
                        className="flex-1 border border-gray-300 rounded-md px-3 py-2"
                        />
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">{t("common.buttons.get")}</button>
                    </div>

                    {/* Checkbox for adress protection */}
                    <label className="flex items-center mb-4">
                        <input type="checkbox" className="mr-2"/>
                        <span className="text-sm">{t("pages.newCustomer.addressProtection")}</span>
                    </label>

                    {/* National registry address */}
                    <div className=" border border-gray-200 shadow-sm rounded-md p-4 mb-4">
                        <div className="flex gap-3">
                            <div>
                               <h3 className="font-semibold text-sm">Anna vera Kristensen</h3>
                               <span className=" text-xs bg-gray-100 border border-gray-200  px-3 py-1 rounded-2xl mt-1">120589-4327</span>
                                <p className="text-gray-600 text-sm mt-4">Svanemøllevej 14B, 3th 2100 København Ø</p> 
                            </div>
                        </div>
                    </div>

                    {/* Checkbox for alternative postal address */}
                    <label className="flex items-center mb-4">
                        <input type="checkbox" className="mr-2" defaultChecked/>
                        <span className="text-sm">{t("pages.newCustomer.alternativePostalAddress")}</span>
                    </label>

                    {/* Alternative address section */}
                    <div className="mb-4">
                        <div className="space-y-4">
                            {/* c/o field */}
                            <div>
                                <label className="flex text-sm justify-between items-center mb-2">
                                    <span>{t('pages.newCustomer.alternativeAddress.co')}</span>
                                    <span className="text-gray-500">({t('common.labels.optional')})</span>
                                </label>
                                <input type="text"
                                className="w-full border border-gray-300 rounded-md px-3 py-2" />
                            </div>

                            {/* Street name and House number - side by side */}
                            <div className="grid grid-cols-[2fr_1fr] gap-4">
                                <div>
                                    <label className="block text-sm mb-2">
                                        {t('pages.newCustomer.alternativeAddress.streetName')}
                                        <span>*</span>
                                    </label>
                                    <input 
                                        type="text"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm mb-2">
                                        {t('pages.newCustomer.alternativeAddress.houseNumber')}
                                        <span>*</span>
                                    </label>
                                    <input 
                                        type="text"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    />
                                </div>
                            </div>

                            {/* Floor field */}
                            <div>
                                <label className="flex text-sm justify-between items-center mb-2">
                                    <span>{t('pages.newCustomer.alternativeAddress.floor')}</span>
                                    <span className="text-gray-500">({t('common.labels.optional')})</span>
                                </label>
                                <input type="text"
                                className="w-full border border-gray-300 rounded-md px-3 py-2" />
                            </div>

                             {/* Door/Side door/Apartment number field */}
                            <div>
                                <label className="flex text-sm justify-between items-center mb-2">
                                    <span>{t('pages.newCustomer.alternativeAddress.door')}</span>
                                    <span className="text-gray-500">({t('common.labels.optional')})</span>
                                </label>
                                <input type="text"
                                className="w-full border border-gray-300 rounded-md px-3 py-2" />
                            </div>

                            {/* Postal code and City - side by side */}
                            <div className="grid grid-cols-[1fr_2fr] gap-4">
                                <div>
                                    <label className="block text-sm mb-2">
                                        {t('pages.newCustomer.alternativeAddress.postalCode')}
                                        <span>*</span>
                                    </label>
                                    <input 
                                        type="text"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm mb-2">
                                        {t('pages.newCustomer.alternativeAddress.city')}
                                        <span>*</span>
                                    </label>
                                    <input 
                                        type="text"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    />
                                </div>
                            </div>

                            {/* Country */}
                            <div>
                                <label className="flex text-sm justify-between items-center mb-2">
                                    <span>{t('pages.newCustomer.alternativeAddress.country')}</span>
                                    <span className="text-gray-500">({t('common.labels.optional')})</span>
                                </label>
                                <input type="text"
                                className="w-full border border-gray-300 rounded-md px-3 py-2" />
                            </div>
                        </div>       
                    </div>

                    {/* Contact information */}
                    <div>
                        <h3 className="text-md font-semibold mb-4">{t('pages.newCustomer.contactInformation.heading')}</h3>
                        
                        <div className="space-y-4 mb-4">
                            {/* Phone input */}
                            <div>
                                <label className="flex text-sm justify-between items-center mb-2">
                                    <span>{t('common.fields.phone')}</span>
                                    <span className="text-gray-500">({t('common.labels.optional')})</span>
                                </label>
                                <input type="tel"
                                className="w-full border border-gray-300 rounded-md px-3 py-2" />
                            </div>

                            {/* Email input */}
                            <div>
                                <label className="flex text-sm justify-between items-center mb-2">
                                    <span>{t('common.fields.email')}</span>
                                    <span className="text-gray-500">({t('common.labels.optional')})</span>
                                </label>
                                <input type="email"
                                className="w-full border border-gray-300 rounded-md px-3 py-2" />
                            </div>
                        </div>

                    </div>

                    {/* Company information */}
                    <div>
                        <h3 className="text-md font-semibold mb-4">{t('pages.newCustomer.companyInformation.heading')}</h3>
                        <div className="space-y-4">
                            {/* Caseworker dropdown */}
                            <div>
                                <label className="block text-sm  mb-2" >{t('common.fields.caseworker')}
                                    <span>*</span>
                                </label>
                                <select className="w-full border border-gray-300 rounded px-3 py-2 bg-white">
                                    <option value="Sanne">Sanne</option>
                                </select>
                            </div>
                            {/* Agency dropdown */}
                            <div>
                                <label className="block text-sm  mb-2" >{t('common.fields.agency')}
                                    <span>*</span>
                                </label>
                                <select className="w-full border border-gray-300 rounded px-3 py-2 bg-white mb-4">
                                    <option value="Future insurance">Future insurance</option>
                                </select>
                            </div>

                        </div>
                    </div>


                    {/* Action buttons */}
                    <div className="flex gap-4">
                        <button className="border border-blue-500 text-gray-700 px-14 py-2 rounded-md hover:bg-gray-50">{t('common.buttons.cancel')}</button>
                        <button className="bg-blue-500 text-white px-12 py-2 rounded-md hover:bg-blue-600">{t('common.buttons.createCustomer')}</button>
                    </div>           
                </div>
                </div>

                {/* Form for creating a new customer (Name and address protection) */}
                <div className="p-8 max-w-lg">
                
                {/* Create new customer flow title */} 
                <h1 className="text-xs mb-2">Create new customer (Name and address protection)*</h1>

                {/* Title */} 
                <h1 className="text-2xl font-bold mb-8">{t("pages.newCustomer.title")}</h1>

                {/* Get information section */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                    <h2 className="text-lg mb-4">{t("pages.newCustomer.fetchInfo.heading")}</h2>

                    <div className="mb-4">
                        {/* Radio buttons */}
                        <label className="flex items-center mb-2" >
                        <input type="radio" name="customerType" className="mr-2" defaultChecked />
                        <label className="text-sm">{t("pages.newCustomer.fetchInfo.customerType.private")}</label>
                        </label>
                        <label className="flex items-center mb-2">
                        <input type="radio" name="customerType" className="mr-2"/>
                        <label className="text-sm">{t("pages.newCustomer.fetchInfo.customerType.commercial")}</label>
                        </label>
                    </div>

                    {/* CPR input and Get button */}
                    <div className="flex gap-2 mb-4">
                        <input
                        type="text"
                        placeholder={t("pages.newCustomer.searchField.placeholder")}
                        className="flex-1 border border-gray-300 rounded-md px-3 py-2"
                        />
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">{t("common.buttons.get")}</button>
                    </div>

                    {/* Checkbox for adress protection */}
                    <label className="flex items-center mb-4">
                        <input type="checkbox" className="mr-2" defaultChecked/>
                        <span className="text-sm">{t("pages.newCustomer.addressProtection")}</span>
                    </label>

                    {/* Personal data section */}
                    <div className="mb-4">
                        <h3 className="text-md font-semibold mb-4">{t('pages.newCustomer.personalData.heading')}</h3>
                        <div className="space-y-4">
                            {/* First and middlename */}
                            <div>
                                <label className="flex text-sm justify-between items-center mb-2">
                                    <span className="text-sm">{t('common.fields.firstAndMiddleName')}*</span>
                                </label>
                                <input type="text"
                                className="w-full border border-gray-300 rounded-md px-3 py-2" />
                            </div>
                            {/* Last name */}
                            <div>
                                <label className="flex text-sm justify-between items-center mb-2">
                                    <span className="text-sm">{t('common.fields.lastName')}*</span>
                                </label>
                                <input type="text"
                                className="w-full border border-gray-300 rounded-md px-3 py-2" />
                            </div>
                            {/* CPR */}
                            <div>
                                <label className="flex text-sm justify-between items-center mb-2">
                                    <span className="text-sm">{t('common.fields.cpr')}*</span>
                                </label>
                                <input type="text"
                                className="w-full border border-gray-300 rounded-md px-3 py-2" />
                            </div>
                        
                        </div>
                    </div>

                    {/* Alternative address section */}
                    <div className="mb-4">
                        <h3 className="text-md font-semibold mb-4">{t('pages.newCustomer.alternativeAddress.heading')}</h3>
                        <div className="space-y-4">
                            {/* c/o field */}
                            <div>
                                <label className="flex text-sm justify-between items-center mb-2">
                                    <span>{t('pages.newCustomer.alternativeAddress.co')}</span>
                                    <span className="text-gray-500">({t('common.labels.optional')})</span>
                                </label>
                                <input type="text"
                                className="w-full border border-gray-300 rounded-md px-3 py-2" />
                            </div>

                            {/* Street name and House number - side by side */}
                            <div className="grid grid-cols-[2fr_1fr] gap-4">
                                <div>
                                    <label className="block text-sm mb-2">
                                        {t('pages.newCustomer.alternativeAddress.streetName')}
                                        <span>*</span>
                                    </label>
                                    <input 
                                        type="text"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm mb-2">
                                        {t('pages.newCustomer.alternativeAddress.houseNumber')}
                                        <span>*</span>
                                    </label>
                                    <input 
                                        type="text"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    />
                                </div>
                            </div>

                            {/* Floor field */}
                            <div>
                                <label className="flex text-sm justify-between items-center mb-2">
                                    <span>{t('pages.newCustomer.alternativeAddress.floor')}</span>
                                    <span className="text-gray-500">({t('common.labels.optional')})</span>
                                </label>
                                <input type="text"
                                className="w-full border border-gray-300 rounded-md px-3 py-2" />
                            </div>

                             {/* Door/Side door/Apartment number field */}
                            <div>
                                <label className="flex text-sm justify-between items-center mb-2">
                                    <span>{t('pages.newCustomer.alternativeAddress.door')}</span>
                                    <span className="text-gray-500">({t('common.labels.optional')})</span>
                                </label>
                                <input type="text"
                                className="w-full border border-gray-300 rounded-md px-3 py-2" />
                            </div>

                            {/* Postal code and City - side by side */}
                            <div className="grid grid-cols-[1fr_2fr] gap-4">
                                <div>
                                    <label className="block text-sm mb-2">
                                        {t('pages.newCustomer.alternativeAddress.postalCode')}
                                        <span>*</span>
                                    </label>
                                    <input 
                                        type="text"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm mb-2">
                                        {t('pages.newCustomer.alternativeAddress.city')}
                                        <span>*</span>
                                    </label>
                                    <input 
                                        type="text"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    />
                                </div>
                            </div>

                            {/* Country */}
                            <div>
                                <label className="flex text-sm justify-between items-center mb-2">
                                    <span>{t('pages.newCustomer.alternativeAddress.country')}</span>
                                    <span className="text-gray-500">({t('common.labels.optional')})</span>
                                </label>
                                <input type="text"
                                className="w-full border border-gray-300 rounded-md px-3 py-2" />
                            </div>
                        </div>       
                    </div>

                    {/* Checkbox for alternative postal address */}
                    <label className="flex items-center mb-4">
                        <input type="checkbox" className="mr-2"/>
                        <span className="text-sm">{t("pages.newCustomer.alternativePostalAddress")}</span>
                    </label>

                    {/* Contact information */}
                    <div>
                        <h3 className="text-md font-semibold mb-4">{t('pages.newCustomer.contactInformation.heading')}</h3>
                        
                        <div className="space-y-4 mb-4">
                            {/* Phone input */}
                            <div>
                                <label className="flex text-sm justify-between items-center mb-2">
                                    <span>{t('common.fields.phone')}</span>
                                    <span className="text-gray-500">({t('common.labels.optional')})</span>
                                </label>
                                <input type="tel"
                                className="w-full border border-gray-300 rounded-md px-3 py-2" />
                            </div>

                            {/* Email input */}
                            <div>
                                <label className="flex text-sm justify-between items-center mb-2">
                                    <span>{t('common.fields.email')}</span>
                                    <span className="text-gray-500">({t('common.labels.optional')})</span>
                                </label>
                                <input type="email"
                                className="w-full border border-gray-300 rounded-md px-3 py-2" />
                            </div>
                        </div>

                    </div>

                    {/* Company information */}
                    <div>
                        <h3 className="text-md font-semibold mb-4">{t('pages.newCustomer.companyInformation.heading')}</h3>
                        <div className="space-y-4">
                            {/* Caseworker dropdown */}
                            <div>
                                <label className="block text-sm  mb-2" >{t('common.fields.caseworker')}
                                    <span>*</span>
                                </label>
                                <select className="w-full border border-gray-300 rounded px-3 py-2 bg-white">
                                    <option value="Sanne">Sanne</option>
                                </select>
                            </div>
                            {/* Agency dropdown */}
                            <div>
                                <label className="block text-sm  mb-2" >{t('common.fields.agency')}
                                    <span>*</span>
                                </label>
                                <select className="w-full border border-gray-300 rounded px-3 py-2 bg-white mb-4">
                                    <option value="Future insurance">Future insurance</option>
                                </select>
                            </div>

                        </div>
                    </div>


                    {/* Action buttons */}
                    <div className="flex gap-4">
                        <button className="border border-blue-500 text-gray-700 px-14 py-2 rounded-md hover:bg-gray-50">{t('common.buttons.cancel')}</button>
                        <button className="bg-blue-500 text-white px-12 py-2 rounded-md hover:bg-blue-600">{t('common.buttons.createCustomer')}</button>
                    </div>           
                </div>
                </div>
                
            </div>
            <LanguageSwitcher />
        </div>
    )
}