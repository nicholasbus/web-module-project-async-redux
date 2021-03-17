import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../store';
import House from './House'
import Loader from "react-loader-spinner";


const HouseList = props => {
    const { fetchData } = props;
    useEffect(() => {
        fetchData()
    }, [fetchData])

    console.log(props.data)
    return (
        <>
        <h1>Houses Of Ice And Fire</h1>
        {props.isLoading ? <Loader type="Puff" color="#00BFFF" height={80} width={80} style={{textAlign: 'center'}} /> : null}
        {props.errors ? <h2 id='errors'>{props.errors}</h2> : null}
        <div className="container">
            {
                props.data.map(house => <House key={house.url} house={house} />)
            }
        </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        data: state.data,
        isLoading: state.isLoading,
        errors: state.errors,
    }
}

export default connect(mapStateToProps, { fetchData })(HouseList)