export interface ClusterData {
  id: string;
  title: string;
  description: string;
  color: string;
  x: number;
  y: number;
  radius: number;
  minZoomLevel: number; // На каком зуме появляется
  items: ClusterItem[];
  children?: ClusterData[];
}

export interface ClusterItem {
  id: string;
  title: string;
  description: string;
  minZoomLevel: number;
}

export const archiveData: ClusterData[] = [
  {
    id: "cosmic-program",
    title: "ТАЙНАЯ КОСМИЧЕСКАЯ ПРОГРАММА",
    description: "Секретные космические программы и исследования неизвестной природы",
    color: "from-purple-500 to-indigo-600",
    x: 50,
    y: 50,
    radius: 120,
    minZoomLevel: 0,
    items: [
      {
        id: "first-contact",
        title: "Первый контакт",
        description: "Первое документированное взаимодействие с внеземными цивилизациями в 1952 году над Вашингтоном",
        minZoomLevel: 1,
      },
      {
        id: "moon-bases",
        title: "Лунные базы",
        description: "Секретные города на Луне, построенные совместно с инопланетными цивилизациями",
        minZoomLevel: 1,
      },
      {
        id: "mars-expedition",
        title: "Экспедиция на Марс",
        description: "Человеческие колонии на Марсе, существующие с 1970-х годов",
        minZoomLevel: 1,
      },
    ],
  },
  {
    id: "great-awakening",
    title: "ВЕЛИКОЕ ПРОБУЖДЕНИЕ",
    description: "Массовое духовное и интеллектуальное пробуждение человечества",
    color: "from-orange-400 to-red-500",
    x: 60,
    y: 35,
    radius: 100,
    minZoomLevel: 0,
    items: [
      {
        id: "consciousness-shift",
        title: "Сдвиг сознания",
        description: "Глобальное изменение уровня сознания и восприятия реальности",
        minZoomLevel: 1,
      },
      {
        id: "ancient-knowledge",
        title: "Древние знания",
        description: "Восстановление утерянных знаний древних цивилизаций",
        minZoomLevel: 1,
      },
      {
        id: "technology-revelation",
        title: "Раскрытие технологий",
        description: "Обнародование скрытых технологических достижений",
        minZoomLevel: 2,
      },
    ],
  },
  {
    id: "optimal-timeline",
    title: "ОПТИМАЛЬНАЯ ВРЕМЕННАЯ ЛИНИЯ",
    description: "Путь развития человечества к процветанию и гармонии",
    color: "from-yellow-400 to-green-500",
    x: 70,
    y: 50,
    radius: 95,
    minZoomLevel: 0,
    items: [
      {
        id: "free-energy",
        title: "Свободная энергия",
        description: "Доступ к неограниченным источникам чистой энергии",
        minZoomLevel: 1,
      },
      {
        id: "health-restoration",
        title: "Восстановление здоровья",
        description: "Полное исцеление всех болезней через технологию и сознание",
        minZoomLevel: 1,
      },
      {
        id: "social-harmony",
        title: "Социальная гармония",
        description: "Справедливое и равноправное общество без угнетения",
        minZoomLevel: 2,
      },
    ],
  },
  {
    id: "sun-event",
    title: "СОЛНЕЧНАЯ ВСПЫШКА",
    description: "Грядущее космическое событие, трансформирующее реальность",
    color: "from-red-500 to-orange-600",
    x: 45,
    y: 65,
    radius: 90,
    minZoomLevel: 0,
    items: [
      {
        id: "solar-flash",
        title: "Солнечная вспышка",
        description: "Мощный выброс энергии от Солнца, измеряемый в астрономических масштабах",
        minZoomLevel: 1,
      },
      {
        id: "reality-reset",
        title: "Перезагрузка реальности",
        description: "Переход на новый уровень физической реальности",
        minZoomLevel: 2,
      },
    ],
  },
  {
    id: "lunar-knowledge",
    title: "ЛУНА",
    description: "Древняя космическая станция, наблюдающая за Землей",
    color: "from-gray-400 to-gray-600",
    x: 75,
    y: 70,
    radius: 85,
    minZoomLevel: 0,
    items: [
      {
        id: "artificial-moon",
        title: "Искусственное происхождение",
        description: "Луна - это мегаструктура, построенная древней цивилизацией",
        minZoomLevel: 1,
      },
      {
        id: "moon-monitoring",
        title: "Мониторинг Земли",
        description: "Луна непрерывно наблюдает и регулирует условия на Земле",
        minZoomLevel: 2,
      },
    ],
  },
  {
    id: "collective-consciousness",
    title: "КОЛЛЕКТИВНОЕ СОЗНАНИЕ",
    description: "Единое информационное поле всех живых существ",
    color: "from-cyan-400 to-blue-500",
    x: 55,
    y: 25,
    radius: 80,
    minZoomLevel: 0,
    items: [
      {
        id: "morphic-field",
        title: "Морфическое поле",
        description: "Квантовое поле, содержащее память всех видов",
        minZoomLevel: 1,
      },
      {
        id: "telepathy",
        title: "Телепатия",
        description: "Прямое общение между сознаниями через коллективное поле",
        minZoomLevel: 2,
      },
    ],
  },
];
