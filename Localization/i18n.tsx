// app/i18n/i18n.js

import I18n from 'react-native-i18n';
import en from './en';
import de from './de';

I18n.fallbacks = true;

I18n.translations = {
  en,
  de
};

export default I18n;