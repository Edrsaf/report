/*
Stimulsoft.Reports.JS
Version: 2023.1.1
Build date: 2022.12.07
License: https://www.stimulsoft.com/en/licensing/reports
*/
!function(b){var f;"object"==typeof exports&&"undefined"!=typeof module?module.exports=(f=require("./stimulsoft.viewer.pack"),Object.assign(f,b(f.Stimulsoft))):"function"==typeof define&&define.amd?define(["./stimulsoft.viewer.pack"],f=>Object.assign(f,b(f.Stimulsoft))):Object.assign(window,b(window.Stimulsoft))}(function(f){var b={Stimulsoft:f||{}};if(f&&(f.__engineVersion&&"2023.1.1"!==f.__engineVersion?console.warn("Scripts versions mismatch: engine ver. = %s; designer ver. = 2023.1.1",f.__engineVersion):"2023.1.1"!==f.__reportsVersion&&console.warn("Scripts versions mismatch: reports ver. = %s; designer ver. = 2023.1.1",f.__reportsVersion)),
,b.Stimulsoft.decodePackedData&&b.Stimulsoft.Viewer)for(const v of["designerScript","blocklyScript"])b.Stimulsoft[v]&&Object.assign(b,b.Stimulsoft.decodePackedData(b.Stimulsoft[v])(b.Stimulsoft)),delete b.Stimulsoft[v];return b});