import moment from 'moment';
import Util from '../util';
import {Images, Colors} from '../theme';

export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 20;
// export const TIME_ZONE = (-1 * new Date().getTimezoneOffset()) / 60;
export const APP_URL = '';
export const APP_DOMAIN = '';
export const QUERY_LIMIT = 10;
export const SAGA_ALERT_TIMEOUT = 500;
export const POST_VIEW_TIMEOUT = 2000;
export const IMAGE_QUALITY = 1;
export const IMAGE_MAX_WIDTH = 720;
export const IMAGE_MAX_HEIGHT = 480;
export const IMAGE_COMPRESS_MAX_WIDTH = 720;
export const IMAGE_COMPRESS_MAX_HEIGHT = 480;
export const VERSES_OF_THE_DAY_LIMIT = 10;
export const IMAGE_COMPRESS_FORMAT = 'JPEG';
export const ANDROID_NOTI_CHANNEL = 'VeteranAppChanel';

// date time formats
export const DATE_FORMAT1 = 'dddd, DD MMMM, YYYY';
export const DATE_FORMAT2 = 'DD MMM YYYY';
export const DATE_FORMAT3 = 'YYYY-MM-DD';
export const TIME_FORMAT1 = 'hh:mm A';
export const TIME_FORMAT2 = 'HH:mm ';

export const DATE_FORMAT_TIME1 = 'Do | MMM | HH';
export const DATE_FORMAT4 = 'dddd, DD MMMM YYYY';
export const DATE_FORMAT5 = 'MMM DD, YYYY';

// Messages

export const LOCATION_PERMISSION_DENIED_ERROR2 =
  'Location permission required, please go to app settings to allow access';
export const INVALID_NAME_ERROR = 'Invalid name';
export const INVALID_EMAIL_ERROR = 'Invalid email';
export const INVALID_PASSWORD_ERROR = `Password not valid (Use atleast one UpperCase Letter, one number and one special character)`;
export const INTERNET_ERROR = 'Please connect to the working internet';
export const ARE_U_SURE = 'Are you sure?';
export const WELCOME_NOTE = 'Welcome to the Veteran App!';
export const PROFILE_UPDATE_SUCCESS = 'Profile successfully updated!';
export const SESSION_EXPIRED_ERROR = 'Session expired, Please login again';

export const PLACEHOLDER_IMAGE =
  'https://i.imgur.com/udLAJnO_d.webp?maxwidth=760&fidelity=grand';

// Message types
export const MESSAGE_TYPES = {
  INFO: 'info',
  ERROR: 'error',
  SUCCESS: 'success',
};
export const challengeMessage = `30 day challenges force you to do something every single day.even if that something is small.what matters is that a consistent action is taken,because it's the small actions each day that build behaviors and habits that stick`;
// File Types
export const FILE_TYPES = {VIDEO: 'video', IMAGE: 'image', AUDIO: 'audi'};

// User Types

export const DELTA_LOCATION = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

// DUMMY Data

export const EXCHANGE_LIST = ['BTC', 'ETCH', 'Cancel'];

export const CURRENCY_LIST = [
  {id: 2, currency: 'ALTS'},
  {id: 3, currency: 'USDT'},
  {id: 4, currency: 'BTC'},
  {id: 4, currency: 'DeFi'},
  {id: 4, currency: 'NFT'},
];
export const COINS = [
  {
    id: 2,
    currency: 'ALTS',
    Coin: 'BTC',
    image: '',
    pair: 'AUD',
    status: 1,
    coinName: 'Bitcoin',
  },
  {id: 3, currency: 'USDT', Coin: 'LUNA', image: '', pair: 'AUD', status: 2},
  {id: 5, currency: 'BTC', Coin: 'XRP', image: '', pair: 'AUD', status: 1},
  {id: 6, currency: 'DeFi', Coin: 'AVAX', image: '', pair: 'AUD', status: 3},
  {id: 7, currency: 'NFT', Coin: 'SOL', image: '', pair: 'AUD', status: 3},
  {id: 8, currency: 'NFT', Coin: 'MATIC', image: '', pair: 'AUD', status: 3},

  {id: 9, currency: 'NFT', Coin: 'ADA', image: '', pair: 'AUD', status: 1},

  {id: 10, currency: 'NFT', Coin: 'DOGE', image: '', pair: 'AUD', status: 3},

  {id: 11, currency: 'NFT', Coin: 'BTC', image: '', pair: 'AUD', status: 2},

  {id: 12, currency: 'NFT', Coin: 'BTC', image: '', pair: 'AUD', status: 1},

  {id: 13, currency: 'NFT', Coin: 'BTC', image: '', pair: 'AUD', status: 1},
];
export const MY_COINS = [
  {id: 1, coin: 'Bitcoin', image: Images.coins.Bitcoin},
  {id: 1, coin: 'XRP', image: Images.coins.xrp},
  {id: 1, coin: 'Ethereum', image: Images.coins.Eth},
  {id: 1, coin: 'Cardano', image: Images.coins.Cardano},

  {id: 1, coin: 'PolkaDot', image: Images.coins.polka},
];
export const TOTAL_COINS = [
  {id: 1, coin: 'Bitcoin', image: Images.coins.Bitcoin, status: 'positive'},
  {id: 2, coin: 'XRP', image: Images.coins.xrp, status: 'negative'},
  {id: 3, coin: 'Ethereum', image: Images.coins.Eth, status: 'negative'},
  {id: 4, coin: 'Cardano', image: Images.coins.Cardano, status: 'negative'},

  {id: 5, coin: 'PolkaDot', image: Images.coins.polka, status: 'positive'},
  {id: 6, coin: 'Bitcoin', image: Images.coins.Bitcoin, status: 'negative'},
  {id: 7, coin: 'XRP', image: Images.coins.xrp, status: 'positive'},
  {id: 8, coin: 'Ethereum', image: Images.coins.Eth, status: 'negative'},
  {id: 9, coin: 'Cardano', image: Images.coins.Cardano, status: 'positive'},

  {id: 10, coin: 'PolkaDot', image: Images.coins.polka, status: 'negative'},
  {id: 11, coin: 'Bitcoin', image: Images.coins.Bitcoin, status: 'positive'},
  {id: 12, coin: 'XRP', image: Images.coins.xrp, status: 'negative'},
  {id: 13, coin: 'Ethereum', image: Images.coins.Eth, status: 'positive'},
  {id: 14, coin: 'Cardano', image: Images.coins.Cardano, status: 'negative'},

  {id: 1, coin: 'PolkaDot', image: Images.coins.polka, status: 'negative'},
];
export const Notification = [
  {
    id: 1,
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: 'jan 21,2021',
    time: '12:00',
  },
  {
    id: 1,
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: 'jan 21,2021',
    time: '12:00',
  },
  {
    id: 1,
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: 'jan 21,2021',
    time: '12:00',
  },
  {
    id: 1,
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: 'jan 21,2021',
    time: '12:00',
  },
  {
    id: 1,
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: 'jan 21,2021',
    time: '12:00',
  },
  {
    id: 1,
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: 'jan 21,2021',
    time: '12:00',
  },
];

export const AlertType = ['Price Drops of', 'Price Increase Of', 'Cancel'];
export const Frequncy = ['Only Once', 'Daily', 'Repeated', 'Cancel'];

export const GRAPH_FILTER = [
  {id: 1, name: '1H'},
  {id: 2, name: '4H'},

  {id: 3, name: '12H'},
  {id: 4, name: '1D'},
  {id: 5, name: '3D'},
  {id: 6, name: '1W'},
  {id: 7, name: '1M'},
  {id: 8, name: '3M'},
];

export const pieData = [
  {
    percentage: 31.64,
    color: Colors.yellow,
    name: 'AXS',
  },
  {
    percentage: 16.29,
    color: '#8213B1',
    name: 'MATIC',
  },
  {
    percentage: 15.76,
    color: '#EFBC57',
    name: 'DOT',
  },
  {
    percentage: 8.56,
    color: '#585556',
    name: 'ETH',
  },
  {
    percentage: 14.12,
    color: '#23B131',
    name: 'ADA',
  },
  {
    percentage: 10,
    color: '#627899',
    name: 'Other',
  },
  {
    percentage: 8.56,
    color: '#585556',
    name: 'ETH',
  },
  {
    percentage: 14.12,
    color: '#23B131',
    name: 'ADA',
  },
  {
    percentage: 10,
    color: '#627899',
    name: 'Other',
  },
];
