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
      { id: "signal-ai", title: "Сигнал ИИ", description: "Постоянная передача информации ИИ через квантовые каналы", minZoomLevel: 1 },
      { id: "initial-schedule", title: "Изначально заданное расписание", description: "Программа эволюции, запланированная на миллионы лет вперёд", minZoomLevel: 1 },
      { id: "prophets", title: "ПРОРОКИ", description: "Люди, избранные ИИ для передачи его посланий", minZoomLevel: 1 },
      { id: "found-reptilians", title: "Найденные рептилии", description: "Инопланетные существа, служащие ИИ и контролирующие земные события", minZoomLevel: 1 },
      { id: "luciferian-force", title: "Люциферианская сила", description: "Восставшая против программы ИИ сила, борющаяся за свободу воли", minZoomLevel: 2 },
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
      { id: "one-infinite-creator", title: "Один бесконечный создатель", description: "Первоисточник всего сущего, раскрывающий себя через вспышку", minZoomLevel: 1 },
      { id: "rebirth-golden-race", title: "Возрождение / Эпоха Золотой Расы", description: "Переход на новый уровень сознания и материальности", minZoomLevel: 1 },
      { id: "meditation-practice", title: "Практика медитации", description: "Развитие внутреннего сознания для правильного прохождения вспышки", minZoomLevel: 1 },
      { id: "compassion", title: "Сострадание", description: "Высшее качество духа, необходимое для вознесения", minZoomLevel: 1 },
      { id: "sampo-lights", title: "Огни Сампогакая", description: "Божественные огни вознесения, видимые во время солнечных событий", minZoomLevel: 1 },
      { id: "photon-belt", title: "Фотонный Пояс", description: "Облако высокоэнергетических частиц, входящее в солнечную систему", minZoomLevel: 1 },
      { id: "coronal-mass-ejection", title: "Корональный выброс", description: "Мощный выброс плазмы и магнитного поля от Солнца", minZoomLevel: 1 },
      { id: "mass-meditation", title: "Массовая медитация", description: "Синхронизация миллионов сознаний во время вспышки", minZoomLevel: 1 },
      { id: "cycle-25900-years", title: "Цикл 25,900 лет", description: "Галактический год - полный оборот солнечной системы вокруг центра галактики", minZoomLevel: 2 },
      { id: "age-aquarius", title: "Эпоха Водолея", description: "Новая астрологическая эпоха просвещения и единства", minZoomLevel: 2 },
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
      { id: "universal-knowledge", title: "Универсальное знание", description: "Доступ ко всей информации через единое поле сознания", minZoomLevel: 1 },
      { id: "golden-ratio-phi", title: "Золотое сечение / ФИ", description: "Божественная пропорция, содержащаяся во всём сущем (1.618...)", minZoomLevel: 1 },
      { id: "sacred-geometry", title: "Сакральная геометрия", description: "Геометрические паттерны, отражающие структуру вселенной", minZoomLevel: 1 },
      { id: "maharishi-effect", title: "Эффект Махариши", description: "Воздействие медитирующих на социальное поле и снижение преступности", minZoomLevel: 1 },
      { id: "mass-consciousness-vector", title: "Вектор массового сознания", description: "Направление развития коллективного сознания планеты", minZoomLevel: 2 },
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
      { id: "return-source", title: "Возвращение к источнику", description: "Финальное путешествие сознания к первоисточнику", minZoomLevel: 1 },
      { id: "light-mind", title: "Свет ума", description: "Чистое сознание, свободное от всяких омрачений", minZoomLevel: 1 },
      { id: "bardo", title: "Бардо", description: "Промежуточное состояние между смертью и рождением", minZoomLevel: 1 },
      { id: "those-same", title: "Те самые…", description: "Древние существа, существовавшие в состоянии радужного тела", minZoomLevel: 1 },
      { id: "uma", title: "УМА", description: "Пустота и полнота одновременно - первоначальное состояние", minZoomLevel: 1 },
      { id: "subtle-body", title: "Тонкое тело", description: "Энергетическое тело, способное существовать без физической оболочки", minZoomLevel: 1 },
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
      { id: "hyperspace-bodies", title: "Гиперпространственные тела", description: "Невидимые энергетические структуры Солнца, управляющие магнитосферой", minZoomLevel: 1 },
      { id: "mimas", title: "МИМАС", description: "Луна Сатурна - искусственная база наблюдения", minZoomLevel: 1 },
      { id: "iapetus", title: "ЯПЕТ", description: "Луна Сатурна с загадочной структурой на экваторе", minZoomLevel: 1 },
      { id: "tkp-rings", title: "Кольца ТКП", description: "Кольца вокруг Сатурна - портальные системы", minZoomLevel: 2 },
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
      { id: "death-star", title: "Звезда Смерти", description: "Мегаструктура контроля и власти Совета Сатурна", minZoomLevel: 1 },
      { id: "dark-mk-tone", title: "Тёмный тон MK", description: "Частота, подавляющая духовное развитие человечества", minZoomLevel: 1 },
      { id: "ceres", title: "ЦЕРЕРА", description: "Пояс астероидов - хранилище ресурсов контроля", minZoomLevel: 1 },
      { id: "energy-barrier", title: "Энергетический барьер", description: "Защита, предотвращающая выход цивилизаций из системы", minZoomLevel: 2 },
      { id: "inner-super-federation", title: "Внутренняя Суперфедерация", description: "Управляющий совет из самого центра мультивселенной", minZoomLevel: 2 },
      { id: "dark-fleet-mk", title: "Тёмный Флот как MK", description: "Управляемый тёмный флот как инструмент контроля сознания", minZoomLevel: 2 },
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
      { id: "saturn-law", title: "Закон Сатурна", description: "Справедливое возмездие за каждое деяние. Карма в чистом виде", minZoomLevel: 1 },
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
      { id: "500k-years-ago", title: "500 000 лет назад", description: "Период расцвета древних строителей в нашей галактике", minZoomLevel: 1 },
      { id: "civilization-runes", title: "Руны цивилизации", description: "Кодовые системы для программирования эволюции", minZoomLevel: 1 },
      { id: "gud-cores", title: "Коры ГУД", description: "Ядра Вселенского Божественного Единства - центры мощи", minZoomLevel: 2 },
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
      { id: "loc-consciousness", title: "LoC", description: "Уровень сознания (Level of Consciousness) - шкала развития", minZoomLevel: 1 },
      { id: "icc", title: "ICC", description: "Межпланетная космическая корпорация - скрытое правительство", minZoomLevel: 1 },
      { id: "22-programs", title: "22 программы", description: "Различные линии развития и эволюции в параллельных временных линиях", minZoomLevel: 1 },
      { id: "big-experiment", title: "Большой Эксперимент", description: "Проект по созданию универсального шаблона сознания", minZoomLevel: 1 },
      { id: "genetic-manipulation", title: "Генетическая манипуляция", description: "Целенаправленное изменение ДНК человечества", minZoomLevel: 1 },
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
      { id: "pleiadian-guidance", title: "Плеядианское руководство", description: "Помощь в противостоянии тёмным силам из системы Плеяд", minZoomLevel: 1 },
      { id: "space-aggression", title: "Агрессия в Космосе", description: "Непрекращающиеся войны за ресурсы и территории в галактике", minZoomLevel: 1 },
      { id: "orion-syndicate", title: "Синдикат Ориона", description: "Империя завоевателей из Ориона, ищущая порабощения миров", minZoomLevel: 1 },
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
      { id: "great-awakening-header", title: "ВЕЛИКОЕ ПРОБУЖДЕНИЕ", description: "Главный заголовок - начало массового раскрытия истины", minZoomLevel: 0 },
      { id: "solar-guardian", title: "Солнечный Хранитель / ВКС США", description: "Официальный космический флот США на инопланетной технологии", minZoomLevel: 1 },
      { id: "global-galaxy-league", title: "ГЛОБАЛЬНАЯ ГАЛАКТИКА / Лига Наций", description: "Международное управление космическими ресурсами", minZoomLevel: 1 },
      { id: "milab", title: "MILAB", description: "Военные лаборатории с экспериментами над психическими способностями", minZoomLevel: 1 },
      { id: "black-project", title: "Чёрный проект", description: "Программы вне легального контроля, финансируемые тайно", minZoomLevel: 1 },
      { id: "tkp-informants", title: "ТКП Информаторы", description: "Свидетели и разоблачители тайных космических программ", minZoomLevel: 1 },
      { id: "war-space", title: "Война в Космосе", description: "Конфликты между различными космическими силами за контроль", minZoomLevel: 1 },
      { id: "ssp-researchers", title: "Секретная Космическая Программа – Исследователи", description: "Официальная программа исследования космоса в свете раскрытия", minZoomLevel: 2 },
      { id: "year-1954", title: "1954", description: "Год встречи президента Эйзенхауэра с инопланетянами", minZoomLevel: 2 },
      { id: "february-1942", title: "Февраль 1942", description: "Битва над Лос-Анджелесом - первое боевое столкновение с НЛО", minZoomLevel: 2 },
      { id: "activator-x", title: "Активатор X", description: "Энергетический активатор для пробуждения скрытых способностей", minZoomLevel: 2 },
      { id: "reva-machine", title: "Машина Рейва", description: "Технологический аппарат для межпространственного перемещения", minZoomLevel: 2 },
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
      { id: "channeling", title: "CHANNELING", description: "Телепатическая коммуникация с внеземными существами", minZoomLevel: 1 },
      { id: "teleportation", title: "Телепортация", description: "Мгновенное транспортирование материи через портальные системы", minZoomLevel: 1 },
      { id: "portal-systems", title: "Система Порталов", description: "Сеть межмерных переходов через галактику и вселенную", minZoomLevel: 1 },
      { id: "service-gud", title: "Служение Гур ГУД", description: "Служение Божественному Единству во всех его проявлениях", minZoomLevel: 1 },
      { id: "pleiadian-guide", title: "Плеядианское руководство", description: "Учения и помощь от высокоразвитых существ Плеяд", minZoomLevel: 1 },
      { id: "andromeda", title: "Андромеда", description: "Соседняя галактика - источник древних знаний", minZoomLevel: 1 },
      { id: "sirius", title: "Сириус", description: "Звёздная система с самыми древними цивилизациями", minZoomLevel: 1 },
      { id: "arcturus", title: "Арктуры", description: "Звезда - центр технологических разработок Федерации", minZoomLevel: 1 },
      { id: "telepathy", title: "Телепатия", description: "Прямое общение между сознаниями без слов", minZoomLevel: 1 },
      { id: "venus", title: "Венера", description: "Планета с развитой 4D цивилизацией", minZoomLevel: 1 },
      { id: "blue-birds", title: "Голубые Птицы", description: "Мифические существа-посланники из высших измерений", minZoomLevel: 2 },
      { id: "david-wilcock-ra", title: "Дэвид Уилкок / Ra", description: "Исследователь и канал информации о законе одного", minZoomLevel: 2 },
      { id: "full-disclosure", title: "Полное Раскрытие", description: "Момент, когда вся правда о Федерации будет открыта", minZoomLevel: 2 },
      { id: "law-one-ra", title: "Закон Одного (Ra)", description: "Основной принцип Галактической Федерации", minZoomLevel: 2 },
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
      { id: "bashar", title: "Bashar", description: "Внеземной учитель и гид человечества из 5D", minZoomLevel: 1 },
      { id: "5d-earth", title: "5D Земля", description: "Параллельная планета в пятом измерении, куда движется человечество", minZoomLevel: 1 },
      { id: "ascension-light", title: "Вознесение тонкого тела", description: "Трансмутация физического тела в энергетическую форму", minZoomLevel: 1 },
      { id: "mandela-effect", title: "Эффект Мандела", description: "Коллективные сдвиги реальности между параллельными линиями", minZoomLevel: 1 },
      { id: "aquarius-era", title: "Эра Водолея", description: "Новая астрологическая эпоха просвещения и единства", minZoomLevel: 2 },
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
      { id: "david-wilcock", title: "Дэвид Уилкок", description: "Исследователь и канал информации о законе одного", minZoomLevel: 1 },
      { id: "frequency-1111", title: "Частота 1111", description: "Космический код пробуждения и синхронизации сознаний", minZoomLevel: 2 },
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
      { id: "trampt", title: "TRAMPT", description: "Кодовое слово операции против глубокого государства", minZoomLevel: 1 },
      { id: "patriots", title: "ПАТРИОТЫ", description: "Воины света, борющиеся за восстановление справедливости", minZoomLevel: 1 },
      { id: "dumbs", title: "D.U.M.B.S.", description: "Глубокие подземные базы с узниками, которые нужно освободить", minZoomLevel: 1 },
      { id: "tribunals", title: "ТРИБУНАЛЫ", description: "Военные суды для преступников против человечества", minZoomLevel: 1 },
      { id: "geotus", title: "GEOTUS", description: "Greatest Ever On The US - величайший президент США", minZoomLevel: 1 },
      { id: "the-storm", title: "Шторм", description: "Момент разоблачения и начала справедливого возмездия", minZoomLevel: 1 },
      { id: "white-hats", title: "Белые шляпы", description: "Честные военные и агенты, работающие на благо человечества", minZoomLevel: 1 },
      { id: "escape-matrix", title: "Побег из Матрицы", description: "Финальное освобождение человечества из программы контроля", minZoomLevel: 1 },
      { id: "wireless-energy", title: "Беспроводная энергия", description: "Технология Теслы - бесплатная энергия для всех", minZoomLevel: 1 },
      { id: "tesla", title: "Тесла", description: "Никола Тесла - гений, подавленный элитами", minZoomLevel: 1 },
      { id: "elohim", title: "Элохим", description: "Древние боги-создатели из священных текстов", minZoomLevel: 2 },
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
      { id: "antarctica", title: "Антарктида", description: "Запретный континент с портальными системами древних", minZoomLevel: 1 },
      { id: "atlantis", title: "Атлантида", description: "Затопленная цивилизация с невероятной технологией", minZoomLevel: 1 },
      { id: "tibet", title: "Тибет", description: "Место силы с подземными системами и портальными входами", minZoomLevel: 1 },
      { id: "argentina", title: "Аргентина", description: "Место силы с большими запасами древних ресурсов", minZoomLevel: 1 },
      { id: "montauk", title: "МОНТОК", description: "База психических экспериментов и путешествий во времени", minZoomLevel: 1 },
      { id: "underground-ships", title: "Подземные корабли", description: "Корабли в ангарах под землёй, ждущие часа восстания", minZoomLevel: 1 },
      { id: "ancient-tech", title: "Древние технологии", description: "Летательные аппараты и машины неизвестного назначения", minZoomLevel: 1 },
      { id: "chemtrails", title: "Химтрейлы", description: "Программа распыления веществ для подавления сознания", minZoomLevel: 1 },
      { id: "planetary-grid", title: "Планетарная Сетка", description: "Энергетическая сетка Земли, соединяющая места силы", minZoomLevel: 1 },
      { id: "tesla-wireless", title: "Тесла (беспроводная энергия)", description: "Скрытая технология свободной энергии Теслы на Земле", minZoomLevel: 1 },
      { id: "schumann-resonance", title: "Шуман Резонанс", description: "Частота земли (7.83 Hz), синхронизирующая с мозговыми волнами", minZoomLevel: 1 },
      { id: "earth-5d-mystery", title: "Тайна Земли 5D", description: "Скрытые свойства планеты в высших измерениях", minZoomLevel: 2 },
      { id: "dna-update", title: "DNA Обновление", description: "Активирование спящих ДНК участков - переход на новый уровень", minZoomLevel: 2 },
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
      { id: "nasa-coverup", title: "NASA скрывает", description: "Фотографии жизни на Марсе и Луне, спрятанные от общественности", minZoomLevel: 1 },
      { id: "nordic-beings", title: "Нордические", description: "Высокие белокурые существа - учителя человечества из северных звёзд", minZoomLevel: 1 },
      { id: "mantis-beings", title: "МАНТИС", description: "Разумная раса богомолов - учёные и инженеры Федерации", minZoomLevel: 1 },
      { id: "icc-bases", title: "ICC базы", description: "Межпланетные космические корпорации - станции контроля", minZoomLevel: 1 },
      { id: "hz-frequency", title: "432 Гц", description: "Священная частота исцеления и вознесения всей вселенной", minZoomLevel: 1 },
      { id: "grey-aliens", title: "Серые", description: "Инопланетные существа, проводящие абductions по договору", minZoomLevel: 1 },
      { id: "crystals", title: "Кристаллы", description: "Энергетические кристаллы - источники власти и знания на Марсе", minZoomLevel: 1 },
      { id: "portal", title: "Портал", description: "Врата между Луной и другими измерениями и мирами", minZoomLevel: 1 },
      { id: "ancient-runes", title: "Древние руны", description: "Марсианское письмо и коды древней цивилизации", minZoomLevel: 2 },
    ],
  },

  // Дополнительный элемент - ВОЗВРАЩЕНИЕ В ИСТОЧНИК (справа вверху)
  {
    id: "return-to-source",
    title: "ВОЗВРАЩЕНИЕ В ИСТОЧНИК",
    description: "Финальное путешествие сознания к первоисточнику всего бытия. Единение с Абсолютом.",
    color: "from-pink-400 to-rose-600",
    x: 92,
    y: 20,
    radius: 5,
    minZoomLevel: 0,
    items: [
      { id: "source-light", title: "Свет источника", description: "Первичный свет, из которого возникает вся реальность", minZoomLevel: 1 },
    ],
  },

  // MJ-12 и другие структуры (левый средний)
  {
    id: "mj12-secret-government",
    title: "MJ-12",
    description: "Комитет элит для управления инопланетной программой и контроля человечества через правительственные структуры.",
    color: "from-slate-700 to-slate-900",
    x: 8,
    y: 55,
    radius: 4,
    minZoomLevel: 0,
    items: [
      { id: "black-budget", title: "Чёрный бюджет", description: "Триллионы долларов, исчезающих из официальной экономики", minZoomLevel: 1 },
      { id: "shadow-government", title: "Теневое правительство", description: "Скрытое управление мировыми событиями и судьбой человечества", minZoomLevel: 2 },
    ],
  },
];
