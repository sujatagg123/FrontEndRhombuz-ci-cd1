const ranges = [
  { divider: 1e18, suffix: 'E', fullSuffix: 'Quintillion' },
  { divider: 1e15, suffix: 'P', fullSuffix: 'Quadrillion' },
  { divider: 1e12, suffix: 'T', fullSuffix: 'Trillion' },
  { divider: 1e9, suffix: 'G', fullSuffix: 'Billion' },
  { divider: 1e6, suffix: 'M', fullSuffix: 'Million' },
  { divider: 1e3, suffix: 'k', fullSuffix: 'Thousand' },
];

export const formatNumber = (n, fullSuffix = false, object = false) => {
  let suffix = '';
  let FSuffix = '';
  let value = 0;

  for (let i = 0; i < ranges.length; i++) {
    if (n < 0) {
      return '-' + formatNumber(-n);
    }
    if (n >= ranges[i].divider) {
      suffix = ranges[i].suffix;
      FSuffix = ranges[i].fullSuffix;
      value = (n / ranges[i].divider).toFixed(1);
      if (object) {
        return { text: n.toString(), value, suffix, fullSuffix: FSuffix };
      } else {
        return value + (fullSuffix ? FSuffix : suffix);
      }
    }
  }
  return n.toString();
};

export const convertObjToString = (obj) => {
  if (typeof obj === 'string') {
    return obj;
  } else {
    return Object.entries(obj)
      .map(([key, value]) => `${key}: ${value}`)
      .join(', ');
  }
};

export const timeAgo = (input) => {
  const date = input instanceof Date ? input : new Date(input);
  const formatter = new Intl.RelativeTimeFormat('en');
  const ranges = {
    years: 3600 * 24 * 365,
    months: 3600 * 24 * 30,
    weeks: 3600 * 24 * 7,
    days: 3600 * 24,
    hours: 3600,
    minutes: 60,
    seconds: 1,
  };
  const secondsElapsed = (date.getTime() - Date.now()) / 1000;
  for (const key in ranges) {
    if (ranges[key] < Math.abs(secondsElapsed)) {
      const delta = secondsElapsed / ranges[key];
      return formatter.format(Math.round(delta), key);
    }
  }
};
