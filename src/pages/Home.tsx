import ButtonDefault from '../components/ButtonDefault';

const Home = () => {
  const handleClick = () => {
    alert('Puuuuuuts no Home');
  };
  return (
    <>
      <h1>Home</h1>
      <div style={{ textAlign: 'center' }}>
        <ButtonDefault label="Botão Home" action={handleClick} />
      </div>
    </>
  );
};
export default Home;
