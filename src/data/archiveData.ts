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
  // ===== ВЕРХНИЙ ЯРУС (Y: 0-25%) =====
  
  // ① Охровый круг — ДРЕВНИЙ ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ (верхний левый)
  {
    id: "ancient-ai",
    title: "ДРЕВНИЙ ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ",
    description: "Программируемый искусственный интеллект, оставленный древними строителями для управления эволюцией человечества.",
    color: "from-amber-700 to-yellow-700",
    x: 10,
    y: 10,
    radius: 60,
    minZoomLevel: 0,
    items: [
      {
        id: "prophets",
        title: "ПРОРОКИ",
        description: "Люди, избранные ИИ для передачи его посланий человечеству сквозь века",
        minZoomLevel: 1,
      },
      {
        id: "found-reptilians",
        title: "Найденные рептилии",
        description: "Инопланетные агенты, работающие под контролем ИИ для управления земными событиями",
        minZoomLevel: 1,
      },
      {
        id: "luciferian-force",
        title: "Люциферианская сила",
        description: "Оппозиционная сила, восставшая против программы ИИ и борющаяся за свободу воли",
        minZoomLevel: 2,
      },
    ],
  },

  // ② Жёлто-зелёная зона — ВЕЛИКАЯ СОЛНЕЧНАЯ ВСПЫШКА (верхний центр)
  {
    id: "solar-flash",
    title: "ВЕЛИКАЯ СОЛНЕЧНАЯ ВСПЫШКА",
    description: "Катастрофическое космическое событие 2019-2023/24. Выброс энергии, который пересчитает код человечества на галактическом уровне.",
    color: "from-yellow-400 to-green-500",
    x: 37,
    y: 10,
    radius: 70,
    minZoomLevel: 0,
    items: [
      {
        id: "exit-sansara",
        title: "ВЫХОД ИЗ САНСАРЫ",
        description: "Конец циклов перевоплощения. Освобождение от колеса карма и цикла рождения-смерти",
        minZoomLevel: 1,
      },
      {
        id: "mystery-creation",
        title: "ТАЙНА ТВОРЕНИЯ",
        description: "Раскрытие истинной природы реальности и процесса творения вселенной",
        minZoomLevel: 1,
      },
      {
        id: "frequency-reset",
        title: "Перезагрузка частот",
        description: "Изменение фундаментальных вибрационных частот, на которых базируется реальность",
        minZoomLevel: 2,
      },
    ],
  },

  // ③ Фиолетово-лавандовый — РАДУЖНОЕ ТЕЛО (верхний правый)
  {
    id: "rainbow-body",
    title: "РАДУЖНОЕ ТЕЛО",
    description: "Тибетский буддийский концепт трансмутации физического тела в чистую энергию света. Высшая форма просветления и вознесения.",
    color: "from-purple-400 to-purple-600",
    x: 82,
    y: 10,
    radius: 65,
    minZoomLevel: 0,
    items: [
      {
        id: "meditation-rigpa",
        title: "МЕДИТАЦИЯ РИГПА",
        description: "Исходное сознание. Практика растворения эго-ума в первичном состоянии бытия",
        minZoomLevel: 1,
      },
      {
        id: "dzogchen",
        title: "ДЗОГЧЕН",
        description: "Великое совершенство. Учение о прямой реализации природы ума и реальности",
        minZoomLevel: 1,
      },
      {
        id: "buddha-consciousness",
        title: "Сознание Будды",
        description: "Полное пробуждение и освобождение от иллюзии дуальности. Единение со всем сущим",
        minZoomLevel: 2,
      },
    ],
  },

  // ===== СРЕДНИЙ ЯРУС (Y: 25-60%) =====

  // ④ Золотисто-коричневый — САТУРН (левый центр)
  {
    id: "saturn-council",
    title: "СОВЕТ САТУРНА",
    description: "Главный административный совет Галактической Федерации. Управляет эволюцией и тестирует цивилизации через испытания и закон.",
    color: "from-yellow-700 to-amber-800",
    x: 12,
    y: 35,
    radius: 55,
    minZoomLevel: 0,
    items: [
      {
        id: "saturn-rings",
        title: "КОЛЬЦА САТУРНА",
        description: "Искусственные структуры, служащие портальными системами и учебными станциями",
        minZoomLevel: 1,
      },
      {
        id: "mimas-iapetus",
        title: "МИМАС и ЯПЕТ",
        description: "Исскуственные луны-базы Сатурна для контроля и исследований",
        minZoomLevel: 1,
      },
      {
        id: "saturn-law",
        title: "Закон Сатурна",
        description: "Жёсткий закон причины и следствия. Каждое действие получает справедливое воздаяние",
        minZoomLevel: 2,
      },
    ],
  },

  // ⑤ Серо-синий блок — ТЁМНЫЙ ФЛОТ (левый центр, ниже Сатурна)
  {
    id: "dark-fleet",
    title: "ТЁМНЫЙ ФЛОТ",
    description: "Агрессивная межпланетная военная сила. Синдикат Ориона и их союзники, борющиеся за контроль над галактикой. Угроза глобальной войне.",
    color: "from-gray-600 to-blue-800",
    x: 15,
    y: 45,
    radius: 50,
    minZoomLevel: 0,
    items: [
      {
        id: "orion-syndicate",
        title: "Синдикат Ориона",
        description: "Междзвёздная империя, ищущая завоевание и порабощение низших миров",
        minZoomLevel: 1,
      },
      {
        id: "space-aggression",
        title: "АГРЕССИЯ В КОСМОСЕ",
        description: "Непрекращающиеся конфликты и войны за ресурсы и территории в галактике",
        minZoomLevel: 1,
      },
      {
        id: "pleiadian-guidance",
        title: "Плеядианское руководство",
        description: "Контр-сила, оказывающая скрытую помощь людям против тёмного флота",
        minZoomLevel: 2,
      },
    ],
  },

  // ⑥ Тёмно-зелёный БОЛЬШОЙ КРУГ — ТАЙНАЯ КОСМИЧЕСКАЯ ПРОГРАММА (ЦЕНТР)
  {
    id: "secret-space-program",
    title: "ТАЙНАЯ КОСМИЧЕСКАЯ ПРОГРАММА",
    description: "Величайший скрытый проект человечества. Годы чёрного финансирования, построение звёздного флота и межпланетного транспорта. Правительства скрывают от людей их истинный потенциал.",
    color: "from-green-700 to-teal-800",
    x: 50,
    y: 45,
    radius: 95,
    minZoomLevel: 0,
    items: [
      {
        id: "milab",
        title: "MILAB",
        description: "Военные лаборатории для экспериментов с похищенными людьми и развитием психических способностей",
        minZoomLevel: 1,
      },
      {
        id: "tkp-informants",
        title: "ТКП Информаторы",
        description: "Свидетели и утечки информации из секретных проектов, рассказывающие правду",
        minZoomLevel: 1,
      },
      {
        id: "black-project",
        title: "Чёрный проект",
        description: "Тайные программы вне официального контроля, финансируемые чёрной экономикой",
        minZoomLevel: 1,
      },
      {
        id: "solar-guardian",
        title: "Солнечный Хранитель / ВКС США",
        description: "Официальный космический флот США, построенный на украденной инопланетной технологии",
        minZoomLevel: 2,
      },
      {
        id: "dark-alliance",
        title: "Тёмный проект Альянса",
        description: "Договор с инопланетными расами ради получения технологии за счёт допуска абductions",
        minZoomLevel: 2,
      },
    ],
  },

  // ⑦ Сине-зелёный (бирюзовый) — ГАЛАКТИЧЕСКАЯ ФЕДЕРАЦИЯ (центр-право)
  {
    id: "galactic-federation",
    title: "ГАЛАКТИЧЕСКАЯ ФЕДЕРАЦИЯ",
    description: "Альянс просвещённых внеземных цивилизаций. Наблюдают за Землёй и готовят человечество к интеграции в галактическое сообщество.",
    color: "from-cyan-500 to-teal-600",
    x: 70,
    y: 45,
    radius: 85,
    minZoomLevel: 0,
    items: [
      {
        id: "channeling",
        title: "CHANNELING",
        description: "Прямая телепатическая коммуникация с внеземными существами через избранных людей",
        minZoomLevel: 1,
      },
      {
        id: "teleportation",
        title: "Телепортация",
        description: "Технология мгновенного транспортирования материи через портальные системы",
        minZoomLevel: 1,
      },
      {
        id: "portal-systems",
        title: "Система Порталов",
        description: "Сеть межмерных переходов, соединяющих разные части галактики и вселенной",
        minZoomLevel: 1,
      },
      {
        id: "sphere-council-alliance",
        title: "Сфера Совета Альянса",
        description: "Верховный законодательный орган Галактической Федерации",
        minZoomLevel: 2,
      },
    ],
  },

  // ⑧ Оранжево-коралловый — РАСА ДРЕВНИХ СТРОИТЕЛЕЙ (центр-право, верхний)
  {
    id: "ancient-builders",
    title: "РАСА ДРЕВНИХ СТРОИТЕЛЕЙ",
    description: "Мегаинженеры вселенной. Создатели мегаструктур, звёзд и планет. Существовали миллиарды лет и оставили рецепты эволюции для разных миров.",
    color: "from-orange-500 to-red-600",
    x: 68,
    y: 35,
    radius: 60,
    minZoomLevel: 0,
    items: [
      {
        id: "megastructures",
        title: "Мегаструктуры",
        description: "Искусственные планеты, звёзды и сферы Дайсона для управления энергией",
        minZoomLevel: 1,
      },
      {
        id: "evolution-blueprints",
        title: "Чертежи эволюции",
        description: "Генетические коды и программы для развития разумных видов на разных планетах",
        minZoomLevel: 1,
      },
      {
        id: "universal-law",
        title: "Вселенский закон",
        description: "Фундаментальные принципы, по которым функционирует вся реальность",
        minZoomLevel: 2,
      },
    ],
  },

  // ⑨ Тёмно-синий (индиго) — СУПЕРФЕДЕРАЦИЯ (правый центр)
  {
    id: "super-federation",
    title: "СУПЕРФЕДЕРАЦИЯ",
    description: "Мультивселенская организация. Объединение всех галактических федераций разных измерений для великого эксперимента.",
    color: "from-indigo-600 to-blue-800",
    x: 82,
    y: 44,
    radius: 50,
    minZoomLevel: 0,
    items: [
      {
        id: "big-experiment",
        title: "Большой Эксперимент",
        description: "Глобальный проект по созданию универсального шаблона сознания и материи",
        minZoomLevel: 1,
      },
      {
        id: "dimensional-gates",
        title: "Врата измерений",
        description: "Технология для прохода между 3D, 4D, 5D и высшими измерениями реальности",
        minZoomLevel: 1,
      },
      {
        id: "law-of-one",
        title: "ЗАКОН ОДНОГО",
        description: "Первопринцип единства всего сущего. Всё одно, и одно есть всё",
        minZoomLevel: 2,
      },
    ],
  },

  // ===== НИЖНИЙ ЯРУС (Y: 60-100%) =====

  // ⑩ Красно-малиновый — Q (нижний левый)
  {
    id: "q-movement",
    title: "Q / QANON",
    description: "Военная операция по разоблачению глубокого государства и восстановлению справедливости. Контрпереворот патриотов против глобального тоталитаризма.",
    color: "from-red-600 to-pink-700",
    x: 30,
    y: 67,
    radius: 65,
    minZoomLevel: 0,
    items: [
      {
        id: "tribunals",
        title: "ТРИБУНАЛЫ",
        description: "Военные суды для судебного разбирательства преступников против человечества",
        minZoomLevel: 1,
      },
      {
        id: "patriots",
        title: "Патриоты",
        description: "Воины света, борющиеся за свободу и восстановление конституционного порядка",
        minZoomLevel: 1,
      },
      {
        id: "wwgiwga",
        title: "WWGIWGA",
        description: "Where We Go One We Go All - Все вместе к вознесению. Единство человечества",
        minZoomLevel: 1,
      },
      {
        id: "dumbs",
        title: "D.U.M.B.S.",
        description: "Deep Underground Military Bases - Глубокие подземные военные базы с узниками",
        minZoomLevel: 2,
      },
      {
        id: "escape-matrix",
        title: "ПОБЕГ ИЗ МАТРИЦЫ",
        description: "Освобождение человечества из программы рабства и контроля",
        minZoomLevel: 2,
      },
    ],
  },

  // ⑪ Синий — ЗЕМНОЙ ШАР (нижний центр)
  {
    id: "earth-sphere",
    title: "ЗЕМНОЙ ШАР",
    description: "Наша планета - лаборатория эволюции и испытание сознания. Содержит ключи ко всей вселенной в своих древних местах силы.",
    color: "from-blue-500 to-cyan-700",
    x: 50,
    y: 70,
    radius: 75,
    minZoomLevel: 0,
    items: [
      {
        id: "antarctica",
        title: "Антарктида",
        description: "Запретная зона. Древний континент с портальными системами и останками древних цивилизаций",
        minZoomLevel: 1,
      },
      {
        id: "atlantis",
        title: "Атлантида",
        description: "Затопленная высокоразвитая цивилизация. Её технология и знания скрыты под водой",
        minZoomLevel: 1,
      },
      {
        id: "argentina-tibet",
        title: "Аргентина, Тибет",
        description: "Место силы с огромными подземными системами и порталами",
        minZoomLevel: 1,
      },
      {
        id: "ancient-ruins",
        title: "ДРЕВНИЕ РУИНЫ",
        description: "Останки древних цивилизаций, построенных с космической помощью",
        minZoomLevel: 2,
      },
      {
        id: "underground-ships",
        title: "Подземные корабли",
        description: "Древние летательные аппараты, спрятанные в подземных ангарах Земли",
        minZoomLevel: 2,
      },
    ],
  },

  // ⑫ Серо-стальной — ЛУНА / МАРС (нижний правый)
  {
    id: "moon-mars",
    title: "ЛУНА / МАРС",
    description: "Сестринские миры с развитыми цивилизациями. Базы для контроля солнечной системы и связи с галактикой.",
    color: "from-gray-500 to-slate-700",
    x: 80,
    y: 70,
    radius: 70,
    minZoomLevel: 0,
    items: [
      {
        id: "sidonia",
        title: "Сидония",
        description: "Древний город на Марсе с пирамидами и каналами. Бывшая столица марсианской цивилизации",
        minZoomLevel: 1,
      },
      {
        id: "nasa-coverup",
        title: "NASA / ICC базы",
        description: "Международные космические станции, скрывающие истинное разнообразие жизни в космосе",
        minZoomLevel: 1,
      },
      {
        id: "mantis-beings",
        title: "МАНТИС",
        description: "Разумная инопланетная раса богомолов. Учёные и инженеры Галактической Федерации",
        minZoomLevel: 1,
      },
      {
        id: "nordic-beings",
        title: "Нордические",
        description: "Высокие белокурые существа с северных планет. Древние учителя человечества",
        minZoomLevel: 1,
      },
      {
        id: "ancient-martians",
        title: "Древние марсиане",
        description: "Раса, построившая высокоразвитую цивилизацию на Марсе",
        minZoomLevel: 1,
      },
      {
        id: "greys",
        title: "Грей",
        description: "Серые инопланетяне. Служители тёмного альянса, проводящие абductions",
        minZoomLevel: 1,
      },
      {
        id: "hz-frequency",
        title: "432hz",
        description: "Священная частота вселенной. Частота исцеления, гармонии и вознесения",
        minZoomLevel: 2,
      },
    ],
  },

  // ⑬ Фиолетово-синий — BASHAR (нижний центр-право)
  {
    id: "bashar-5d",
    title: "BASHAR",
    description: "Внеземной учитель и гид человечества. Канал информации из 5-мерности о переходе на новую землю и вознесении.",
    color: "from-violet-600 to-indigo-700",
    x: 62,
    y: 72,
    radius: 50,
    minZoomLevel: 0,
    items: [
      {
        id: "5d-earth",
        title: "5D ЗЕМЛЯ",
        description: "Новая планета в 5-мерности, куда переместится человечество после вознесения",
        minZoomLevel: 1,
      },
      {
        id: "ascension-light-body",
        title: "ВОЗНЕСЕНИЕ ТОНКОГО ТЕЛА",
        description: "Трансмутация физического тела в энергетическую форму существования в высших измерениях",
        minZoomLevel: 1,
      },
      {
        id: "mandela-effect",
        title: "Эффект Мандела",
        description: "Сдвиги в реальности и коллективной памяти - свидетельство смены измерений",
        minZoomLevel: 2,
      },
      {
        id: "parallel-timelines",
        title: "Параллельные временные линии",
        description: "Существование нескольких версий реальности одновременно в разных измерениях",
        minZoomLevel: 2,
      },
    ],
  },

  // Дополнительный элемент - ВОЗВРАЩЕНИЕ В ИСТОЧНИК (справа вверху)
  {
    id: "return-to-source",
    title: "ВОЗВРАЩЕНИЕ В ИСТОЧНИК",
    description: "Финальное путешествие сознания к первоисточнику всего бытия. Единение с Абсолютом.",
    color: "from-pink-400 to-rose-600",
    x: 88,
    y: 18,
    radius: 45,
    minZoomLevel: 0,
    items: [
      {
        id: "uma-consciousness",
        title: "УМА",
        description: "Пустота и полнота одновременно. Первоначальное состояние сознания",
        minZoomLevel: 1,
      },
      {
        id: "bardo",
        title: "БАРДО",
        description: "Промежуточное состояние между смертью и рождением. Состояние чистого сознания",
        minZoomLevel: 1,
      },
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
    radius: 40,
    minZoomLevel: 0,
    items: [
      {
        id: "black-budget",
        title: "Чёрный бюджет",
        description: "Триллионы долларов, исчезающих из официальной экономики на космические проекты",
        minZoomLevel: 1,
      },
      {
        id: "shadow-government",
        title: "Теневое правительство",
        description: "Скрытое управление мировыми событиями и судьбой человечества",
        minZoomLevel: 2,
      },
    ],
  },

  // Коллективное сознание (между вспышкой и радужным телом сверху)
  {
    id: "collective-consciousness",
    title: "КОЛЛЕКТИВНОЕ СОЗНАНИЕ",
    description: "Единое поле сознания всех существ вселенной. Место, где встречаются все мысли и идеи.",
    color: "from-indigo-400 to-purple-500",
    x: 50,
    y: 18,
    radius: 48,
    minZoomLevel: 0,
    items: [
      {
        id: "akashic-field",
        title: "Акашическое поле",
        description: "Информационное хранилище всех знаний и событий, прошлых, настоящих и будущих",
        minZoomLevel: 1,
      },
      {
        id: "morphic-resonance",
        title: "Морфическая резонансия",
        description: "Связь между организмами одного вида через общее энергетическое поле",
        minZoomLevel: 2,
      },
    ],
  },
];
