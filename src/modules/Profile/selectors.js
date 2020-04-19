export const getProfileData = (state) => state.profile;
export const isProfileFilled = (state) => {
  const { number, date, name, cvc } = state.profile;

  if (number && date && name && cvc) {
    return true;
  }

  return false;
};
