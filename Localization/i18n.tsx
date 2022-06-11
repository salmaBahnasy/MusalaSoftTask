// app/i18n/i18n.js

import I18n from 'react-native-i18n';
import en from './en';
import bul from './bul';

I18n.fallbacks = true;

I18n.translations = {
  en,
  bul
};

export default I18n;