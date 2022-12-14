import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AbcService {
  syllables: any = {};

  constructor() {
    const a = [
      //'А',
      'Б',
      'В',
      'Г',
      'Ґ',
      'Д',
      //'Е',
      //'Є',
      'Ж',
      'З',
      //'И',
      //'І',
      //'Ї',
      //'Й',
      'К',
      'Л',
      'М',
      'Н',
      //'О',
      'П',
      'Р',
      'С',
      'Т',
      //'У',
      'Ф',
      'Х',
      'Ц',
      'Ч',
      'Ш',
      'Щ',
      //'Ь',
      //'Ю',
      //'Я',
    ];
    const b = [
      'А',
      // 'Б',
      // 'В',
      // 'Г',
      // 'Ґ',
      // 'Д',
      'Е',
      // 'Є',
      // 'Ж',
      // 'З',
      'И',
      'І',
      // 'Ї',
      // 'Й',
      // 'К',
      // 'Л',
      // 'М',
      // 'Н',
      'О',
      // 'П',
      // 'Р',
      // 'С',
      // 'С',
      // 'Т',
      'У',
      // 'Ф',
      // 'Х',
      // 'Ц',
      // 'Ч',
      // 'Ш',
      // 'Щ',
      // 'Ь',
      // 'Ю',
      // 'Я',
    ];

    this.syllables.uk = [];

    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        this.syllables.uk.push(a[i] + b[j]);
      }
    }
  }

  getSyllables(lang: string): string[] {
    return this.syllables[lang] ?? [];
  }

  getAbc(lang: string) {
    switch (lang) {
      case 'uk':
        return [
          'А',
          'Б',
          'В',
          'Г',
          'Ґ',
          'Д',
          'Е',
          'Є',
          'Ж',
          'З',
          'И',
          'І',
          'Ї',
          'Й',
          'К',
          'Л',
          'М',
          'Н',
          'О',
          'П',
          'Р',
          'С',
          'Т',
          'У',
          'Ф',
          'Х',
          'Ц',
          'Ч',
          'Ш',
          'Щ',
          'Ь',
          'Ю',
          'Я',
        ];
      case 'en':
        return [
          'A',
          'B',
          'C',
          'D',
          'E',
          'F',
          'G',
          'H',
          'I',
          'J',
          'K',
          'L',
          'M',
          'N',
          'O',
          'P',
          'Q',
          'R',
          'S',
          'T',
          'U',
          'V',
          'W',
          'X',
          'Y',
          'Z',
        ];
      default:
        return [];
    }
  }
}
