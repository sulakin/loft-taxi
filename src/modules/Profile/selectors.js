export const isLoading = (state) => state.profile.isLoading;
export const isProfileData = (state) => {
  const { cardNumber, expiryDate, cardName, cvc } = state.profile.profileData;
  if (cardNumber && expiryDate && cardName && cvc) {
    return true;
  }

  return false;
};
export const getErrors = (state) => state.profile.errors;
export const getProfileData = (state) => state.profile.profileData;
