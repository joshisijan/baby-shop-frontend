export const nameRegExp = RegExp("^[a-z ,.'-]+$","i");

export const emailRegExp = RegExp("^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$");

export const phoneRegExp = RegExp('^(984|985|986|974|975|980|981|982|961|988|972|963).{7}$');

export const passwordRegExp = RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');

export const usernameRegExp = RegExp('^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$');