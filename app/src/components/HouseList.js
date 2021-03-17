import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../store';

const HouseList = props => {
    const { fetchData } = props;
    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <>
            {
                props.data.map(house => <p key={house.url}>{house.name}</p>)
            }
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