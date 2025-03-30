import style from './Description.module.css';

const Description = () => {
  return (
    <>
      <h1 className={style.title}>Sip Happens Café</h1>
      <p className={style.description}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
};

export default Description;
