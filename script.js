/* =====================================================
   TRIXIOBSERVES
   ПЕРЕКЛЮЧЕНИЕ ЯЗЫКОВ
===================================================== */


/*
    Все переводы сайта находятся здесь.

    Чтобы добавить новый текст,
    достаточно добавить ему одинаковый
    ключ в ru, de и en.
*/


const translations = {

    /* =========================
       РУССКИЙ
    ========================= */

    ru: {

        welcome:
            "Добро Пожаловать",

        inWorld:
            "в мир",

        descriptionOne:
            "Исследуй забытые мифы.",

        descriptionTwo:
            "Найди в них ответы и путь к себе.",

        startJourney:
            "Начать путешествие ✦",


        /* Explore */

        world:
            "Мир",

        exploreIntro:
            "Здесь начинаются путешествия, открываются забытые истории и оживают старые мифы.",

        aboutWorld:
            "О мире TrixiObserves",

        diary:
            "Путевой Дневник Трикси",

        gallery:
            "Галерея",

        sketches:
            "Зарисовки из путешествий",

        cara:
            "🎨 Галерея на Cara ↗",

        quote:
            "«У каждой истории есть след. Нужно лишь знать, где искать.»",

        backHome:
            "← На главную"
    },


    /* =========================
       НЕМЕЦКИЙ
    ========================= */

    de: {

        welcome:
            "Willkommen",

        inWorld:
            "in der Welt von",

        descriptionOne:
            "Erkunde vergessene Mythen.",

        descriptionTwo:
            "Finde in ihnen Antworten und deinen Weg zu dir selbst.",

        startJourney:
            "Reise beginnen ✦",


        /* Explore */

        world:
            "Die Welt von",

        exploreIntro:
            "Hier beginnen die Reisen, vergessene Geschichten öffnen sich und alte Mythen erwachen zum Leben.",

        aboutWorld:
            "Über die Welt von TrixiObserves",

        diary:
            "Trixis Reisetagebuch",

        gallery:
            "Galerie",

        sketches:
            "Skizzen aus den Reisen",

        cara:
            "🎨 Galerie auf Cara ↗",

        quote:
            "„Jede Geschichte hinterlässt eine Spur. Man muss nur wissen, wo man suchen soll.“",

        backHome:
            "← Zur Startseite"
    },


    /* =========================
       АНГЛИЙСКИЙ
    ========================= */

    en: {

        welcome:
            "Welcome",

        inWorld:
            "to the world of",

        descriptionOne:
            "Explore forgotten myths.",

        descriptionTwo:
            "Find answers within them and discover your path to yourself.",

        startJourney:
            "Begin the journey ✦",


        /* Explore */

        world:
            "The World of",

        exploreIntro:
            "Here the journeys begin, forgotten stories unfold, and ancient myths come to life.",

        aboutWorld:
            "About the World of TrixiObserves",

        diary:
            "Trixi's Travel Diary",

        gallery:
            "Gallery",

        sketches:
            "Travel Sketches",

        cara:
            "🎨 Gallery on Cara ↗",

        quote:
            "“Every story leaves a trace. You only need to know where to look.”",

        backHome:
            "← Back Home"
    }

};


/* =====================================================
   СМЕНА ЯЗЫКА
===================================================== */

function changeLanguage(language) {

    /*
        Проверяем, существует ли такой язык.
    */

    if (!translations[language]) {

        return;

    }


    const currentTranslations =
        translations[language];


    /*
        Находим все элементы,
        у которых есть data-i18n.
    */

    const elements =
        document.querySelectorAll(
            "[data-i18n]"
        );


    /*
        Меняем текст.
    */

    elements.forEach(
        function(element) {

            const key =
                element.getAttribute(
                    "data-i18n"
                );


            if (
                currentTranslations[key]
            ) {

                element.textContent =
                    currentTranslations[key];

            }

        }
    );


    /*
        Меняем активный флажок.
    */

    const languageButtons =
        document.querySelectorAll(
            ".language-button"
        );


    languageButtons.forEach(
        function(button) {

            button.classList.remove(
                "active"
            );

        }
    );


    const activeButton =
        document.querySelector(
            `[data-language="${language}"]`
        );


    if (activeButton) {

        activeButton.classList.add(
            "active"
        );

    }


    /*
        Меняем язык HTML.
    */

    document.documentElement.lang =
        language;


    /*
        Сохраняем выбранный язык.

        Поэтому если человек выбрал
        немецкий на первой странице,
        а потом перешёл на explore.html,
        там тоже будет немецкий.
    */

    localStorage.setItem(
        "trixiLanguage",
        language
    );
}


/* =====================================================
   ЗАГРУЗКА СОХРАНЁННОГО ЯЗЫКА
===================================================== */

function loadSavedLanguage() {

    const savedLanguage =
        localStorage.getItem(
            "trixiLanguage"
        );


    /*
        Если язык уже выбирали,
        используем его.
    */

    if (
        savedLanguage &&
        translations[savedLanguage]
    ) {

        changeLanguage(
            savedLanguage
        );

    }

    /*
        Если язык ещё не выбирали,
        используем русский.
    */

    else {

        changeLanguage("ru");

    }
}


/*
    Запускаем после загрузки страницы.
*/

document.addEventListener(
    "DOMContentLoaded",
    loadSavedLanguage
);
