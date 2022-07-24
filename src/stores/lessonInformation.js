import { defineStore } from 'pinia';

export const lessonInformation = defineStore({
  id: 'lessonInformation',
  state: () => ({
    lessons: {
      circle1: {
        grade7: {
          lesson1: {
            headings: [
              '1 урок.',
              'Физика - наука о природе.',
              'Физические тела.',
              'Физические явления.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=2JGbRnJfG0g',
            textBook: 'Учебник Физика-7. Ф.Я.Божинова. Параграф 1.',
          },
          lesson2: {
            headings: ['2 урок.', 'Научные методы изучения природы.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=Ioaq97Jp10Q',
            textBook: 'Учебник Физика-7. Ф.Я.Божинова. Параграф 2.',
          },
          lesson3: {
            headings: [
              '3 урок.',
              'Физические величины и единицы их измерения.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=E-Hps8rwGDY',
            textBook: 'Пока ничего',
          },
          lesson4: {
            headings: [
              '4 урок.',
              'Измерение физических величин.',
              'Цена деления шкалы измерительного прибора.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=8sHSZK0MDsk',
            textBook: 'Пока ничего',
          },
          lesson5: {
            headings: ['5 урок.', 'Вычисление и измерение площади фигур.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=jjJ9kKhSapU',
            textBook: 'Пока ничего',
          },
          lesson6: {
            headings: ['6 урок.', 'Вычисление и измерение объема.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=q6T5xfPKi_M',
            textBook: 'Пока ничего',
          },
          lesson7: {
            headings: ['7 урок.', 'Точность измерений.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=VlYZS-kQrqA',
            textBook: 'Пока ничего',
          },
          lesson8: {
            headings: [
              '8 урок.',
              'Преобразование единиц измерения физических величин.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=G6zeCTntPE4',
            textBook: 'Пока ничего',
          },
          lesson9: {
            headings: ['9 урок.', 'Мега-, макро- и микромир.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=444YfZs-phE',
            textBook: 'Пока ничего',
          },
          lesson10: {
            headings: ['10 урок.', 'Строение вещества.', 'Атомы и молекулы.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=GT89an4rwDk',
            textBook: 'Пока ничего',
          },
          lesson11: {
            headings: [
              '11 урок.',
              'Диффузия.',
              'Скорость движения молекул и температура тела.',
              'Броуновское движение.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=0upixLXCTr0',
            textBook: 'Пока ничего',
          },
          lesson12: {
            headings: [
              '12 урок.',
              'Взаимодействие молекул',
              'Смачивание и несмачивание.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=MQ27p8gJTlI',
            textBook: 'Пока ничего',
          },
          lesson13: {
            headings: ['13 урок.', 'Три состояния вещества.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=EVKfpUFluAA',
            textBook: 'Пока ничего',
          },
          lesson14: {
            headings: [
              '14 урок.',
              'Механическое движение.',
              'Скорость.',
              'Единицы скорости.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=TFbeqlgV6fI',
            textBook: 'Пока ничего',
          },
          lesson15: {
            headings: [
              '15 урок.',
              'Средняя скорость.',
              'Вычисление пути и времени движения.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=hMk3uRsUvVU',
            textBook: 'Пока ничего',
          },
          lesson16: {
            headings: [
              '16 урок.',
              'Координаты тела.',
              'График движения тела.',
              'График скорости.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=76XwEm5OHiQ',
            textBook: 'Пока ничего',
          },
          lesson17: {
            headings: [
              '17 урок.',
              'Инерция.',
              'Взаимодействие тел.',
              'Инертность.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=-QAQyky5i20',
            textBook: 'Пока ничего',
          },
          lesson18: {
            headings: ['18 урок.', 'Масса - мера инертности тела.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=ZZ2LUfmHfvg',
            textBook: 'Пока ничего',
          },
          lesson19: {
            headings: ['19 урок.', 'Плотность вещества.', 'Единицы плотности.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=AOQ5dvMacBU',
            textBook: 'Пока ничего',
          },
          lesson20: {
            headings: [
              '20 урок.',
              'Сила.',
              'Единицы силы.',
              'Изображение сил.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=tDm1idpr_jU',
            textBook: 'Пока ничего',
          },
          lesson21: {
            headings: ['21 урок.', 'Сила тяжести.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=88xbu-n6tU0',
            textBook: 'Пока ничего',
          },
          lesson22: {
            headings: ['22 урок.', 'Сила упругости.', 'Закон Гука.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=8aL7ZqzXPUo',
            textBook: 'Пока ничего',
          },
          lesson23: {
            headings: ['23 урок.', 'Измерение сил.', 'Динамометр.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=LkRIVu-a45c',
            textBook: 'Пока ничего',
          },
          lesson24: {
            headings: ['24 урок.', 'Вес тела.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=D11dQMpV7yM',
            textBook: 'Пока ничего',
          },
          lesson25: {
            headings: [
              '25 урок.',
              'Сложение сил, направленных по одной прямой.',
              'Равнодействующая.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=uaBNk3SQEDE',
            textBook: 'Пока ничего',
          },
          lesson26: {
            headings: [
              '26 урок.',
              'Сила трения.',
              'Трение покоя.',
              'Трение скольжения.',
              'Коэффициент трения.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=-puJShgtdK0',
            textBook: 'Пока ничего',
          },
          lesson27: {
            headings: [
              '27 урок.',
              'Трение качения.',
              'Трение в жидкостях и газах.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=co2yLm1_P8k',
            textBook: 'Пока ничего',
          },
          lesson28: {
            headings: ['28 урок.', 'Давление.', 'Единицы давления.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=P3gzqGQGya0',
            textBook: 'Пока ничего',
          },
          lesson29: {
            headings: ['29 урок.', 'Давление газа.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=VC9he6iyhLI',
            textBook: 'Пока ничего',
          },
          lesson30: {
            headings: [
              '30 урок.',
              'Передача давления жидкостями и газами.',
              'Закон Паскаля.',
              'Влияние силы тяжести на давление в жидкости и газе.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=SJFEz5chLCo',
            textBook: 'Пока ничего',
          },
          lesson31: {
            headings: [
              '31 урок.',
              'Расчет давления жидкости на дно и стенки сосуда.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=pkV5mjpV6H8',
            textBook: 'Пока ничего',
          },
          lesson32: {
            headings: ['32 урок.', 'Сообщающиеся сосуды.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=b4ry4Hfqie4',
            textBook: 'Пока ничего',
          },
          lesson33: {
            headings: ['33 урок.', 'Атмосферное давление.', 'Опыт Торричелли.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=kzW5WVyB3mI',
            textBook: 'Пока ничего',
          },
          lesson34: {
            headings: [
              '34 урок.',
              'Барометр анероид.',
              'Атмосферное давление на разных высотах.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=nNwg17jjqjQ',
            textBook: 'Пока ничего',
          },
          lesson35: {
            headings: ['35 урок.', 'Проявления атмосферного давления.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=vanTR5wpOnk',
            textBook: 'Пока ничего',
          },
          lesson36: {
            headings: ['36 урок.', 'Манометры.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=rKVAbwEOV0I',
            textBook: 'Пока ничего',
          },
          lesson37: {
            headings: ['37 урок.', 'Жидкостный поршневой насос.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=Y1e80JZtv8I',
            textBook: 'Пока ничего',
          },
          lesson38: {
            headings: ['38 урок.', 'Гидравлический пресс.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=br3BVKNhgnQ',
            textBook: 'Пока ничего',
          },
          lesson39: {
            headings: [
              '39 урок.',
              'Действие жидкости и газа на погруженное в них тело.',
              'Закон Архимеда',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=aaS__QNfANw',
            textBook: 'Пока ничего',
          },
          lesson40: {
            headings: ['40 урок.', 'Плавание тел.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=IZVFIQaTPwQ',
            textBook: 'Пока ничего',
          },
          lesson41: {
            headings: ['41 урок.', 'Плавание судов.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=61fnTta1QTE',
            textBook: 'Пока ничего',
          },
          lesson42: {
            headings: ['42 урок.', 'Воздухоплавание.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=vwyB7UUz6Eo',
            textBook: 'Пока ничего',
          },
          lesson43: {
            headings: ['43 урок.', 'Механическая работа.', 'Единицы работы.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=sJwMvTGTamk',
            textBook: 'Пока ничего',
          },
          lesson44: {
            headings: ['44 урок.', 'Мощность.', 'Единицы мощности.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=y-9njgW4PRU',
            textBook: 'Пока ничего',
          },
          lesson45: {
            headings: [
              '45 урок.',
              'Простые механизмы.',
              'Рычаг.',
              'Условие равновесия рычага.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=uYuzedJBG20',
            textBook: 'Пока ничего',
          },
          lesson46: {
            headings: ['46 урок.', 'Момент силы.', 'Правило моментов.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=ix4DwQz_mC8',
            textBook: 'Пока ничего',
          },
          lesson47: {
            headings: ['47 урок.', 'Блоки.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=3mhuKAxWOik',
            textBook: 'Пока ничего',
          },
          lesson48: {
            headings: ['48 урок.', '«Золотое правило» механики.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=7GbFmno5Pg0',
            textBook: 'Пока ничего',
          },
          lesson49: {
            headings: ['49 урок.', 'Коэффициент полезного действия механизма.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=5JXX9HyRE74',
            textBook: 'Пока ничего',
          },
          lesson50: {
            headings: [
              '50 урок.',
              'Энергия.',
              'Потенциальная и кинетическая энергия.',
              'Превращения энергии.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=1ttI7UVOzhA',
            textBook: 'Пока ничего',
          },
        },

        grade8: {
          lesson51: {
            headings: [
              '51 урок.',
              'Вращательное движение.',
              'Период и частота вращения.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=r9vhXplxrKI',
            textBook: 'Пока ничего',
          },
          lesson52: {
            headings: [
              '52 урок.',
              'Линейная скорость точки на вращающемся теле.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=kYb0akcrHLA',
            textBook: 'Пока ничего',
          },
          lesson53: {
            headings: [
              '53 урок.',
              'Колебательное движение.',
              'Период.',
              'Частота и амплитуда колебаний.',
              'Маятники.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=BlPAzNEst8I',
            textBook: 'Пока ничего',
          },
          lesson54: {
            headings: ['54 урок.', 'Исследование пружинного маятника.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=GLPq9LFmySc',
            textBook: 'Пока ничего',
          },
          lesson55: {
            headings: [
              '55 урок.',
              'Механические волны.',
              'Распространение, отражение и поглощение звука.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=d_smKkscnrw',
            textBook: 'Пока ничего',
          },
          lesson56: {
            headings: [
              '56 урок.',
              'Характеристики звука: высота, громкость, тембр.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=I9g2bfM1qwU',
            textBook: 'Пока ничего',
          },
          lesson57: {
            headings: [
              '57 урок.',
              'Тепловое равновесие.',
              'Температура.',
              'Термометры.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=Xh_8Ho3sAFI',
            textBook: 'Пока ничего',
          },
          lesson58: {
            headings: [
              '58 урок.',
              'Тепловое расширение твердых тел, жидкостей и газов.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=_LZMNg2S4J4',
            textBook: 'Пока ничего',
          },
          lesson59: {
            headings: [
              '59 урок.',
              'Коэффициенты линейного и объемного расширения вещества.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=qXiPdZDDw_c',
            textBook: 'Пока ничего',
          },
          lesson60: {
            headings: [
              '60 урок.',
              'Связь коэффициентов линейного и объемного расширения вещества.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=Csu-XlwPEJE',
            textBook: 'Пока ничего',
          },
          lesson61: {
            headings: [
              '61 урок.',
              'Внутренняя энергия тела и способы ее изменения.',
              'Количество теплоты.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=jBtYI-J7NqY',
            textBook: 'Пока ничего',
          },
          lesson62: {
            headings: [
              '62 урок.',
              'Виды теплопередачи (часть 1): теплопроводность, конвекция, излучения.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=1SdeQU98tPY',
            textBook: 'Пока ничего',
          },
          lesson63: {
            headings: ['63 урок.', 'Виды теплопередачи (часть 2).'],
            videoLessonURL: 'https://www.youtube.com/watch?v=SILXJUZWvO8',
            textBook: 'Пока ничего',
          },
          lesson64: {
            headings: [
              '64 урок.',
              'Теплоемкость тела.',
              'Удельная теплоемкость вещества.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=NC0ISiGArP4',
            textBook: 'Пока ничего',
          },
          lesson65: {
            headings: ['65 урок.', 'Уравнение теплового баланса.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=EA3xy6RS-gA',
            textBook: 'Пока ничего',
          },
          lesson66: {
            headings: [
              '66 урок.',
              'Удельная теплота сгорания топлива.',
              'КПД нагревателя.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=swy73HTv7hM',
            textBook: 'Пока ничего',
          },
          lesson67: {
            headings: [
              '67 урок.',
              'Плавление и кристаллизация вещества.',
              'Удельная теплота плавления.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=LlGN44glHyU',
            textBook: 'Пока ничего',
          },
          lesson68: {
            headings: ['68 урок.', 'Испарение и конденсация.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=wtPgNvwY6G8',
            textBook: 'Пока ничего',
          },
          lesson69: {
            headings: [
              '69 урок.',
              'Кипение.',
              'Удельная теплота парообразования.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=rO_RStCf7ko',
            textBook: 'Пока ничего',
          },
          lesson70: {
            headings: [
              '70 урок.',
              'Зависимость температуры кипения жидкости от давления.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=Xcs3IexmJzk',
            textBook: 'Пока ничего',
          },
          lesson71: {
            headings: [
              '71 урок.',
              'Тепловые двигатели.',
              'КПД теплового двигателя.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=Wgvi7zY7fVg',
            textBook: 'Пока ничего',
          },
          lesson72: {
            headings: ['72 урок.', 'Паровая машина.', 'Паровая турбина.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=XemJWGuSmC4',
            textBook: 'Пока ничего',
          },
          lesson73: {
            headings: ['73 урок.', 'Двигатель внутреннего сгорания.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=ZIRse7OZwMo',
            textBook: 'Пока ничего',
          },
          lesson74: {
            headings: [
              '74 урок.',
              'Электризация тел.',
              '2 рода электрических зарядов.',
              'Проводники и диэлектрики.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=dNI9vZUscRs',
            textBook: 'Пока ничего',
          },
          lesson75: {
            headings: ['75 урок.', 'Электроскоп.', 'Электрометр.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=Sjkhp6zUt0I',
            textBook: 'Пока ничего',
          },
          lesson76: {
            headings: [
              '76 урок.',
              'Электрическое поле.',
              'Делимость электрического заряда.',
              'Опыт Милликена-Иоффе.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=JOY70VjjdkU',
            textBook: 'Пока ничего',
          },
          lesson77: {
            headings: ['77 урок.', 'Строение атома.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=ZjNT9gUpNgc',
            textBook: 'Пока ничего',
          },
          lesson78: {
            headings: ['78 урок.', 'Объяснение электрических явлений.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=F7n5mVmGK_M',
            textBook: 'Пока ничего',
          },
          lesson79: {
            headings: ['79 урок.', 'Закон Кулона.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=dkAQd3-xN-8',
            textBook: 'Пока ничего',
          },
          lesson80: {
            headings: ['80 урок.', 'Закон сохранения электрического заряда.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=d0FBjDwWL5c',
            textBook: 'Пока ничего',
          },
          lesson81: {
            headings: [
              '81 урок.',
              'Электрический ток.',
              'Направление тока.',
              'Источники тока.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=6HKiNLrHcIg',
            textBook: 'Пока ничего',
          },
          lesson82: {
            headings: ['82 урок.', 'Электрическая цепь и ее составные части.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=yag1f6kqnO0',
            textBook: 'Пока ничего',
          },
          lesson83: {
            headings: ['83 урок.', 'Действия электрического тока.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=A06uShMWLNk',
            textBook: 'Пока ничего',
          },
          lesson84: {
            headings: ['84 урок.', 'Изображение схем электрических цепей.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=ZnLSbIVvlNU',
            textBook: 'Пока ничего',
          },
          lesson85: {
            headings: [
              '85 урок.',
              'Сила тока.',
              'Единицы силы тока.',
              'Амперметры.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=OSzSonBGCZI',
            textBook: 'Пока ничего',
          },
          lesson86: {
            headings: ['86 урок.', 'Электрическое напряжение.', 'Вольтметры.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=do6hqAk0bVE',
            textBook: 'Пока ничего',
          },
          lesson87: {
            headings: [
              '87 урок.',
              'Зависимость силы тока от напряжения.',
              'Электрическое сопротивление.',
              'Закон Ома для участка цепи.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=ZsN6B2M16S8',
            textBook: 'Пока ничего',
          },
          lesson88: {
            headings: [
              '88 урок.',
              'Вычисление сопротивления проводника.',
              'Удельное сопротивление.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=OnnL_CaDwNw',
            textBook: 'Пока ничего',
          },
          lesson89: {
            headings: ['89 урок.', 'Реостаты.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=Y7pBkUoj2jk',
            textBook: 'Пока ничего',
          },
          lesson90: {
            headings: [
              '90 урок.',
              'Последовательное и параллельное соединение проводников.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=L38RmvYMG0M',
            textBook: 'Пока ничего',
          },
          lesson91: {
            headings: ['91 урок.', 'Работа и мощность электрического тока.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=kLBqp2uUKPc',
            textBook: 'Пока ничего',
          },
          lesson92: {
            headings: [
              '92 урок.',
              'Нагревание проводника электрическим током.',
              'Закон Джоуля-Ленца.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=oI3y29PlwZ0',
            textBook: 'Пока ничего',
          },
          lesson93: {
            headings: [
              '93 урок.',
              'Лампа накаливания.',
              'Электронагревательные приборы.',
              'Короткое замыкание.',
              'Плавкие предохранители.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=4xsTaaq2C0g',
            textBook: 'Пока ничего',
          },
          lesson94: {
            headings: [
              '94 урок.',
              'Магнитное поле.',
              'Линии магнитного поля.',
              'Правило буравчика.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=unxmunODLAY',
            textBook: 'Пока ничего',
          },
          lesson95: {
            headings: ['95 урок.', 'Магнитное поле витка и катушки с током.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=-bxd35Hy8WY',
            textBook: 'Пока ничего',
          },
          lesson96: {
            headings: ['96 урок.', 'Постоянные магниты.', 'Гипотеза Ампера.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=mLTIl81qDos',
            textBook: 'Пока ничего',
          },
          lesson97: {
            headings: ['97 урок.', 'Электромагниты.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=dgwwOm8_ptg',
            textBook: 'Пока ничего',
          },
          lesson98: {
            headings: ['98 урок.', 'Применение электромагнитов.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=hRm_m7DEU2U',
            textBook: 'Пока ничего',
          },
          lesson99: {
            headings: ['99 урок.', 'Магнитное поле Земли.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=3UQK4wa3trA',
            textBook: 'Пока ничего',
          },
          lesson100: {
            headings: ['100 урок.', 'Телеграфный аппарат.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=4OUbB9ZvJRI',
            textBook: 'Пока ничего',
          },
          lesson101: {
            headings: [
              '101 урок.',
              'Действие магнитного поля на проводник с током.',
              'Правило левой руки.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=heGnA9ZDL-c',
            textBook: 'Пока ничего',
          },
          lesson102: {
            headings: [
              '102 урок.',
              'Рамка с током в магнитном поле.',
              'Электродвигатели.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=I2pCjT_wNOE',
            textBook: 'Пока ничего',
          },
          lesson103: {
            headings: ['103 урок.', 'Электроизмерительные приборы.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=LV4d_TIUYr8',
            textBook: 'Пока ничего',
          },
          lesson104: {
            headings: [
              '104 урок.',
              'Электромагнитная индукция.',
              'Опыты Фарадея.',
              'Правило Ленца.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=5BELdsesOQw',
            textBook: 'Пока ничего',
          },
          lesson105: {
            headings: ['105 урок.', 'Вихревые токи.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=nREioFqGMmo',
            textBook: 'Пока ничего',
          },
          lesson106: {
            headings: [
              '106 урок.',
              'Характер движения носителей заряда в проводнике.',
              'Электрический ток в металлах.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=rwVga_f2mps',
            textBook: 'Пока ничего',
          },
          lesson107: {
            headings: [
              '107 урок.',
              'Зависимость сопротивления металлов от температуры.',
              'Температурный коэффициент сопротивления.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=B5TP9oYLRSI',
            textBook: 'Пока ничего',
          },
          lesson108: {
            headings: [
              '108 урок.',
              'Электрический ток в жидкостях.',
              'Закон Фарадея для электролиза.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=azO2VZ2xUDc',
            textBook: 'Пока ничего',
          },
          lesson109: {
            headings: ['109 урок.', 'Применения электролиза.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=c8rGnYq5mrs',
            textBook: 'Пока ничего',
          },
          lesson110: {
            headings: ['110 урок.', 'Электрический ток в газах.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=wO7rGid5dxk',
            textBook: 'Пока ничего',
          },
          lesson111: {
            headings: ['111 урок.', 'Виды самостоятельного газового разряда.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=qYmlYkyHQYo',
            textBook: 'Пока ничего',
          },
          lesson112: {
            headings: ['112 урок.', 'Электрический ток в полупроводниках.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=k2E9ht9pscU',
            textBook: 'Пока ничего',
          },
        },

        grade9: {
          lesson113: {
            headings: [
              '113 урок.',
              'Свет.',
              'Источники света.',
              'Распространение света.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=RyC8QIs-o_0',
            textBook: 'Пока ничего',
          },
          lesson114: {
            headings: [
              '114 урок.',
              'Следствия из закона прямолинейного распространения света.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=BC5jwVIWr_4',
            textBook: 'Пока ничего',
          },
          lesson115: {
            headings: ['115 урок.', 'Отражение света.', 'Законы отражения.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=U0NyW2j2XaQ',
            textBook: 'Пока ничего',
          },
          lesson116: {
            headings: [
              '116 урок.',
              'Построение изображения в плоском зеркале.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=Y7vov6OYhLA',
            textBook: 'Пока ничего',
          },
          lesson117: {
            headings: [
              '117 урок.',
              'Преломление света.',
              'Законы преломления.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=T0VI4wzqyJY',
            textBook: 'Пока ничего',
          },
          lesson118: {
            headings: [
              '118 урок.',
              'Прохождение света через плоскопараллельную пластинку и призму.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=zQIJhzrtD5Y',
            textBook: 'Пока ничего',
          },
          lesson119: {
            headings: [
              '119 урок.',
              'Полное отражение.',
              'Предельный угол полного отражения.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=4AhDXZ4P2Jo',
            textBook: 'Пока ничего',
          },
          lesson120: {
            headings: [
              '120 урок.',
              'Сферические линзы.',
              'Основные определения.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=TjyhVS1Bdis',
            textBook: 'Пока ничего',
          },
          lesson121: {
            headings: ['121 урок.', 'Построение изображений с помощью линз.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=aE-N7WzyZ-o',
            textBook: 'Пока ничего',
          },
          lesson122: {
            headings: ['122 урок.', 'Формула тонкой линзы.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=Je-52fmXV44',
            textBook: 'Пока ничего',
          },
          lesson123: {
            headings: ['123 урок.', 'Линейное увеличение линзы.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=KpWOHNUHsQM',
            textBook: 'Пока ничего',
          },
          lesson124: {
            headings: ['124 урок.', 'Глаз. Зрение. Восприятие цветов.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=DHdd35zoRt0',
            textBook: 'Пока ничего',
          },
          lesson125: {
            headings: ['125 урок.', 'Восприятие цветов (продолжение).'],
            videoLessonURL: 'https://www.youtube.com/watch?v=zdnssZfK_kg',
            textBook: 'Пока ничего',
          },
          lesson126: {
            headings: ['126 урок.', 'Дисперсия света.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=3YjbW7Ee0pA',
            textBook: 'Пока ничего',
          },
          lesson127: {
            headings: [
              '127 урок.',
              'Строение атомного ядра.',
              'Ядерная энергия.',
              'Электрон-вольт.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=vJmY0O-g2pM',
            textBook: 'Пока ничего',
          },
          lesson128: {
            headings: [
              '128 урок.',
              'Открытие радиоактивности.',
              'Радиоактивное излучение и его свойства.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=oJ5b7H50Ma0',
            textBook: 'Пока ничего',
          },
          lesson129: {
            headings: [
              '129 урок.',
              'Определение радиоактивности.',
              'Альфа- и бета-распад.',
              'Правила смещения Содди.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=rtEqNINxHhY',
            textBook: 'Пока ничего',
          },
          lesson130: {
            headings: [
              '130 урок.',
              'Период полураспада.',
              'Активность радионуклидного образца.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=SmiN_VsQe-4',
            textBook: 'Пока ничего',
          },
          lesson131: {
            headings: [
              '131 урок.',
              'Поглощенная и эквивалентная доза ионизирующего излучения.',
              'Счетчик Гейгера.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=fFf1eUd-IyU',
            textBook: 'Пока ничего',
          },
          lesson132: {
            headings: [
              '132 урок.',
              'Реакция деления ядер.',
              'Термоядерная реакция.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=mq4LtgjckTg',
            textBook: 'Пока ничего',
          },
        },
      },

      circle2: {
        grade9: {
          lesson1: {
            headings: [
              '1 урок.',
              'Физические величины и их измерение.',
              'Точность физических величин.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=XqCNajiaW3U',
            textBook: 'Пока ничего',
          },
          lesson2: {
            headings: ['2 урок.', 'Точность физических величин.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=AlKy1Oc0x-U',
            textBook: 'Пока ничего',
          },
          lesson3: {
            headings: [
              '3 урок.',
              'Погрешность прямых измерений.',
              'Класс точности прибора.',
              'Погрешность взвешивания.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=PmAOjwABf-M',
            textBook: 'Пока ничего',
          },
          lesson4: {
            headings: ['4 урок.', 'Погрешность косвенных измерений.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=n8IgntrRc2s',
            textBook: 'Пока ничего',
          },
          lesson5: {
            headings: ['5 урок.', 'Вычисление случайной погрешности.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=mrBLA93wZb4',
            textBook: 'Пока ничего',
          },
          lesson6: {
            headings: [
              '6 урок.',
              'Механическое движение.',
              'Основные определения кинематики.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=eZy2wp5XINY',
            textBook: 'Пока ничего',
          },
          lesson7: {
            headings: [
              '7 урок.',
              'Векторные величины.',
              'Действия над векторами.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=4vqRWYugy2s',
            textBook: 'Пока ничего',
          },
          lesson8: {
            headings: [
              '8 урок.',
              'Проекции вектора на координатные оси.',
              'Действия над проекциями.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=I_u9Ut-g-q4',
            textBook: 'Пока ничего',
          },
          lesson9: {
            headings: ['9 урок.', 'Действия над проекциями вектора.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=gaF_rgLOt8w',
            textBook: 'Пока ничего',
          },
          lesson10: {
            headings: ['10 урок.', 'Равномерное прямолинейное движение.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=uX2vilBO4tE',
            textBook: 'Пока ничего',
          },
          lesson11: {
            headings: ['11 урок.', 'Графическое описание РПД.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=0Fv0B4hX3vw',
            textBook: 'Пока ничего',
          },
          lesson12: {
            headings: [
              '12 урок.',
              'Средняя скорость.',
              'Средняя путевая скорость.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=02bCjoveWTI',
            textBook: 'Пока ничего',
          },
          lesson13: {
            headings: [
              '13 урок.',
              'Относительность движения.',
              'Формула сложения скоростей.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=gdUh6TNPTzk',
            textBook: 'Пока ничего',
          },
          lesson14: {
            headings: [
              '14 урок.',
              'Мгновенная скорость.',
              'Равноускоренное движение.',
              'Ускорение.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=6VXvLh3AnUs',
            textBook: 'Пока ничего',
          },
          lesson15: {
            headings: [
              '15 урок.',
              'График скорости РУД.',
              'Перемещение при РУД.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=9u2MuzHii7Y',
            textBook: 'Пока ничего',
          },
          lesson16: {
            headings: ['16 урок.', 'Средняя скорость при РУД.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=rp-igVufp-U',
            textBook: 'Пока ничего',
          },
          lesson17: {
            headings: [
              '17 урок.',
              'Связь перемещения тела при РУД с его начальной и конечной скоростью.',
            ],
            videoLessonURL: 'https://www.youtube.com/watch?v=a-0P_qya90Y',
            textBook: 'Пока ничего',
          },
          lesson18: {
            headings: ['18 урок.', 'Графическое представление РУД.'],
            videoLessonURL: 'https://www.youtube.com/watch?v=WUi1qzoTQgM',
            textBook: 'Пока ничего',
          },
        },

        grade10: {
          lesson19: {
            headings: [''],
            videoLessonURL: '',
            textBook: 'Пока ничего',
          },
          lesson20: {
            headings: [''],
            videoLessonURL: '',
            textBook: 'Пока ничего',
          },
          lesson21: {
            headings: [''],
            videoLessonURL: '',
            textBook: 'Пока ничего',
          },
          lesson22: {
            headings: [''],
            videoLessonURL: '',
            textBook: 'Пока ничего',
          },
          lesson23: {
            headings: [''],
            videoLessonURL: '',
            textBook: 'Пока ничего',
          },
        },

        grade11: {
          lesson24: {
            headings: [''],
            videoLessonURL: '',
            textBook: 'Пока ничего',
          },
          lesson25: {
            headings: [''],
            videoLessonURL: '',
            textBook: 'Пока ничего',
          },
          lesson26: {
            headings: [''],
            videoLessonURL: '',
            textBook: 'Пока ничего',
          },
          lesson27: {
            headings: [''],
            videoLessonURL: '',
            textBook: 'Пока ничего',
          },
          lesson28: {
            headings: [''],
            videoLessonURL: '',
            textBook: 'Пока ничего',
          },
          lesson29: {
            headings: [''],
            videoLessonURL: '',
            textBook: 'Пока ничего',
          },
        },
      },
    },
  }),
});
