
const House = (props) => {

    const { house } = props

    return (
        <div className="house">
            <h4>{house.name}</h4>
        </div>
    )
}

export default House;