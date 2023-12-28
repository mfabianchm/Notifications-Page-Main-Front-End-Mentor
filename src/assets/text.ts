export const texts: {
  name: string;
  action: string;
  group: string;
  time: string;
  imgUrl: string;
  message: string;
  pending: boolean;
  hasMessage: boolean;
}[] = [
  {
    name: 'Mark Webber',
    action: 'reacted yo your recent post',
    group: 'My first tournament today!',
    time: '1m ago',
    imgUrl: '../assets/avatar-mark-webber.webp',
    pending: true,
    hasMessage: false,
    message: '',
  },
  {
    name: 'Angela Gray',
    action: 'followed you',
    group: '',
    time: '5m ago',
    imgUrl: '../assets/avatar-angela-gray.webp',
    pending: true,
    hasMessage: false,
    message: '',
  },
  {
    name: 'Jacob Thompson',
    action: 'has joined the group',
    group: 'Chess Club',
    time: '1 day ago',
    imgUrl: '../assets/avatar-jacob-thompson.webp',
    pending: true,
    hasMessage: false,
    message: '',
  },
  {
    name: 'Rizky Hasanuddin',
    action: 'sent you a private message',
    group: '',
    time: '5 days ago',
    imgUrl: '../assets/avatar-rizky-hasanuddin.webp',
    pending: false,
    hasMessage: true,
    message:
      'Hello, thanks for setting up the Chess Club. I´ve been a member for a few weeks now and Im already having lots of fun and improving my game.',
  },
  {
    name: 'Kimberly Smith',
    action: 'commented on your picture',
    group: '',
    time: '1 week ago',
    imgUrl: '../assets/avatar-kimberly-smith.webp',
    pending: false,
    hasMessage: false,
    message: '',
  },
  {
    name: 'Nathan Peterson',
    action: 'reacted to your recent post',
    group: '5 end-game strategies to increase your win rate',
    time: '2 weeks ago',
    imgUrl: '../assets/avatar-nathan-peterson.webp',
    pending: false,
    hasMessage: false,
    message: '',
  },
  {
    name: 'Anna Kim',
    action: 'left the group',
    group: '5 Chess Club',
    time: '2 weeks ago',
    imgUrl: '../assets/avatar-anna-kim.webp',
    pending: false,
    hasMessage: false,
    message: '',
  },
];
