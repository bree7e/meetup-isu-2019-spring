import { MeetUpEvent } from './meetup.interface';

export const meetupList: MeetUpEvent[] = [
  {
    id: 1,
    name: 'Лекция по Frontend',
    description: `
        Вводная лекция по фронтенду
      `,
    address: 'Матфак, аудитория 316',
    categories: [
      {
        id: 'frontend',
        name: 'Frontend',
      },
    ],
    signup_description: '',
    signup_from_date: new Date(2019, 4, 1).getTime(),
    signup_to_date: new Date(2019, 4, 1).getTime(),
    from_date: new Date(2019, 4, 1).getTime(),
    to_date: new Date(2019, 4, 1).getTime(),
    published: true,
    date: new Date(2019, 4, 1),
    annotation: 'Вводная лекция по фронтенду',
    eventProgram: [
      {
        name: 'Вводная лекция',
        time: '19:00',
        speakers: [
          {
            name: 'Денис Сумбаев',
            description: 'Frontend разработчик BILLmanager',
          },
        ],
      },
    ],
    map_link: 'https://yandex.ru/maps/-/CBBkZGGWcB',
  },
  {
    id: 2,
    name: 'Лекция Backend',
    description: `CI/CD, Docker, C++`,
    address: 'Матфак, аудитория 316',
    categories: [
      {
        id: 'backend',
        name: 'Backend',
      },
    ],
    signup_description: '',
    signup_from_date: new Date(2019, 4, 1).getTime(),
    signup_to_date: new Date(2019, 4, 17).getTime(),
    from_date: new Date(2019, 4, 21).getTime(),
    to_date: new Date(2019, 4, 21).getTime(),
    published: true,
    date: new Date(2019, 4, 21),
    annotation: '',
    eventProgram: [
      {
        name: 'CSS - сила, JS - могила!',
        time: '18:00',
        speakers: [
          {
            name: 'Иван Иванов',
            description:
              'МСМК по CSS в супер тяжелом весе, на завтрак ест гриды и запивает флекс коктейлем',
          },
        ],
      },
    ],
    map_link: 'https://yandex.ru/maps/-/CBBkZGGWcB',
  },
  {
    id: 3,
    name: 'Frontend Иркутск',
    description: `
        Ежемесячная встреча разработчиков Иркутских компаний, обмен опытом.`,
    address: 'Радужный 34а',
    categories: [
      {
        id: 'frontend',
        name: 'Front-end',
      },
    ],
    signup_description: '',
    signup_from_date: new Date(2019, 4, 1).getTime(),
    signup_to_date: new Date(2019, 4, 17).getTime(),
    from_date: new Date(2019, 4, 18).getTime(),
    to_date: new Date(2019, 4, 18).getTime(),
    published: true,
    date: new Date(2019, 4, 18),
    annotation: 'Встреча JS разработчиков Иркутска, разговоры о наболевшем.',
    eventProgram: [
      {
        name: 'CSS - сила, JS - могила!',
        time: '18:00',
        speakers: [
          {
            name: 'Иван Иванов',
            description:
              'МСМК по CSS в супер тяжелом весе, на завтрак ест гриды и запивает флекс коктейлем',
          },
        ],
      },
      {
        name: `JS - огонь, CSS'еры не ведают, что творят!`,
        time: '19:00',
        speakers: [
          {
            name: 'Гриша Перельман',
            description:
              'Программирует на js с 1966 года, доказал, что на нем можно доказать гипотезу Пуанкаре.',
          },
        ],
      },
    ],
    map_link: 'https://yandex.ru/maps/-/CBBkZGGWcB',
  },
  {
    id: 4,
    name: 'Frontend Иркутск',
    description: `
        Ежемесячная встреча разработчиков Иркутских компаний, обмен опытом.`,
    address: 'Радужный 34а',
    categories: [
      {
        id: 'frontend',
        name: 'Front-end',
      },
    ],
    signup_description: '',
    signup_from_date: new Date(2019, 4, 1).getTime(),
    signup_to_date: new Date(2019, 4, 17).getTime(),
    from_date: new Date(2019, 4, 18).getTime(),
    to_date: new Date(2019, 4, 18).getTime(),
    published: true,
    date: new Date(2019, 4, 18),
    annotation: 'Встреча JS разработчиков Иркутска, разговоры о наболевшем.',
    eventProgram: [
      {
        name: 'CSS - сила, JS - могила!',
        time: '18:00',
        speakers: [
          {
            name: 'Иван Иванов',
            description:
              'МСМК по CSS в супер тяжелом весе, на завтрак ест гриды и запивает флекс коктейлем',
          },
        ],
      },
      {
        name: `JS - огонь, CSS'еры не ведают, что творят!`,
        time: '19:00',
        speakers: [
          {
            name: 'Гриша Перельман',
            description:
              'Программирует на js с 1966 года, доказал, что на нем можно доказать гипотезу Пуанкаре.',
          },
        ],
      },
    ],
    map_link: 'https://yandex.ru/maps/-/CBBkZGGWcB',
  },
  {
    id: 5,
    name: 'Frontend Иркутск',
    description: `
        Ежемесячная встреча разработчиков Иркутских компаний, обмен опытом.`,
    address: 'Радужный 34а',
    categories: [
      {
        id: 'frontend',
        name: 'Front-end',
      },
    ],
    signup_description: '',
    signup_from_date: new Date(2019, 4, 1).getTime(),
    signup_to_date: new Date(2019, 4, 17).getTime(),
    from_date: new Date(2019, 4, 18).getTime(),
    to_date: new Date(2019, 4, 18).getTime(),
    published: true,
    date: new Date(2019, 4, 18),
    annotation: 'Встреча JS разработчиков Иркутска, разговоры о наболевшем.',
    eventProgram: [
      {
        name: 'CSS - сила, JS - могила!',
        time: '18:00',
        speakers: [
          {
            name: 'Иван Иванов',
            description:
              'МСМК по CSS в супер тяжелом весе, на завтрак ест гриды и запивает флекс коктейлем',
          },
        ],
      },
      {
        name: `JS - огонь, CSS'еры не ведают, что творят!`,
        time: '19:00',
        speakers: [
          {
            name: 'Гриша Перельман',
            description:
              'Программирует на js с 1966 года, доказал, что на нем можно доказать гипотезу Пуанкаре.',
          },
        ],
      },
    ],
    map_link: 'https://yandex.ru/maps/-/CBBkZGGWcB',
  },
  {
    id: 6,
    name: 'Frontend Иркутск',
    description: `
        Ежемесячная встреча разработчиков Иркутских компаний, обмен опытом.`,
    address: 'Радужный 34а',
    categories: [
      {
        id: 'frontend',
        name: 'Front-end',
      },
    ],
    signup_description: '',
    signup_from_date: new Date(2019, 4, 1).getTime(),
    signup_to_date: new Date(2019, 4, 17).getTime(),
    from_date: new Date(2019, 4, 18).getTime(),
    to_date: new Date(2019, 4, 18).getTime(),
    published: true,
    date: new Date(2019, 4, 18),
    annotation: 'Встреча JS разработчиков Иркутска, разговоры о наболевшем.',
    eventProgram: [
      {
        name: 'CSS - сила, JS - могила!',
        time: '18:00',
        speakers: [
          {
            name: 'Иван Иванов',
            description:
              'МСМК по CSS в супер тяжелом весе, на завтрак ест гриды и запивает флекс коктейлем',
          },
        ],
      },
      {
        name: `JS - огонь, CSS'еры не ведают, что творят!`,
        time: '19:00',
        speakers: [
          {
            name: 'Гриша Перельман',
            description:
              'Программирует на js с 1966 года, доказал, что на нем можно доказать гипотезу Пуанкаре.',
          },
        ],
      },
    ],
    map_link: 'https://yandex.ru/maps/-/CBBkZGGWcB',
  },
  {
    id: 7,
    name: 'Frontend Иркутск',
    description: `
        Ежемесячная встреча разработчиков Иркутских компаний, обмен опытом.`,
    address: 'Радужный 34а',
    categories: [
      {
        id: 'frontend',
        name: 'Front-end',
      },
    ],
    signup_description: '',
    signup_from_date: new Date(2019, 4, 1).getTime(),
    signup_to_date: new Date(2019, 4, 17).getTime(),
    from_date: new Date(2019, 4, 18).getTime(),
    to_date: new Date(2019, 4, 18).getTime(),
    published: true,
    date: new Date(2019, 4, 18),
    annotation: 'Встреча JS разработчиков Иркутска, разговоры о наболевшем.',
    eventProgram: [
      {
        name: 'CSS - сила, JS - могила!',
        time: '18:00',
        speakers: [
          {
            name: 'Иван Иванов',
            description:
              'МСМК по CSS в супер тяжелом весе, на завтрак ест гриды и запивает флекс коктейлем',
          },
        ],
      },
      {
        name: `JS - огонь, CSS'еры не ведают, что творят!`,
        time: '19:00',
        speakers: [
          {
            name: 'Гриша Перельман',
            description:
              'Программирует на js с 1966 года, доказал, что на нем можно доказать гипотезу Пуанкаре.',
          },
        ],
      },
    ],
    map_link: 'https://yandex.ru/maps/-/CBBkZGGWcB',
  },
];
