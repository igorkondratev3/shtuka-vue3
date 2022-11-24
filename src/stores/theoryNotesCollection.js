import { defineStore } from 'pinia';

export const theoryNotesCollection = defineStore({
  id: 'theoryNotesCollection',
  state: () => ({
    circle1: {
      grade7: {},
      grade8: {},
      grade9: {},
    },
    circle2: {
      grade9: {},
      grade10: {},
      grade11: {},
    },
  }),
  actions: {
    setTheoryNotes(theoryNotes) {
      if (theoryNotes && theoryNotes[0]) {
        this[`circle${theoryNotes[0].circle}`][`grade${theoryNotes[0].grade}`][
          `lesson${theoryNotes[0].lesson}`
        ] = theoryNotes;
      }
    },
    setTheoryNote(theoryNote) {
      if (theoryNote) {
        if (
          this[`circle${theoryNote.circle}`][`grade${theoryNote.grade}`][
            `lesson${theoryNote.lesson}`
          ]
        ) {
          this[`circle${theoryNote.circle}`][`grade${theoryNote.grade}`][
            `lesson${theoryNote.lesson}`
          ].push(theoryNote);
        } else {
          this[`circle${theoryNote.circle}`][`grade${theoryNote.grade}`][
            `lesson${theoryNote.lesson}`
          ] = [theoryNote];
        }
      }
    },
    deleteTheoryNote(theoryNote) {
      const notesArr =
        this[`circle${theoryNote.circle}`][`grade${theoryNote.grade}`][
          `lesson${theoryNote.lesson}`
        ];
      notesArr.splice(
        notesArr.findIndex((note) => note._id == theoryNote._id),
        1
      );
    },
    clearTheoryNotes() {
      this.circle1.grade7 = {};
      this.circle1.grade8 = {};
      this.circle1.grade9 = {};
      this.circle2.grade9 = {};
      this.circle2.grade10 = {};
      this.circle2.grade11 = {};
    },
  },
});