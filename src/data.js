const colors = {
  // c1: "#19181A",
  // c2: "#B19F9E",
  // c3: "#CEBC81",
  // c4: '#A16E83',
  // c5: '#479761',
  c1: "#FFE8D6",
  c2: "#CB997E",
  c3: "#fefae0",
  c4: "#b7b7a4",
  c5: "#a5a58d",
  c6: "#a5a58d",
};

const resumeData = {
  name: "Kenny Luu",
  description: "I am a software engineer",
};

// other fields to add: date, place, link, tags, type(personal, school, work)
const projectData = [
  {
    imageSrc: "folio",
    title: "Fol.io",
    description:
      "Financial portfolio advisor that utilizes public sentiment towards companies in order to predict stock changes using our FolioScore quantifier. Awarded Best Use of Google Cloud API at LAHacks 2018.",
  },
  {
    imageSrc: "sudoku",
    title: "Sudoku Solver",
    description:
      "A Sudoku Solver application that utilizes backtracking algorithm. Designed simple and intuitive GUI using JSwing library",
  },
];

export { resumeData as default, colors, projectData };
