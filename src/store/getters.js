export default {
    getAverage: state => {
        return (state.allScore/state.allStudent).toFixed(2);
    }
}