export interface Question {
  question: string;
  answers: {
    a1: string;
    a2: string;
  };
}

export type StepKey = 's1';

export const questions: Record<StepKey, Question[]> = {
  's1': [
    {
      question: '점심뭐먹지',
      answers: {
        'a1': '추천메뉴',
        'a2': '나꼴',
      },
    },
    {
      question: '여행',
      answers: {
        'a1': '패키지',
        'a2': '내가알아서',
      },
    },
    {
      question: '서점',
      answers: {
        'a1': '추천',
        'a2': '직접',
      },
    },
  ],
};
