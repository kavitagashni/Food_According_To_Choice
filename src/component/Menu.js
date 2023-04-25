import './Menu.css'

const Menu = ({id, title, price, img, desc} ) => {
    return(
        <div key={id}  className='card'>
            <img src={img}/>
            <div className='box'>
                <h2>{title}</h2>
                <h5>${price}</h5>
            </div>
            <p>{desc}</p>
        </div>
    )
}
export default Menu;