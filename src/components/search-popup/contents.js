const content = [
  {
    key: 1,
    content: 'NA',
  },
  {
    key: 2,
    content: 'NA',
  },
  {
    key: 3,
    content: 'NA',
  },
  {
    key: 4,
    content: 'NA',
  },
  {
    key: 5,
    content: 'NA',
  },
  {
    key: 6,
    content: 'NA',
  },
  {
    key: 7,
    content: 'NA',
  },
  {
    key: 8,
    content: 'NA',
  },
];

export const Frames = [
  {
    key: 1,
    label: 'Search Title',
    type: 'title',
  },
  {
    key: 2,
    label: 'Created by',
    type: 'createBy',
  },
  {
    key: 3,
    label: 'Created on',
    type: 'createOn',
  },
  {
    key: 4,
    label: 'Updated on',
    type: 'updateOn',
  },
  {
    key: 5,
    label: 'Shared with',
    type: 'sharedwith',
  },
];

export const NewsletterFrames = [
  {
    key: 1,
    label: 'Search Title',
    type: 'title',
  },
  {
    key: 2,
    label: 'Created by',
    type: 'createBy',
  },
  {
    key: 3,
    label: 'Updated on',
    type: 'updateOn',
  },
];

export const Times = Array.from({ length: 24 }, (_, index) => {
  let a = ' AM';
  if (index > 11) {
    index = index - 12;
    a = ' PM';
  }
  return {
    label: index + 1 + a,
    id: index,
  };
});

export const Types = [
  {
    id: 0,
    label: 'HTML',
  },
  {
    id: 1,
    label: 'TEXT',
  },
  {
    id: 2,
    label: 'PDF',
  },
];

export const Days = [
  {
    id: 0,
    label: 'Monday',
  },
  {
    id: 1,
    label: 'Tuesday',
  },
  {
    id: 2,
    label: 'Wednesday',
  },
  {
    id: 3,
    label: 'Thursday',
  },
  {
    id: 4,
    label: 'Friday',
  },
  {
    id: 5,
    label: 'Saturday',
  },
  {
    id: 6,
    label: 'Sunday',
  },
];

export const contents = [
  {
    key: 1,
    checked: false,
    title: 'Gucci',
    des: 'This is a placeholder text used for demonstration purposes. Please replace this text with your own content when you are ready.',
    createBy: 'N Harish',
    createOn: '02 JUN 2022',
    updateOn: '02 JUN 2022',
    shared: JSON.parse(JSON.stringify(content.slice(0, 5))),
  },
  {
    key: 2,
    checked: false,
    title: 'Trending Topics',
    des: 'This is a placeholder text used for demonstration purposes. Please replace this text with your own content when you are ready.',
    createBy: 'N Harish',
    createOn: '02 JUN 2022',
    updateOn: '02 JUN 2022',
    shared: JSON.parse(JSON.stringify(content.slice(0, 8))),
  },
  {
    key: 3,
    checked: false,
    title: 'Gucci Topics',
    des: 'This is a placeholder text used for demonstration purposes. Please replace this text with your own content when you are ready.',
    createBy: 'N Harish',
    createOn: '02 JUN 2022',
    updateOn: '02 JUN 2022',
    shared: JSON.parse(JSON.stringify(content.slice(0, 7))),
  },
  {
    key: 4,
    checked: false,
    title: 'Gucci Trending Topics',
    des: 'This is a placeholder text used for demonstration purposes. Please replace this text with your own content when you are ready.',
    createBy: 'N Harish',
    createOn: '02 JUN 2022',
    updateOn: '02 JUN 2022',
    shared: JSON.parse(JSON.stringify(content.slice(0, 7))),
  },
  {
    key: 5,
    checked: false,
    title: 'Gucci Trending Topics',
    des: 'This is a placeholder text used for demonstration purposes. Please replace this text with your own content when you are ready.',
    createBy: 'N Harish',
    createOn: '02 JUN 2022',
    updateOn: '02 JUN 2022',
    shared: JSON.parse(JSON.stringify(content.slice(0, 5))),
  },
  {
    key: 6,
    checked: false,
    title: 'Gucci Trending Topics',
    des: 'This is a placeholder text used for demonstration purposes. Please replace this text with your own content when you are ready.',
    createBy: 'N Harish',
    createOn: '02 JUN 2022',
    updateOn: '02 JUN 2022',
    shared: JSON.parse(JSON.stringify(content.slice(0, 5))),
  },
  {
    key: 7,
    checked: false,
    title: 'Gucci Trending Topics',
    des: 'This is a placeholder text used for demonstration purposes. Please replace this text with your own content when you are ready.',
    createBy: 'N Harish',
    createOn: '02 JUN 2022',
    updateOn: '02 JUN 2022',
    shared: JSON.parse(JSON.stringify(content.slice(0, 7))),
  },
  {
    key: 8,
    checked: false,
    title: 'Gucci Trending Topics',
    des: 'This is a placeholder text used for demonstration purposes. Please replace this text with your own content when you are ready.',
    createBy: 'N Harish',
    createOn: '02 JUN 2022',
    updateOn: '02 JUN 2022',
    shared: JSON.parse(JSON.stringify(content.slice(0, 5))),
  },
  {
    key: 9,
    checked: false,
    title: 'Gucci Trending Topics',
    des: 'This is a placeholder text used for demonstration purposes. Please replace this text with your own content when you are ready.',
    createBy: 'N Harish',
    createOn: '02 JUN 2022',
    updateOn: '02 JUN 2022',
    shared: JSON.parse(JSON.stringify(content.slice(0, 4))),
  },
  {
    key: 10,
    checked: false,
    title: 'Gucci Trending Topics',
    des: 'This is a placeholder text used for demonstration purposes. Please replace this text with your own content when you are ready.',
    createBy: 'N Harish',
    createOn: '02 JUN 2022',
    updateOn: '02 JUN 2022',
    shared: JSON.parse(JSON.stringify(content.slice(0, 6))),
  },
  {
    key: 11,
    checked: false,
    title: 'Gucci Trending Topics',
    des: 'This is a placeholder text used for demonstration purposes. Please replace this text with your own content when you are ready.',
    createBy: 'N Harish',
    createOn: '02 JUN 2022',
    updateOn: '02 JUN 2022',
    shared: JSON.parse(JSON.stringify(content.slice(0, 5))),
  },
  {
    key: 12,
    checked: false,
    title: 'Gucci Trending Topics',
    des: 'This is a placeholder text used for demonstration purposes. Please replace this text with your own content when you are ready.',
    createBy: 'N Harish',
    createOn: '02 JUN 2022',
    updateOn: '02 JUN 2022',
    shared: JSON.parse(JSON.stringify(content.slice(0, 8))),
  },
  {
    key: 13,
    checked: false,
    title: ' Trending Topics',
    des: 'This is a placeholder text used for demonstration purposes. Please replace this text with your own content when you are ready.',
    createBy: 'N Harish',
    createOn: '02 JUN 2022',
    updateOn: '02 JUN 2022',
    shared: JSON.parse(JSON.stringify(content.slice(0, 4))),
  },
];
