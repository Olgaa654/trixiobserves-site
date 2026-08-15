/* =====================================================
   TRIXIOBSERVES
   SCRIPT.JS
   ЯЗЫКИ И ИНТЕРАКТИВНОСТЬ
===================================================== */


/* =====================================================
   ПЕРЕВОДЫ
===================================================== */

const translations = {

    /* =================================================
       🇷🇺 РУССКИЙ
    ================================================= */

    ru: {

        /* Главная страница */

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


        /* Страница мира */

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
            "← Назад к началу пути"
    },


    /* =================================================
       🇩🇪 НЕМЕЦКИЙ
    ================================================= */

    de: {

        /* Главная страница */

        welcome:
            "Herzlich willkommen",

        inWorld:
            "in der Welt von",

        descriptionOne:
            "Erkunde vergessene Mythen.",

        descriptionTwo:
            "Finde in ihnen Antworten und deinen Weg zu dir selbst.",

        startJourney:
            "Auf die Reise gehen ✦",


        /* Страница мира */

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
            "← Zurück zum Beginn der Reise"
    },


    /* =================================================
       🇬🇧 АНГЛИЙСКИЙ
    ================================================= */

    en: {

        /* Главная страница */

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


        /* Страница мира */

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
            "← Back to the start of the journey"
    }

};


/* =====================================================
   ФУНКЦИЯ СМЕНЫ ЯЗЫКА
===================================================== */

function changeLanguage(language) {

    /*
        Проверяем, существует ли выбранный язык.
    */

    if (!translations[language]) {

        console.log(
            "Такого языка нет:",
            language
        );

        return;
    }


    /*
        Получаем переводы выбранного языка.
    */

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
        Меняем текст каждого элемента.
    */

    elements.forEach(
        function(element) {

            const key =
                element.getAttribute(
                    "data-i18n"
                );


            if (
                currentTranslations[key] !== undefined
            ) {

                element.textContent =
                    currentTranslations[key];

            }

        }
    );


    /*
        Убираем active со всех флажков.
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


    /*
        Добавляем active выбранному флажку.
    */

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
        Меняем язык самого HTML-документа.
    */

    document.documentElement.lang =
        language;


    /*
        Сохраняем язык в браузере.

        Например:

        человек выбрал 🇬🇧

        затем перешёл на explore.html

        и там автоматически останется 🇬🇧.
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

    /*
        Получаем язык,
        который был выбран раньше.
    */

    const savedLanguage =
        localStorage.getItem(
            "trixiLanguage"
        );


    /*
        Если сохранённый язык существует
        и у нас есть его перевод,
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
        Если пользователь ещё
        ничего не выбирал,
        ставим русский.
    */

    else {

        changeLanguage("ru");

    }
}


/* =====================================================
   ЗАПУСК
===================================================== */

/*
    Ждём, пока HTML полностью загрузится,
    и затем устанавливаем язык.
*/

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadSavedLanguage();

    }
);
