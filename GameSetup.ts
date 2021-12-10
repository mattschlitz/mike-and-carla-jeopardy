export type Amounts = [string, string, string, string, string];
export const ROW_AMOUNTS: Amounts = ['$100', '$200', '$300', '$400', '$500'];

export interface AnswerVal {
  answer: string;
  question: string;
}

export interface Category {
  name: string;
  answers: [AnswerVal, AnswerVal, AnswerVal, AnswerVal, AnswerVal];
}

export const CATEGORIES: Category[] = [
  {
    name: 'Carla',
    answers: [
      {
        answer:
          'Carla keeps in shape by attending these outdoor fitness classes.',
        question: 'What is Camp Gladiator?',
      },
      {
        answer: 'Carla is an alumna of these two universities.',
        question: 'What are UT Arlington and Texas A&M?',
      },
      {
        answer: 'Carla hails from this Houston suburb.',
        question: 'What is Galena Park?',
      },
      {
        answer:
          'This inanimate object proved Carla’s downfall when it caused her to break her ankle in 2018.',
        question: 'What is the sidewalk?',
      },
      {
        answer: 'Carla studied abroad in these foreign countries.',
        question: 'What is Brazil and China?',
      },
    ],
  },
  {
    name: 'Mike',
    answers: [
      {
        answer: 'Mike has collected over 150 of these vinyl figurines.',
        question: 'What are Funko Pops!?',
      },
      {
        answer: 'Mike was born in this swampy southeastern peninsula.',
        question: 'What is Florida?',
      },
      {
        answer:
          'Mike practices this martial art, which was introduced to the western world in the writings of a French diplomat in 1687.',
        question: 'What is Muay Thai?',
      },
      {
        answer:
          'Mike thinks his recipe for this comfort-food dish is the best.',
        question: 'What is Mac & Cheese?',
      },
      {
        answer: 'Carla would change this one thing about Mike, if she could.',
        question: 'What is being taller?',
      },
    ],
  },
  {
    name: 'The Couple',
    answers: [
      {
        answer: 'Carla and Mike met through this breakfast-themed app.',
        question: 'What is Coffee Meets Bagel?',
      },
      {
        answer:
          'Mike and Carla tied the knot at this iconic Arlington location.',
        question: 'What is Tom & Debbie Green’s House?',
      },
      {
        answer: 'Carla and Mike hunted these on their first date.',
        question: 'What are Virtual Reality Zombies?',
      },
      {
        answer:
          'Mike says his favorite date with Carla was eating mystery food while wearing these.',
        question: 'What are blindfolds?',
      },
      {
        answer:
          'Something borrowed, something blue. Carla walked down the aisle wearing a borrowed pair of these.',
        question: 'What are Spanx?',
      },
    ],
  },
  {
    name: 'Famous Couples',
    answers: [
      {
        answer:
          'These star-crossed lovers met each other and their deaths in fair Verona.',
        question: 'Who are Romeo & Juliet?',
      },
      {
        answer:
          'This power couple has three children: Blue Ivy, Sir, and Rumi.',
        question: 'Who are Beyoncé and Jay-Z?',
      },
      {
        answer:
          '"Draw me like one of your French girls." These lovers had a short-lived affair before one of them froze to death in the North Atlantic.',
        question: 'Who are Jack & Rose?',
      },
      {
        answer:
          'This infamous Texas couple died together in 1934 in a police shootout while driving a stolen car.',
        question: 'Who are Bonnie & Clyde?',
      },
      {
        answer:
          'These two were the first US citizens to be executed for espionage during peacetime.',
        question: 'Who are Julius and Ethel Rosenberg?',
      },
    ],
  },
  {
    name: 'Ana',
    answers: [
      {
        answer:
          'Ana’s favorite video game is this RPG that features characters from Disney, Pixar, and Final Fantasy.',
        question: 'What is Kingdom Hearts?',
      },
      {
        answer:
          'In her spare time, Ana writes fanfiction featuring this billionaire-bad-boy-turned-superhero.',
        question: 'Who is Tony Stark / Ironman?',
      },
      {
        answer:
          'Ana and Carla share more than most sisters, including a stick of this personal hygiene product.',
        question: 'What is deodorant?',
      },
      {
        answer:
          'They get along now, but when baby Ana arrived, Carla was so upset that she threw this at her new sister.',
        question: 'What is a shoe?',
      },
      {
        answer:
          'Ana says this gift Carla brought home from work at the movie theater was her prized possession as a child.',
        question: 'What is a Spyro cardboard cutout?',
      },
    ],
  },
];
