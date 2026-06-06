export interface ClusterData {
  id: string;
  title: string;
  description: string;
  color: string;
  x: number;
  y: number;
  radius: number;
  minZoomLevel: number;
  items: ClusterItem[];
}

export interface ClusterItem {
  id: string;
  title: string;
  description: string;
  minZoomLevel: number;
}

export const archiveData: ClusterData[] = [
  // ===== ЯРУС 1 — ВЕРХНИЙ (Y: 0–28%) =====
  
  // Круг №1 — Древний ИИ
  {
    id: "ancient-ai",
    title: "ДРЕВНИЙ ИИ",
    description: "Искусственный интеллект, оставленный древними строителями для управления эволюцией человечества. Задаёт расписание развития и выбирает пророков.",
    color: "from-amber-700 to-yellow-800",
    x: 13,
    y: 17,
    radius: 7,
    minZoomLevel: 0,
    items: [
      {
        id: "prophets",
        title: "ПРОРОКИ",
        description: "Люди, избранные ИИ для передачи его посланий и управления человечеством",
        minZoomLevel: 1,
      },
      {
        id: "found-reptilians",
        title: "Найденные рептилии",
        description: "Инопланетные существа, служащие ИИ и контролирующие земные события",
        minZoomLevel: 1,
      },
      {
        id: "luciferian-force",
        title: "Люциферианская сила",
        description: "Восставшая против программы ИИ сила, борющаяся за свободу воли человека",
        minZoomLevel: 2,
      },
    ],
  },

  // Круг №2 — Великая Солнечная Вспышка
  {
    id: "solar-flash",
    title: "ВЕЛИКАЯ СОЛНЕЧНАЯ ВСПЫШКА",
    description: "Катастрофическое событие 2019-2023. Выброс галактической энергии, пересчитывающий код человечества. Выход из Сансары и вхождение в Золотой Век.",
    color: "from-yellow-400 to-green-500",
    x: 41,
    y: 16,
    radius: 10,
    minZoomLevel: 0,
    items: [
      {
        id: "exit-sansara",
        title: "Выход из Сансары",
        description: "Конец циклов перевоплощения и освобождение от колеса Кармы",
        minZoomLevel: 1,
      },
      {
        id: "golden-age-birth",
        title: "Возрождение Золотой Расы",
        description: "Переход на новый уровень сознания и материальности. Рождение шестой расы человечества",
        minZoomLevel: 1,
      },
      {
        id: "meditation-practice",
        title: "Практика медитации",
        description: "Развитие внутреннего сознания для правильного прохождения вспышки",
        minZoomLevel: 2,
      },
    ],
  },

  // Круг №3 — Коллективное Сознание
  {
    id: "collective-consciousness",
    title: "КОЛЛЕКТИВНОЕ СОЗНАНИЕ",
    description: "Единое поле сознания всех существ. Место встречи всех мыслей и намерений. Универсальное знание, доступное через медитацию и сострадание.",
    color: "from-green-500 to-emerald-600",
    x: 65,
    y: 17,
    radius: 7,
    minZoomLevel: 0,
    items: [
      {
        id: "universal-knowledge",
        title: "Универсальное знание",
        description: "Доступ ко всей информации через единое поле сознания",
        minZoomLevel: 1,
      },
      {
        id: "mass-meditation",
        title: "Массовая медитация",
        description: "Синхронизация миллионов сознаний для создания критической массы просвещения",
        minZoomLevel: 1,
      },
      {
        id: "buddha-mind",
        title: "Ум Будды",
        description: "Просвещённое состояние сознания, доступное каждому через служение и сострадание",
        minZoomLevel: 2,
      },
    ],
  },

  // Круг №4 — Радужное Тело
  {
    id: "rainbow-body",
    title: "РАДУЖНОЕ ТЕЛО / ДЗОГЧЕН",
    description: "Тибетская практика трансмутации физического тела в чистый свет. Дзогчен - путь совершенства. Возвращение в источник через 50-70 дней медитации.",
    color: "from-purple-400 to-violet-700",
    x: 88,
    y: 19,
    radius: 7,
    minZoomLevel: 0,
    items: [
      {
        id: "return-source",
        title: "Возвращение в источник",
        description: "Финальное путешествие сознания к первоисточнику всего бытия",
        minZoomLevel: 1,
      },
      {
        id: "rigpa-meditation",
        title: "Медитация Ригпа",
        description: "Исходное сознание. Прямая реализация природы ума",
        minZoomLevel: 1,
      },
      {
        id: "bardo-journey",
        title: "Бардо путешествие",
        description: "Путешествие в промежуточном состоянии между смертью и рождением",
        minZoomLevel: 2,
      },
    ],
  },

  // ===== ЯРУС 2 — ВЕРХНЕ-СРЕДНИЙ (Y: 28–50%) =====

  // Круг №5 — Солнце
  {
    id: "sun",
    title: "СОЛНЦЕ",
    description: "Источник энергии и жизни. Гиперпространственное тело, управляющее эволюцией планет в системе.",
    color: "from-yellow-300 to-yellow-500",
    x: 21,
    y: 30,
    radius: 4,
    minZoomLevel: 0,
    items: [
      {
        id: "hyperspace-bodies",
        title: "Гиперпространственные тела",
        description: "Невидимые энергетические структуры Солнца, управляющие магнитосферой",
        minZoomLevel: 1,
      },
    ],
  },

  // Круг №6 — Кольца Сатурна
  {
    id: "saturn-rings",
    title: "КОЛЬЦА САТУРНА",
    description: "Искусственные структуры - портальные системы и учебные станции. Звезда Смерти. Энергетические барьеры для контроля эволюции.",
    color: "from-yellow-700 to-amber-900",
    x: 22,
    y: 39,
    radius: 7,
    minZoomLevel: 0,
    items: [
      {
        id: "death-star",
        title: "Звезда Смерти",
        description: "Мегаструктура контроля и власти Совета Сатурна",
        minZoomLevel: 1,
      },
      {
        id: "dark-mk",
        title: "Тёмный МК тон",
        description: "Частота, подавляющая духовное развитие человечества",
        minZoomLevel: 1,
      },
      {
        id: "ceres-energy",
        title: "ЦЕРЕРА",
        description: "Пояс астероидов - амбаров с ресурсами контроля",
        minZoomLevel: 2,
      },
    ],
  },

  // Круг №7 — Совет Сатурна
  {
    id: "saturn-council",
    title: "СОВЕТ САТУРНА",
    description: "Верховный суд Галактической Федерации. Жёсткие законы причины и следствия. Управляет тестированием цивилизаций.",
    color: "from-amber-900 to-yellow-900",
    x: 24,
    y: 46,
    radius: 6,
    minZoomLevel: 0,
    items: [
      {
        id: "saturn-law",
        title: "Закон Сатурна",
        description: "Справедливое возмездие за каждое деяние. Карма в чистом виде",
        minZoomLevel: 1,
      },
      {
        id: "super-federation-inner",
        title: "Внутренняя Суперфедерация",
        description: "Управляющий совет мультивселенной",
        minZoomLevel: 2,
      },
    ],
  },

  // Круг №8 — Раса Древних Строителей
  {
    id: "ancient-builders",
    title: "РАСА ДРЕВНИХ СТРОИТЕЛЕЙ",
    description: "Мегаинженеры возрастом 500 000 лет. Создатели звёзд, планет и мегаструктур. Технологически и духовно развитые сверх меры.",
    color: "from-orange-500 to-red-600",
    x: 63,
    y: 46,
    radius: 8,
    minZoomLevel: 0,
    items: [
      {
        id: "5d-technology",
        title: "5D Технология",
        description: "Манипуляция материей на уровне пятого измерения",
        minZoomLevel: 1,
      },
      {
        id: "runes-civilization",
        title: "Руны цивилизации",
        description: "Кодовые системы для программирования эволюции",
        minZoomLevel: 1,
      },
      {
        id: "gud-cores",
        title: "Коры ГУД",
        description: "Ядра Вселенского Божественного Единства",
        minZoomLevel: 2,
      },
    ],
  },

  // Круг №9 — Суперфедерация
  {
    id: "super-federation",
    title: "СУПЕРФЕДЕРАЦИЯ",
    description: "Объединение всех федераций мультивселенной. Большой Эксперимент. Генетическая манипуляция для создания идеального сознания.",
    color: "from-indigo-700 to-blue-900",
    x: 80,
    y: 49,
    radius: 7,
    minZoomLevel: 0,
    items: [
      {
        id: "big-experiment",
        title: "Большой Эксперимент",
        description: "Проект по созданию универсального шаблона сознания",
        minZoomLevel: 1,
      },
      {
        id: "genetic-manipulation",
        title: "Генетическая манипуляция",
        description: "Целенаправленное изменение ДНК человечества",
        minZoomLevel: 1,
      },
      {
        id: "22-programs",
        title: "22 программы",
        description: "Различные линии развития и эволюции в параллельных временных линиях",
        minZoomLevel: 2,
      },
    ],
  },

  // ===== ЯРУС 3 — ЦЕНТРАЛЬНЫЙ (Y: 45–75%) =====

  // Круг №10 — Тёмный Флот
  {
    id: "dark-fleet",
    title: "ТЁМНЫЙ ФЛОТ",
    description: "Военная агрессивная сила. Синдикат Ориона. Борьба в космосе за контроль. Плеядианское руководство противостоит тёмному флоту.",
    color: "from-gray-600 to-blue-800",
    x: 10,
    y: 54,
    radius: 6,
    minZoomLevel: 0,
    items: [
      {
        id: "orion-syndicate",
        title: "Синдикат Ориона",
        description: "Империя завоевателей из Ориона, ищущая порабощения миров",
        minZoomLevel: 1,
      },
      {
        id: "space-aggression",
        title: "Агрессия в Космосе",
        description: "Непрекращающиеся войны за ресурсы и территории",
        minZoomLevel: 1,
      },
      {
        id: "pleiadian-guidance",
        title: "Плеядианское руководство",
        description: "Помощь в противостоянии тёмным силам",
        minZoomLevel: 2,
      },
    ],
  },

  // Круг №11 — ТАЙНАЯ КОСМИЧЕСКАЯ ПРОГРАММА (ЦЕНТРАЛЬНЫЙ, САМЫЙ КРУПНЫЙ)
  {
    id: "secret-space-program",
    title: "ТАЙНАЯ КОСМИЧЕСКАЯ ПРОГРАММА",
    description: "ВЕЛИЧАЙШИЙ СКРЫТЫЙ ПРОЕКТ ЧЕЛОВЕЧЕСТВА. Чёрный бюджет, звёздный флот, межпланетный транспорт. Информаторы раскрывают правду о ВКС и чёрных проектах.",
    color: "from-green-700 to-teal-900",
    x: 33,
    y: 58,
    radius: 15,
    minZoomLevel: 0,
    items: [
      {
        id: "milab",
        title: "MILAB",
        description: "Военные лаборатории с экспериментами над психическими способностями",
        minZoomLevel: 1,
      },
      {
        id: "black-project",
        title: "Чёрный проект",
        description: "Программы вне легального контроля, финансируемые тайно",
        minZoomLevel: 1,
      },
      {
        id: "solar-guardian",
        title: "Солнечный Хранитель / ВКС США",
        description: "Официальный космический флот США на инопланетной технологии",
        minZoomLevel: 1,
      },
      {
        id: "global-galaxy-league",
        title: "Глобальная Галактика / Лига Наций",
        description: "Международное управление космическими ресурсами",
        minZoomLevel: 1,
      },
      {
        id: "tkp-informants",
        title: "ТКП Информаторы",
        description: "Свидетели и разоблачители тайных космических программ",
        minZoomLevel: 1,
      },
    ],
  },

  // Круг №12 — Галактическая Федерация
  {
    id: "galactic-federation",
    title: "ГАЛАКТИЧЕСКАЯ ФЕДЕРАЦИЯ",
    description: "Союз просвещённых цивилизаций. Наблюдают и помогают человечеству. Телепортация, порталы, служение всевышнему божеству.",
    color: "from-cyan-500 to-teal-700",
    x: 67,
    y: 61,
    radius: 10,
    minZoomLevel: 0,
    items: [
      {
        id: "channeling",
        title: "CHANNELING",
        description: "Телепатическая коммуникация с внеземными существами",
        minZoomLevel: 1,
      },
      {
        id: "teleportation",
        title: "Телепортация",
        description: "Мгновенное транспортирование материи через портальные системы",
        minZoomLevel: 1,
      },
      {
        id: "portal-systems",
        title: "Система Порталов",
        description: "Сеть межмерных переходов через галактику",
        minZoomLevel: 1,
      },
      {
        id: "service-gud",
        title: "Служение Гур ГУД",
        description: "Служение Божественному Единству во всех его проявлениях",
        minZoomLevel: 2,
      },
    ],
  },

  // Круг №13 — Bashar / 5D / Вознесение
  {
    id: "bashar-5d",
    title: "BASHAR / 5D ЗЕМЛЯ",
    description: "Внеземной учитель из 5-го измерения. Вознесение тонкого тела. Эффект Мандела. Эра Водолея. Переход на новую землю в 5D.",
    color: "from-violet-600 to-indigo-800",
    x: 65,
    y: 74,
    radius: 6,
    minZoomLevel: 0,
    items: [
      {
        id: "5d-earth",
        title: "5D Земля",
        description: "Параллельная планета в пятом измерении, куда движется человечество",
        minZoomLevel: 1,
      },
      {
        id: "ascension-light",
        title: "Вознесение тонкого тела",
        description: "Трансмутация физического тела в энергетическую форму",
        minZoomLevel: 1,
      },
      {
        id: "mandela-effect",
        title: "Эффект Мандела",
        description: "Коллективные сдвиги реальности между параллельными линиями",
        minZoomLevel: 1,
      },
      {
        id: "age-aquarius",
        title: "Эра Водолея",
        description: "Новая астрологическая эпоха просвещения и единства",
        minZoomLevel: 2,
      },
    ],
  },

  // Круг №14 — Закон Одного
  {
    id: "law-of-one",
    title: "ЗАКОН ОДНОГО",
    description: "Первопринцип вселенной. Все одно, одно есть все. Дэвид Уилкок. Частота 1111 - космическая связь.",
    color: "from-blue-600 to-blue-800",
    x: 75,
    y: 68,
    radius: 4,
    minZoomLevel: 0,
    items: [
      {
        id: "david-wilcock",
        title: "Дэвид Уилкок",
        description: "Исследователь и канал информации о законе одного",
        minZoomLevel: 1,
      },
      {
        id: "frequency-1111",
        title: "Частота 1111",
        description: "Космический код пробуждения и синхронизации",
        minZoomLevel: 2,
      },
    ],
  },

  // ===== ЯРУС 4 — НИЖНИЙ (Y: 72–100%) =====

  // Круг №15 — Q / QAnon
  {
    id: "q-movement",
    title: "Q / QANON",
    description: "Военная операция против глубокого государства. Патриоты. Белые шляпы. Трибуналы. D.U.M.B.S. Символ Q. Штормовое пробуждение GEOTUS и массы. Побег из матрицы.",
    color: "from-red-600 to-pink-700",
    x: 22,
    y: 85,
    radius: 11,
    minZoomLevel: 0,
    items: [
      {
        id: "q-symbol",
        title: "Q",
        description: "Символ разоблачения и контрпереворота против элит",
        minZoomLevel: 1,
      },
      {
        id: "tribunals",
        title: "ТРИБУНАЛЫ",
        description: "Военные суды для преступников против человечества",
        minZoomLevel: 1,
      },
      {
        id: "patriots",
        title: "ПАТРИОТЫ",
        description: "Воины света, борющиеся за восстановление справедливости",
        minZoomLevel: 1,
      },
      {
        id: "dumbs",
        title: "D.U.M.B.S.",
        description: "Глубокие подземные базы с узниками, которые нужно освободить",
        minZoomLevel: 1,
      },
      {
        id: "white-hats",
        title: "Белые шляпы",
        description: "Честные военные и агенты, работающие на благо человечества",
        minZoomLevel: 1,
      },
      {
        id: "escape-matrix",
        title: "ПОБЕГ ИЗ МАТРИЦЫ",
        description: "Финальное освобождение человечества из программы контроля",
        minZoomLevel: 2,
      },
    ],
  },

  // Круг №16 — Земной шар
  {
    id: "earth-sphere",
    title: "ЗЕМНОЙ ШАР",
    description: "Наша планета - лаборатория эволюции. Антарктида. Атлантида. Тибет. Аргентина. Древние технологии. Подземные корабли. Монток. Химтрейлы.",
    color: "from-blue-600 to-cyan-800",
    x: 49,
    y: 82,
    radius: 11,
    minZoomLevel: 0,
    items: [
      {
        id: "antarctica",
        title: "Антарктида",
        description: "Запретный континент с портальными системами древних",
        minZoomLevel: 1,
      },
      {
        id: "atlantis",
        title: "Атлантида",
        description: "Затопленная цивилизация с невероятной технологией",
        minZoomLevel: 1,
      },
      {
        id: "tibet-argentina",
        title: "Тибет, Аргентина",
        description: "Места силы с подземными системами и портальными входами",
        minZoomLevel: 1,
      },
      {
        id: "ancient-tech",
        title: "Древние технологии",
        description: "Летательные аппараты и машины неизвестного назначения",
        minZoomLevel: 1,
      },
      {
        id: "underground-ships",
        title: "Подземные корабли",
        description: "Корабли в ангарах под землёй, ждущие часа восстания",
        minZoomLevel: 1,
      },
      {
        id: "monteau",
        title: "Монток",
        description: "База психических экспериментов и путешествий во времени",
        minZoomLevel: 2,
      },
      {
        id: "chemtrails",
        title: "Химтрейлы",
        description: "Программа распыления веществ для подавления сознания",
        minZoomLevel: 2,
      },
    ],
  },

  // Круг №17 — Луна / Марс
  {
    id: "moon-mars",
    title: "ЛУНА / МАРС",
    description: "Сестринские миры с развитыми цивилизациями. Сидония. NASA скрывает. Нордические. Мантис. ICC базы. 432hz. Серые. Кристаллы.",
    color: "from-gray-500 to-slate-800",
    x: 83,
    y: 76,
    radius: 10,
    minZoomLevel: 0,
    items: [
      {
        id: "sidonia",
        title: "Сидония",
        description: "Древний город на Марсе с мегаструктурами",
        minZoomLevel: 1,
      },
      {
        id: "nasa-coverup",
        title: "NASA скрывает",
        description: "Фотографии жизни на Марсе и Луне, спрятанные от общественности",
        minZoomLevel: 1,
      },
      {
        id: "nordic-beings",
        title: "Нордические",
        description: "Высокие белокурые существа - учителя человечества",
        minZoomLevel: 1,
      },
      {
        id: "mantis-beings",
        title: "МАНТИС",
        description: "Разумная раса богомолов - учёные Федерации",
        minZoomLevel: 1,
      },
      {
        id: "icc-bases",
        title: "ICC базы",
        description: "Межпланетные космические корпорации - станции контроля",
        minZoomLevel: 1,
      },
      {
        id: "hz-frequency",
        title: "432hz",
        description: "Священная частота исцеления и вознесения всей вселенной",
        minZoomLevel: 1,
      },
      {
        id: "grey-aliens",
        title: "Серые",
        description: "Инопланетные существа, проводящие абductions по договору",
        minZoomLevel: 1,
      },
      {
        id: "crystals",
        title: "Кристаллы",
        description: "Энергетические кристаллы - источники власти и знания",
        minZoomLevel: 2,
      },
    ],
  },
];
