export const Cards = ({name, price, id, image }) => {

    return (
        <div className="card" key={id}>
            <div className="card-img">
                <img src={image} alt={id} />
            </div>
            <div className="card-content">
                <h3 className="card-content-name">{name}</h3>
                <p>{id}</p>
                <p>Precio: ${price}</p>
            </div>
        </div>
    )
}
