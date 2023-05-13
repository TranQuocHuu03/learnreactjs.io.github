
const Card=(props)=>{
    return(
        <>
        <div >
            <img src={props.avatar}/>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <button type="button" onClick= {()=>Aleart()}>Mua ngay</button>
        </div>
        </>
    );
};
function Aleart(){
    alert("Đã thêm vào giỏ hàng thành công!")
}
export default  Card;