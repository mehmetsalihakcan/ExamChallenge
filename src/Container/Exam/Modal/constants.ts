export const itemKeys = {
  ANSWER_KEY: 'answerKey',
  SHOW_ANSWER: 'showAnswer',
  REPORT_ISSUE: 'reportIssue',
  FINISH_TEST: 'finishTest',
  GIVE_UP: 'giveUp',
};

export const modalItems = [
  {
    id: 1,
    key: 'answerKey',
    type: 'primary',
    title: 'Cevap Anahtarı',
    description: '',
    descriptionIcon: null,
  },
  {
    id: 2,
    key: 'showAnswer',
    type: 'primary',
    title: 'Cevapları Göster',
    description: 'Soru cevaplandıktan sonra doğru şıkkı göster',
    descriptionIcon: 'info',
  },
  {
    id: 3,
    key: 'reportIssue',
    type: 'primary',
    title: 'Sorun Bildir',
    description: '',
    descriptionIcon: null,
  },
  {
    id: 4,
    key: 'finishTest',
    type: 'error',
    title: 'Testi Bitir',
    description: '',
    descriptionIcon: null,
  },
  {
    id: 5,
    key: 'giveUp',
    type: 'primary',
    title: 'Vazgeç',
    description: '',
    descriptionIcon: null,
  },
];
