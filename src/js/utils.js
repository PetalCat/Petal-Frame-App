import Framework7 from "framework7/bundle";

export const isMobile = () => {
  return (
    Framework7.device.cordova ||
    Framework7.device.capacitor ||
    /Mobi|Android/i.test(navigator.userAgent)
  );
};
