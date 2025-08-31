// src/utils/weatherIcons.js
import {
    BsSun,
    BsCloud,
    BsClouds,
    BsCloudRain,
    BsCloudLightning,
    BsCloudSnow,
    BsCloudFog,
    BsCloudHaze,
    BsCloudDrizzle,
    BsCloudSun
} from "react-icons/bs";

export const weatherMap = {
    // Trovoada
    200: { label: "Trovoada com chuva leve", icon: <BsCloudLightning /> },
    201: { label: "Trovoada com chuva", icon: <BsCloudLightning /> },
    202: { label: "Trovoada com chuva forte", icon: <BsCloudLightning /> },
    210: { label: "Trovoada leve", icon: <BsCloudLightning /> },
    211: { label: "Trovoada", icon: <BsCloudLightning /> },
    212: { label: "Trovoada forte", icon: <BsCloudLightning /> },
    221: { label: "Trovoada irregular", icon: <BsCloudLightning /> },
    230: { label: "Trovoada com garoa leve", icon: <BsCloudLightning /> },
    231: { label: "Trovoada com garoa", icon: <BsCloudLightning /> },
    232: { label: "Trovoada com garoa forte", icon: <BsCloudLightning /> },

    // Garoa
    300: { label: "Garoa leve", icon: <BsCloudDrizzle /> },
    301: { label: "Garoa", icon: <BsCloudDrizzle /> },
    302: { label: "Garoa intensa", icon: <BsCloudDrizzle /> },
    310: { label: "Garoa leve com chuva", icon: <BsCloudRain /> },
    311: { label: "Garoa com chuva", icon: <BsCloudRain /> },
    312: { label: "Garoa intensa com chuva", icon: <BsCloudRain /> },
    313: { label: "Chuva de pancadas e garoa", icon: <BsCloudRain /> },
    314: { label: "Chuva forte de pancadas e garoa", icon: <BsCloudRain /> },
    321: { label: "Pancadas de garoa", icon: <BsCloudRain /> },

    // Chuva
    500: { label: "Chuva leve", icon: <BsCloudRain /> },
    501: { label: "Chuva moderada", icon: <BsCloudRain /> },
    502: { label: "Chuva forte", icon: <BsCloudRain /> },
    503: { label: "Chuva muito forte", icon: <BsCloudRain /> },
    504: { label: "Chuva extrema", icon: <BsCloudRain /> },
    511: { label: "Chuva congelante", icon: <BsCloudSnow /> },
    520: { label: "Pancadas leves de chuva", icon: <BsCloudRain /> },
    521: { label: "Pancadas de chuva", icon: <BsCloudRain /> },
    522: { label: "Pancadas fortes de chuva", icon: <BsCloudRain /> },
    531: { label: "Pancadas irregulares de chuva", icon: <BsCloudRain /> },

    // Neve
    600: { label: "Neve leve", icon: <BsCloudSnow /> },
    601: { label: "Neve", icon: <BsCloudSnow /> },
    602: { label: "Neve forte", icon: <BsCloudSnow /> },
    611: { label: "Granizo", icon: <BsCloudSnow /> },
    612: { label: "Granizo leve", icon: <BsCloudSnow /> },
    613: { label: "Granizo intenso", icon: <BsCloudSnow /> },
    615: { label: "Chuva e neve leves", icon: <BsCloudSnow /> },
    616: { label: "Chuva e neve", icon: <BsCloudSnow /> },
    620: { label: "Pancadas leves de neve", icon: <BsCloudSnow /> },
    621: { label: "Pancadas de neve", icon: <BsCloudSnow /> },
    622: { label: "Pancadas fortes de neve", icon: <BsCloudSnow /> },

    // Atmosfera
    701: { label: "Névoa", icon: <BsCloudFog /> },
    711: { label: "Fumaça", icon: <BsCloudHaze /> },
    721: { label: "Neblina", icon: <BsCloudHaze /> },
    731: { label: "Poeira", icon: <BsCloudHaze /> },
    741: { label: "Névoa densa", icon: <BsCloudFog /> },
    751: { label: "Areia", icon: <BsCloudHaze /> },
    761: { label: "Poeira", icon: <BsCloudHaze /> },
    762: { label: "Cinzas vulcânicas", icon: <BsCloudHaze /> },
    771: { label: "Rajadas de vento", icon: <BsCloud /> },
    781: { label: "Tornado", icon: <BsCloudLightning /> },

    // Céu limpo
    800: { label: "Céu limpo", icon: <BsSun /> },

    // Nuvens
    801: { label: "Poucas nuvens", icon: <BsCloudSun /> },
    802: { label: "Parcialmente nublado", icon: <BsCloud /> },
    803: { label: "Nublado", icon: <BsCloud /> },
    804: { label: "Muito nublado", icon: <BsCloud /> },
};
