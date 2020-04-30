export const getProfileData = (state) => state.profile;
export const isProfileFilled = (state) => {
  const { cardNumber, expiryDate, cardName, cvc } = state.profile;

  if (cardNumber && expiryDate && cardName && cvc) {
    return true;
  }

  return false;
};
