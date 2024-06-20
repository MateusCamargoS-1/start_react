import ButtonDefault from "../components/ButtonDefault";

const Products = () => {
  const handleClick = () =>{
    alert('Puuuuts no produto');
  }

  return (
    <>
      <h1>Produto</h1>
      <div style={{ textAlign: 'center' }}>
        <ButtonDefault label="Botão Produto" action={handleClick} />
      </div>
    </>
  );
};
export default Products;
