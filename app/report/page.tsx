
'use client';
import React, {useEffect} from 'react';
import Script from "next/script";



const Page = () => {
    useEffect(() => {
        const options = new Stimulsoft.Viewer.StiViewerOptions();
        options.toolbar.showSendEmailButton = true;
        options.toolbar.displayMode = Stimulsoft.Viewer.StiToolbarDisplayMode.Separated;
        options.appearance.fullScreenMode = true;
        options.appearance.scrollbarsMode = true;
        options.appearance.rightToLeft = true;

        options.height = "600px";

        options.toolbar.showPrintButton = true;

        options.toolbar.showDesignButton = false;

        options.toolbar.showAboutButton = false;
        options.toolbar.showOpenButton = false;
        options.toolbar.showSendEmailButton = false;
        options.toolbar.showBookmarksButton = false;
        options.toolbar.showAboutButton = false;
        options.toolbar.showDesignButton = false;
        options.toolbar.showResourcesButton = false;
        options.toolbar.showParametersButton = false;
        options.toolbar.fontFamily = 'Tahoma';
        options.toolbar.displayMode = 'Simple';
        options.exports.showExportToPdf = true;


        options.exports.ShowExportToWord2007 = true;

        const viewer = new Stimulsoft.Viewer.StiViewer(options, "StiViewer", false);


        Stimulsoft.Base.Localization.StiLocalization.setLocalizationFile("stimulsoft/Localization/fa.xml");

        Stimulsoft.Base.StiLicense.loadFromFile("stimulsoft/license.key");

        const report = new Stimulsoft.Report.StiReport();


        report.loadFile("stimulsoft/Reports/report.mrt");
        report.dictionary.databases.clear();
        const dataSet = new Stimulsoft.System.Data.DataSet("demo");
        let json_report=  [
            {
                "firstname": "شاهین",
                "lastname": "شیرازی"
            },
            {
                "firstname": "پریسا",
                "lastname": "بختیاری"
            },
            {
                "firstname": "نازنین",
                "lastname": "تهرانی"
            },
            {
                "firstname": "الهه",
                "lastname": "گلزار"
            },
            {
                "firstname": "فرهاد",
                "lastname": "بهرامی"
            },
            {
                "firstname": "فاطمه",
                "lastname": "میرزایی"
            },
            {
                "firstname": "رضا",
                "lastname": "محمدی"
            },
            {
                "firstname": "سارا",
                "lastname": "سجادی"
            },
            {
                "firstname": "سمانه",
                "lastname": "اردبیلی"
            },
            {
                "firstname": "مریم",
                "lastname": "نصیری"
            },
            {
                "firstname": "آرش",
                "lastname": "سلیمانی"
            },
            {
                "firstname": "امیر",
                "lastname": "جعفری"
            },
            {
                "firstname": "شایان",
                "lastname": "فیروزی"
            },
            {
                "firstname": "محمد",
                "lastname": "رضایی"
            },
            {
                "firstname": "شقایق",
                "lastname": "کوهی"
            },
            {
                "firstname": "علی",
                "lastname": "احمدی"
            },
            {
                "firstname": "امید",
                "lastname": "قاسمی"
            },
            {
                "firstname": "پدرام",
                "lastname": "نجفی"
            },
            {
                "firstname": "کوروش",
                "lastname": "رحمانی"
            },
            {
                "firstname": "گلناز",
                "lastname": "حیدری"
            },
            {
                "firstname": "جواد",
                "lastname": "فراهانی"
            },
            {
                "firstname": "بهاره",
                "lastname": "رستمی"
            },
            {
                "firstname": "پوریا",
                "lastname": "موسوی"
            },
            {
                "firstname": "هانیه",
                "lastname": "کمالی"
            },
            {
                "firstname": "طاهره",
                "lastname": "ملکی"
            },
            {
                "firstname": "مینا",
                "lastname": "جمشیدی"
            },
            {
                "firstname": "لیلا",
                "lastname": "پارسا"
            },
            {
                "firstname": "مانی",
                "lastname": "داودی"
            },
            {
                "firstname": "آناهیتا",
                "lastname": "صفاری"
            },
            {
                "firstname": "آزاده",
                "lastname": "یزدانی"
            },
            {
                "firstname": "فرناز",
                "lastname": "بهشتی"
            },
            {
                "firstname": "زهرا",
                "lastname": "امینی"
            },
            {
                "firstname": "ریحانه",
                "lastname": "فرخی"
            },
            {
                "firstname": "فریبا",
                "lastname": "شاهین"
            },
            {
                "firstname": "کیان",
                "lastname": "صادقی"
            },
            {
                "firstname": "سیما",
                "lastname": "سبزواری"
            },
            {
                "firstname": "ندا",
                "lastname": "خواجه"
            },
            {
                "firstname": "روزبه",
                "lastname": "اکبری"
            },
            {
                "firstname": "حسین",
                "lastname": "کریمی"
            },
            {
                "firstname": "نگار",
                "lastname": "سهرابی"
            },
            {
                "firstname": "نوید",
                "lastname": "زارعی"
            },
            {
                "firstname": "ارشیا",
                "lastname": "نوری"
            },
            {
                "firstname": "سهیل",
                "lastname": "کاظمی"
            },
            {
                "firstname": "یاسین",
                "lastname": "طاهری"
            },
            {
                "firstname": "بهزاد",
                "lastname": "عباسی"
            },
            {
                "firstname": "سامان",
                "lastname": "مهدوی"
            },
            {
                "firstname": "بهرام",
                "lastname": "حسینی"
            },
            {
                "firstname": "مهسا",
                "lastname": "زندی"
            },
            {
                "firstname": "رویا",
                "lastname": "مفیدی"
            },
            {
                "firstname": "مهرداد",
                "lastname": "علیزاده"
            }
        ];
        fetch("stimulsoft/data/sampleFa.json") // Make sure 'data.json' is the correct path to your JSON file
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                dataSet.readJson(json_report);
                report.regData(dataSet.dataSetName, "", dataSet);
                report.reportName = "نام گزارش";
                report.reportAlias =  "نام فایل";
                viewer.report = report;
                viewer.renderHtml("viewerContent");
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, []);


    return (
        <div>
            <Script src="stimulsoft/scripts/stimulsoft.reports.js" strategy="beforeInteractive"/>
            <Script src="stimulsoft/scripts/stimulsoft.viewer.js" strategy="beforeInteractive"/>

            <div id="viewerContent"></div>
        </div>
    );
};

export default Page;