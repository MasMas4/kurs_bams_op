import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './block1.css';
import './block2.css';
import './block3.css';
import './block4.css';
import './block5.css';
import FadeInWhenVisible from "./FadeInWhenVisible";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <html lang="ru">
        <head>
            <meta charSet="UTF-8"/>
            <title>masmas</title>
        </head>
        <body>
        <div className="gradient1"></div>
        <header>
            <link rel="stylesheet" href="block1.css"/>
            <div class="dropdown">
                <button class="dropbtn">
                </button>
                <div className="dropdown-content">
                <ul>
                        <li><a href="#about">Обо мне</a></li>
                        <li><a href="#adv">Преимущества</a></li>
                        <li><a href="#works">Работы</a></li>
                        <li><a href="#cont">Контакты</a></li>
                    </ul>
                </div>
            </div>
                <h>Борисичева Анна-Мария</h>
                <ul className="up">
                <a href="https://vk.com/masmakson" className="wk"> </a>
                    <a href="https://t.me/maasmask" className="tg"> </a>
                    <a href="mailto:<bamsanna-maria@yandex.ru>" className="mail"> </a>
                </ul>
                <script src="menu_script.js"></script>

            <div className="image-container">
                <img src={require("./image/masmas.png")} alt="masmas" className="background-image"/>
                <h2 className="outline-text">masmas</h2>
                <h3 className="outline-text-behind">masmas</h3>
                <h4 className="outline-text-behind2">masmas</h4>
            </div>
        </header>
        <main>
            <section id="about">
                <FadeInWhenVisible>
                <img src={require("./image/gr.png")} alt="masmas2"/>
                <link rel="stylesheet" href="block2.css"/>
                <div className="aboutme">
                    <h4> Обо мне</h4>
                    <p>СКОЛЬКО СЕБЯ ПОМНЮ - Я ВСЕГДА СТРЕМИЛАСЬ К ЧУВСТВУ ПРЕКРАСНОГО. ЭТО ОТРАЖАЛОСЬ И ОТРАЖАЕТСЯ
                        ПРАКТИЧЕСКИ ВО ВСЕМ, К ЧЕМУ Я ПРИКЛАДЫВАЮ СВОЮ РУКУ: НАЧИНАЯ ОТ ЗАРИСОВКИ НА САЛФЕТКЕ В КАФЕ И
                        ЗАКАНЧИВАЯ КОДОМ. ИМЕННО ПОЭТОМУ ДИЗАЙН - ЭТО МОЯ ОТДЕЛЬНАЯ ЖИЗНЬ.

                        КАЖДЫЙ ЭЛЕМЕНТ ПРОСТРАНСТВА, КАЖДАЯ ЛИНИЯ И ЦВЕТ, КОТОРЫЕ Я ВЫБИРАЮ, ПРЕВРАЩАЮТСЯ В ОТРАЖЕНИЕ
                        МОИХ ЦЕННОСТЕЙ И ПЕРЕЖИВАНИЙ. МНЕ НРАВИТСЯ СОЗДАВАТЬ ГАРМОНИЮ, ГДЕ ВСЕ КОМПОНЕНТЫ РАБОТАЮТ В
                        УНИСОН, КАК СЛАЖЕННЫЙ ОРКЕСТР, ИГРАЮЩИЙ МЕЛОДИЮ, КОТОРАЯ ЗАТРАГИВАЕТ ДУШИ ЗРИТЕЛЕЙ. Я НАХОЖУ
                        ВДОХНОВЕНИЕ В ЧЕМ УГОДНО: ИГРА СВЕТА В УТРЕННЕМ СОЛНЦЕ, ЛЮДИ, ПРОХОДЯЩИЕ ВОКРУГ, АРХИТЕКТУРА
                        ГОРОДА, ПРЕДМЕТЫ НА РАБОЧЕМ СТОЛЕ.

                        ДИЗАЙН ДЛЯ МЕНЯ — ЭТО НЕ ПРОСТО ЭСТЕТИКА, А СРЕДСТВО ОБЩЕНИЯ, ФОРМИРОВАНИЕ ЭМОЦИЙ И ОЩУЩЕНИЙ.
                        КОГДА Я СОЗИДАЮ, Я ЧУВСТВУЮ, ЧТО ПОГРУЖАЮСЬ В КАКОЙ-ТО БЕСКОНЕЧНЫЙ ПОТОК ТВОРЧЕСКОЙ ЭНЕРГИИ, ГДЕ
                        КАЖДЫЙ ШТРИХ ОБРЕТАЕТ СМЫСЛ, А КАЖДАЯ ДЕТАЛЬ РАССКАЗЫВАЕТ СВОЮ ИСТОРИЮ. ЭТО МОЯ СТРАСТЬ И МОЙ
                        ПУТЬ, КОТОРЫЙ НИКОГДА НЕ ЗАКАНЧИВАЕТСЯ.</p>
                </div>
                </FadeInWhenVisible>
            </section>


            <section id="adv">
                <FadeInWhenVisible>
                <link rel="stylesheet" href="block3.css"/>
                <h5> Мои преимущества </h5>
                <div className="block3">
                    <div className="rec">
                        <p1>время</p1>
                        <h6>Могу гарантировать выполнение работы в срок и с соблюдением всех договоренностей</h6>
                    </div>
                    <div className="rec1">
                        <p2>актуальность</p2>
                        <h7>Слежу за трендами и иду “в ногу со временем”</h7>
                    </div>
                    <div className="rec2">
                        <p3>адаптивность</p3>
                        <h8>Быстро реагирую на изменения требований и вношу необходимые коорективы</h8>
                    </div>
                    <div className="rec3">
                        <p4>результат</p4>
                        <h9>Нацелена на достижение поставленных целей и удовлетворение потребностей клиента</h9>
                    </div>
                </div>
                </FadeInWhenVisible>
            </section>

            <section id="works">
                <FadeInWhenVisible>
                <link rel="stylesheet" href="block4.css"/>
                <div className="works">
                    <h1>Мои работы</h1>
                        <img src={require("./image/ss.png")} alt="ss" className="ss"/>
                        <img src={require("./image/avrora.png")} alt="avr" className="avrora"/>
                        <img src={require("./image/1.png")} alt="1" className="post1"/>
                        <img src={require("./image/2.png")} alt="2" className="post2"/>
                        <img src={require("./image/3.png")} alt="3" className="post3"/>
                </div>
                </FadeInWhenVisible>
            </section>
            <section id="cont">
                <FadeInWhenVisible>
                <link rel="stylesheet" href="block5.css"/>
                <div className="endl">
                    <h1>как связаться со мной?</h1>
                    <img src={require("./image/tg2.png")} alt="tg2" className="tg2"/>
                    <img src={require("./image/vk2.png")} alt="vk2" className="vk2"/>
                    <img src={require("./image/Star2.png")} alt="Star2" className="Star2"/>
                    <a href="https://t.me/maasmask" className="tgbtn">Телеграм</a>
                    <a href="https://vk.com/masmakson" className="vkbtn">ВКонтакте</a>
                </div>
                <div className="end">
                    <link rel="stylesheet" href="block5.css"/>
                    <h1>masmas</h1>
                    <h2>bamsanna-maria@yandex.ru</h2>
                </div>
                </FadeInWhenVisible>
            </section>
            <div className="grade"></div>
        </main>
        <script src="menu_script.js"></script>
        </body>
        </html>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
