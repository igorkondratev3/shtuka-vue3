import { authContext } from '@/stores/authContext';
import { theoryNotesCollection } from '@/stores/theoryNotesCollection';
import { additionalsCollection } from '@/stores/additionalsCollection';

export const deleteUserInformationFromStores = () => {
  authContext().logout();
  theoryNotesCollection().clearTheoryNotes();
  additionalsCollection().clearAdditionals();
};
