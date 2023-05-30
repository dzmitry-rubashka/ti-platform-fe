import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslations from "./translations/en/translation.json";
import ruTranslations from "./translations/ru/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: "en",
    lng: "en",
    resources: {
      en: {
        translation: {
          header: {
            title: enTranslations.header.title,
            userProfile: enTranslations.header.userProfile,
          },
          schedulePage: {
            schedule: enTranslations.schedulePage.schedule,
          },
          calendar: {
            days: {
              monday: enTranslations.calendar.days.monday,
              tuesday: enTranslations.calendar.days.tuesday,
              wednesday: enTranslations.calendar.days.wednesday,
              thursday: enTranslations.calendar.days.thursday,
              friday: enTranslations.calendar.days.friday,
              saturday: enTranslations.calendar.days.saturday,
              sunday: enTranslations.calendar.days.sunday,
            },
            months: {
              jan: enTranslations.calendar.months.jan,
              feb: enTranslations.calendar.months.feb,
              mar: enTranslations.calendar.months.mar,
              apr: enTranslations.calendar.months.apr,
              may: enTranslations.calendar.months.may,
              jun: enTranslations.calendar.months.jun,
              jul: enTranslations.calendar.months.jul,
              aug: enTranslations.calendar.months.aug,
              sep: enTranslations.calendar.months.sep,
              oct: enTranslations.calendar.months.oct,
              nov: enTranslations.calendar.months.nov,
              dec: enTranslations.calendar.months.dec,
            },
          },
          interviewInfo: {
            technologies: enTranslations.interviewInfo.technologies,
            expectedLevel: enTranslations.interviewInfo.expectedLevel,
            interviewers: enTranslations.interviewInfo.interviewers,
            date: enTranslations.interviewInfo.date,
          },
          fallback: {
            errorMessage: enTranslations.fallback.errorMessage,
          },
          modal: {
            cancel: enTranslations.modal.cancel,
          },
          users: {
            add: enTranslations.users.add,
            remove: enTranslations.users.remove,
          },
          dropdown: {
            choices: enTranslations.dropdown.choices,
          },
        },
      },
      ru: {
        translation: {
          header: {
            title: ruTranslations.header.title,
            userProfile: ruTranslations.header.userProfile,
          },
          schedulePage: {
            schedule: ruTranslations.schedulePage.schedule,
          },
          calendar: {
            days: {
              monday: ruTranslations.calendar.days.monday,
              tuesday: ruTranslations.calendar.days.tuesday,
              wednesday: ruTranslations.calendar.days.wednesday,
              thursday: ruTranslations.calendar.days.thursday,
              friday: ruTranslations.calendar.days.friday,
              saturday: ruTranslations.calendar.days.saturday,
              sunday: ruTranslations.calendar.days.sunday,
            },
            months: {
              jan: ruTranslations.calendar.months.jan,
              feb: ruTranslations.calendar.months.feb,
              mar: ruTranslations.calendar.months.mar,
              apr: ruTranslations.calendar.months.apr,
              may: ruTranslations.calendar.months.may,
              jun: ruTranslations.calendar.months.jun,
              jul: ruTranslations.calendar.months.jul,
              aug: ruTranslations.calendar.months.aug,
              sep: ruTranslations.calendar.months.sep,
              oct: ruTranslations.calendar.months.oct,
              nov: ruTranslations.calendar.months.nov,
              dec: ruTranslations.calendar.months.dec,
            },
          },
          interviewInfo: {
            technologies: ruTranslations.interviewInfo.technologies,
            expectedLevel: ruTranslations.interviewInfo.expectedLevel,
            interviewers: ruTranslations.interviewInfo.interviewers,
            date: ruTranslations.interviewInfo.date,
          },
          fallback: {
            errorMessage: ruTranslations.fallback.errorMessage,
          },
          modal: {
            cancel: ruTranslations.modal.cancel,
          },
          users: {
            add: ruTranslations.users.add,
            remove: ruTranslations.users.remove,
          },
          dropdown: {
            choices: ruTranslations.dropdown.choices,
          },
        },
      },
    },
  })
  .then();
export default i18n;
