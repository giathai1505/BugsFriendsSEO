const Users= [
  {
    id: 1,
    email: 'example@gmail.com',
    password: '1234'
  }
]
const Posts = [
  {
    id: 1,
    title: 'Javascipt không chỉ có console.log',
    image: 'js-item1.jpg',
    category: 'series Javascrip nâng cao',
    date: new Date(2021, 9, 20),
    viewName: 'post-1',
    intro: '...'
  },
  {
    id: 2,
    title: 'Bất đồng bộ và những thứ liên quan trong Javascript',
    image: 'js-item2.jpg',
    category: 'series Javascrip nâng cao',
    date: new Date(2021, 10, 10),
    viewName: 'post-2',
    intro: '...'
  },
  {
    id: 3,
    title: 'Cách dùng async-await',
    image: 'js-item3.jpg',
    category: 'series Javascrip nâng cao',
    date: new Date(2020, 5, 1),
    viewName: 'post-1',
    intro: '...'
  },
  {
    id: 4,
    title: 'Những khái niệm về web bạn nên biết',
    category: 'HTML và CSS',
    image: 'js-item4.jpg',
    date: new Date(2021, 7, 20),
    viewName: 'post-4',
    intro: '...'
  },
  {
    id: 5,
    title: 'Flex box CSS là gì?',
    category: 'HTML và CSS',
    image: 'htmlcss1.jpg',
    date: new Date(2021, 7, 20),
    viewName: 'post-5',
    intro: '...'
  },
  {
    id: 6,
    title: 'Tiêu chuẩn đặt tên BEM trong HTML',
    category: 'HTML và CSS',
    image: 'htmlcss2.jpg',
    date: new Date(2021, 7, 20),
    viewName: 'post-6',
    intro: '...'
  },
  {
    id: 7,
    title: 'Cách học HTML CSS hiệu quả',
    category: 'HTML và CSS',
    image: 'htmlcss3.jpg',
    date: new Date(2021, 7, 20),
    viewName: 'post-7',
    intro: '...'
  },
  {
    id: 8,
    title: 'Sự ra đời của React Hooks',
    category: 'ReactJS',
    image: 'react1.jpg',
    date: new Date(2021, 7, 20),
    viewName: 'post-8',
    intro: '...'
  },
  {
    id: 9,
    title: 'Tất tần tật về React Hooks',
    category: 'Reactjs',
    image: 'react2.jpg',
    date: new Date(2021, 7, 20),
    viewName: 'post-9',
    intro: '...'
  },
  {
    id: 10,
    title: 'React Hooks ảnh hưởng thế nào tới function component',
    category: 'ReactJS',
    image: 'react3.jpg',
    date: new Date(2021, 7, 20),
    viewName: 'post-10',
    intro: '...'
  },
  {
    id: 11,
    title: '"Single page application" (SPA) hoạt động ra sao',
    category: 'HTML và CSS',
    image: 'react4.jpg',
    date: new Date(2021, 7, 20),
    viewName: 'post-11',
    intro: '...'
  },
  {
    id: 12,
    title: 'React Dom và render UI',
    category: 'HTML và CSS',
    image: 'react5.jpg',
    date: new Date(2021, 7, 20),
    viewName: 'post-12',
    intro: '...'
  },
  {
    id: 13,
    title: 'React element types',
    category: 'ReactJS',
    image: 'react6.jpg',
    date: new Date(2021, 7, 20),
    viewName: 'post-13',
    intro: '...'
  },
  {
    id: 14,
    title: 'Làm việc với JSX',
    category: 'Reactjs',
    image: 'react67jpg.jpg',
    date: new Date(2021, 7, 20),
    viewName: 'post-14',
    intro: '...'
  },
  {
    id: 15,
    title: 'Two way biding là gì?',
    category: 'ReactJS',
    image: 'react8.jpg',
    date: new Date(2021, 7, 20),
    viewName: 'post-15',
    intro: '...'
  },
  {
    id: 16,
    title: 'Nên code bao nhiêu tiếng một ngày',
    category: 'Experience',
    image: 'abm1-1.jpg',
    date: new Date(2021, 7, 20),
    viewName: 'post-16',
    intro: '...'
  },
  {
    id: 17,
    title: 'Cách học Front End hiệu quả',
    category: 'Experience',
    image: 'abm1-3.jpeg',
    date: new Date(2021, 7, 20),
    viewName: 'post-17',
    intro: '...'
  },
  {
    id: 18,
    title: 'Kinh nghiệm phỏng vấn',
    category: 'Experience',
    image: 'abm1-4.png',
    date: new Date(2021, 7, 20),
    viewName: 'post-18',
    intro: '...'
  },
  {
    id: 19,
    title: 'Cách biết mình có thực sự đam mê với lập trình',
    category: 'Experience',
    image: 'abm1-5.jpg',
    date: new Date(2021, 7, 20),
    viewName: 'post-19',
    intro: '...'
  },
  {
    id: 20,
    title: 'So sánh mức lương của các ngành trong lĩnh vực CNTT',
    category: 'Experience',
    image: 'abm2.png',
    date: new Date(2021, 7, 20),
    viewName: 'post-20',
    intro: '...'
  },
]

module.exports = {
  posts: Posts,
  users: Users
}