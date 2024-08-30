import TG from './images/icons/TelegramIcon.png'
import WA from './images/icons/WhatsappIcon.png'
import VK from './images/icons/VkIcon.png'
import Phone from './images/icons/PhoneIcon.png'
import MyPhoto from './images/FotoOfMe-BnW.png'
import ArrowRight from './images/ArrowRight.png'
import ArrowLeft from './images/ArrowLeft.png'
import KznFlatsSrc from './images/kazan-flats-scr.png'
import Rectangle from './images/Rectangle.png'
import Line from './images/Line.png'
import Marker from './images/liMarker.png'

let urlsData = [
    {
        id: 1,
        href: "tel:+79869268733",
        src: Phone,
    },
    {
        id: 2,
        href: "https://t.me/delete_dog",
        src: TG,
    },
    {
        id: 3,
        href: "https://vk.com/monky__d__luffy",
        src: VK,
    },
    {
        id: 4,
        href: "https://wa.me/79869268733",
        src: WA,
    },
]

const AboutWorkData = [
    {
        key: 1,
        title: 'Связь',
        description: 'Всегда на связи в рабочее время'
    },
    {
        key: 2,
        title: 'Отношение',
        description: 'Ответственно отношусь к своей работе и соблюдаю дедлайны'
    },
    {
        key: 3,
        title: 'Ваше мнение',
        description: 'Учитываю и реализовываю ваши поправки'
    },
    {
        key: 4,
        title: 'Страсть',
        description: 'Я люблю то, чем я занимаюсь'
    },
]

const examplesData = [
    {
        key: 1,
        year: 2024,
        title: 'Сайт-визитка по сдаче недвижимости',
        description: 'Простой, но нежный дизайн сайта для сдачи недвижимости в г.Казань',
        src: KznFlatsSrc,
        href: 'https://kazan-flats.netlify.app',
    },
    // {
    //     key: 2,
    //     year: 2024,
    //     title: 'Сайт-визитка по сдаче недвижимости',
    //     description: 'Простой, но нежный дизайн сайта для сдачи недвижимости в г.Казань',
    //     src: KznFlatsSrc,
    //     href: 'https://kazan-flats.netlify.app',
    // },
    // {
    //     key: 3,
    //     year: 2024,
    //     title: 'Сайт-визитка по сдаче недвижимости',
    //     description: 'Простой, но нежный дизайн сайта для сдачи недвижимости в г.Казань',
    //     src: KznFlatsSrc,
    //     href: 'https://kazan-flats.netlify.app',
    // },
]

export { TG, WA, VK, Phone, MyPhoto, ArrowRight, ArrowLeft, Rectangle, Line, Marker, AboutWorkData, examplesData, urlsData }