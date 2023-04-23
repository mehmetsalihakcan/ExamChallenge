export type AnswerOptionType = {
  option: string;
  boldWord: string;
  selected: boolean;
};
export type QuestionType = {
  id: number;
  category: string;
  questionDescription: string;
  question: string;
  answeredStatus: boolean;
  answerOptions: AnswerOptionType[];
};
