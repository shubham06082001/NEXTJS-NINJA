const Footer = () => {
  const year = new Date().getFullYear();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const d = new Date();
  let month = months[d.getMonth()];

  const date = new Date().getDate();
  return (
    <footer>
      Copyright &copy; {date} / {month} / {year} ListMapper
    </footer>
  );
};

export default Footer;
