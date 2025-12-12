export type Question = {
  id: number;
  text: string;
  options: string[];
  correctIndex: number;
};

export const questions: Question[] = [
  {
    id: 1,
    text: "What sound does a cat make?",
    options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink", "Neigh"],
    correctIndex: 1,
  },
  {
    id: 2,
    text: "How many stars are in the sky?",
    options: ["Two", "Infinite", "One Hundred", "None"],
    correctIndex: 1,
  },
  {
    id: 3,
    text: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctIndex: 1,
  },
  {
    id: 4,
    text: "Which animal is the King of the Jungle?",
    options: ["Lion", "Tiger", "Elephant", "Giraffe"],
    correctIndex: 0,
  },
];
