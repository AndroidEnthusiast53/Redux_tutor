export const seletedLibrary = (libraryId) => {
return {
  type: 'select_library',
  payload: libraryId
 };
};
