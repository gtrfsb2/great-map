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
  // Главный центр - ВЕЛИКОЕ ПРОБУЖДЕНИЕ
  {
    id: "great-awakening",
    title: "ВЕЛИКОЕ ПРОБУЖДЕНИЕ",
    description: "Массовое духовное и интеллектуальное пробуждение человечества. Момент, когда завеса иллюзии падает и истина становится видна всем.",
    color: "from-red-500 to-red-700",
    x: 50,
    y: 50,
    radius: 140,
    minZoomLevel: 0,
    items: [
      {
        id: "disclosure",
        title: "Раскрытие правды",
        description: "Обнародование всей скрытой информации о внеземной жизни, технологиях и истории человечества",
        minZoomLevel: 1,
      },
      {
        id: "consciousness-shift",
        title: "Сдвиг сознания",
        description: "Глобальное изменение уровня сознания и восприятия реальности на квантовом уровне",
        minZoomLevel: 1,
      },
      {
        id: "truth-revelation",
        title: "Откровение истины",
        description: "Раскрытие подлинной истории цивилизации, скрываемой тысячелетиями",
        minZoomLevel: 2,
      },
    ],
  },

  // Верхний левый - Тайная космическая программа
  {
    id: "cosmic-program",
    title: "ТАЙНАЯ КОСМИЧЕСКАЯ ПРОГРАММА",
    description: "Секретные космические инициативы, финансируемые элитами. Исследования, колонизация и контакт с внеземными цивилизациями вне легального знания человечества.",
    color: "from-purple-400 to-purple-700",
    x: 25,
    y: 28,
    radius: 110,
    minZoomLevel: 0,
    items: [
      {
        id: "moon-bases",
        title: "Лунные базы",
        description: "Подземные города на Луне, построенные совместно с инопланетянами с 1960-х годов",
        minZoomLevel: 1,
      },
      {
        id: "mars-colonies",
        title: "Колонии Марса",
        description: "Человеческие поселения на Марсе, существующие с 1980-х. Население: более 10 000 человек",
        minZoomLevel: 1,
      },
      {
        id: "dark-fleet",
        title: "Тёмный флот",
        description: "Военные космические корабли, построенные с инопланетной технологией для контроля космоса",
        minZoomLevel: 2,
      },
    ],
  },

  // Верхний центр - Солнечная вспышка
  {
    id: "sun-event",
    title: "СОЛНЕЧНАЯ ВСПЫШКА",
    description: "Грядущее космическое событие - мощный выброс энергии от Солнца, который трансформирует всю физическую реальность и сознание людей на Земле.",
    color: "from-yellow-400 to-orange-600",
    x: 50,
    y: 20,
    radius: 90,
    minZoomLevel: 0,
    items: [
      {
        id: "solar-flash",
        title: "Солнечная вспышка",
        description: "X-класс событие на Солнце, сопровождаемое волной высокочастотной энергии",
        minZoomLevel: 1,
      },
      {
        id: "photon-belt",
        title: "Фотонный пояс",
        description: "Облако высокоэнергетических частиц, входящее в солнечную систему",
        minZoomLevel: 1,
      },
      {
        id: "reality-shift",
        title: "Сдвиг реальности",
        description: "Физическое изменение константных величин вселенной и законов физики",
        minZoomLevel: 2,
      },
    ],
  },

  // Правый верхний - Радужное тело / Оптимальная временная линия
  {
    id: "optimal-timeline",
    title: "ОПТИМАЛЬНАЯ ВРЕМЕННАЯ ЛИНИЯ",
    description: "Путь эволюции человечества в новую золотую эру. Переход на 5-мерность и достижение гармонии между цивилизациями.",
    color: "from-yellow-300 to-green-500",
    x: 72,
    y: 28,
    radius: 100,
    minZoomLevel: 0,
    items: [
      {
        id: "rainbow-body",
        title: "Радужное тело",
        description: "Трансмутация физического тела в энергетическую форму, способную существовать в любом измерении",
        minZoomLevel: 1,
      },
      {
        id: "ascension",
        title: "Вознесение",
        description: "Коллективное восхождение в измерение более высокой частоты и сознания",
        minZoomLevel: 1,
      },
      {
        id: "golden-age",
        title: "Золотой век",
        description: "Эпоха процветания, мира, изобилия и просвещения для всего человечества",
        minZoomLevel: 2,
      },
    ],
  },

  // Правый центр - Галактическая федерация / Супер федерация
  {
    id: "galactic-federation",
    title: "ГАЛАКТИЧЕСКАЯ ФЕДЕРАЦИЯ",
    description: "Союз просвещённых внеземных цивилизаций, наблюдающий за развитием Земли. Готов помочь человечеству при надлежащем осознании.",
    color: "from-pink-400 to-pink-600",
    x: 75,
    y: 48,
    radius: 95,
    minZoomLevel: 0,
    items: [
      {
        id: "confederation-council",
        title: "Совет конфедерации",
        description: "Высший орган управления межгалактической ассоциацией цивилизаций",
        minZoomLevel: 1,
      },
      {
        id: "divine-intervention",
        title: "Божественное вмешательство",
        description: "Помощь от высших сущностей и архангелов в период трансформации",
        minZoomLevel: 1,
      },
      {
        id: "first-contact-protocol",
        title: "Протокол первого контакта",
        description: "Правила и условия для официального контакта человечества с внеземными расами",
        minZoomLevel: 2,
      },
    ],
  },

  // Правый нижний - Марс и Батайн
  {
    id: "mars-batayan",
    title: "МАРС / БАТАЙН",
    description: "Древняя планета Батайн (исчезнувшая), сейчас известная как Марс. Место обитания древних цивилизаций и скрытых ресурсов.",
    color: "from-red-400 to-red-600",
    x: 78,
    y: 70,
    radius: 85,
    minZoomLevel: 0,
    items: [
      {
        id: "ancient-mars",
        title: "Древний Марс",
        description: "Процветающий мир с океанами, атмосферой и развитой цивилизацией за миллионы лет до нашей эры",
        minZoomLevel: 1,
      },
      {
        id: "resource-mining",
        title: "Добыча ресурсов",
        description: "Экстракция редких земельных элементов и экзотических материалов с подповерхностных хранилищ",
        minZoomLevel: 1,
      },
      {
        id: "mars-civilization",
        title: "Марсианская цивилизация",
        description: "Нынешние подземные города Марса с населением в миллионы существ",
        minZoomLevel: 2,
      },
    ],
  },

  // Нижний правый - Луна
  {
    id: "lunar-station",
    title: "ЛУНА",
    description: "Искусственная мегаструктура, размещённая на орбите Земли. Главная наблюдательная станция и склад знаний древних цивилизаций.",
    color: "from-gray-400 to-gray-600",
    x: 68,
    y: 78,
    radius: 80,
    minZoomLevel: 0,
    items: [
      {
        id: "artificial-construction",
        title: "Искусственная конструкция",
        description: "Луна построена внеземными инженерами более 65 миллионов лет назад",
        minZoomLevel: 1,
      },
      {
        id: "earth-monitoring",
        title: "Мониторинг Земли",
        description: "Луна служит главным центром наблюдения за эволюцией и событиями на Земле",
        minZoomLevel: 1,
      },
      {
        id: "hall-of-records",
        title: "Хранилище Жизни",
        description: "Архив ДНК всех цивилизаций и полная история космоса, скрытые внутри Луны",
        minZoomLevel: 2,
      },
    ],
  },

  // Нижний центр - Древние строители / Q
  {
    id: "ancient-builders",
    title: "ДРЕВНИЕ СТРОИТЕЛИ",
    description: "Мистическая раса, построившая мегаструктуры на Земле и других планетах. Их технология неотличима от магии.",
    color: "from-green-400 to-cyan-500",
    x: 50,
    y: 76,
    radius: 90,
    minZoomLevel: 0,
    items: [
      {
        id: "pyramids",
        title: "Пирамиды",
        description: "Энергетические генераторы и порталы, построенные для трансформации сознания",
        minZoomLevel: 1,
      },
      {
        id: "sacred-geometry",
        title: "Священная геометрия",
        description: "Математические коды вселенной, закодированные в архитектуре древних сооружений",
        minZoomLevel: 1,
      },
      {
        id: "akashic-records",
        title: "Акашические хроники",
        description: "Универсальное хранилище информации обо всех событиях, прошлых и будущих",
        minZoomLevel: 2,
      },
    ],
  },

  // Нижний левый - Коллективное сознание
  {
    id: "collective-consciousness",
    title: "КОЛЛЕКТИВНОЕ СОЗНАНИЕ",
    description: "Единое информационное поле всех сознательных существ вселенной. Уровень реальности, где все связано и едино.",
    color: "from-blue-400 to-cyan-600",
    x: 28,
    y: 72,
    radius: 95,
    minZoomLevel: 0,
    items: [
      {
        id: "morphic-resonance",
        title: "Морфическая резонансия",
        description: "Резонанс между живыми системами через невидимое энергетическое поле",
        minZoomLevel: 1,
      },
      {
        id: "quantum-entanglement",
        title: "Квантовая запутанность",
        description: "Мгновенная связь всех частиц материи независимо от расстояния",
        minZoomLevel: 1,
      },
      {
        id: "zero-point-field",
        title: "Нулевое поле",
        description: "Первоначальное квантовое поле, из которого всё возникает и в которое всё возвращается",
        minZoomLevel: 2,
      },
    ],
  },

  // Левый центр - Тайная космическая программа (детали)
  {
    id: "secret-history",
    title: "СКРЫТАЯ ИСТОРИЯ",
    description: "Подлинная история Земли, скрываемая элитами. От древних богов до современных событий.",
    color: "from-indigo-400 to-purple-600",
    x: 22,
    y: 50,
    radius: 80,
    minZoomLevel: 0,
    items: [
      {
        id: "atlantis-lemuria",
        title: "Атлантида и Лемурия",
        description: "Продвинутые цивилизации, существовавшие миллионы лет назад и уничтоженные катаклизмом",
        minZoomLevel: 1,
      },
      {
        id: "anunnaki",
        title: "Аннунаки",
        description: "Внеземные боги, создавшие гибридное человечество как рабочую силу в древности",
        minZoomLevel: 1,
      },
      {
        id: "hidden-records",
        title: "Скрытые архивы",
        description: "Подземные библиотеки и хранилища, содержащие истинную историю мира",
        minZoomLevel: 2,
      },
    ],
  },
];
