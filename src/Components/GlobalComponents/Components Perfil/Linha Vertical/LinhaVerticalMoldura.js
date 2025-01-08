

const LinhaVerticalMoldura = ({heightLine = '100%'}) => {

    const lineStyles = {
        width: '2px',
        height: heightLine,
        background: '#ffffff',
    };

    return (
        <div style={{ width: '2px', height: '100%' }}>
            <div style={lineStyles}></div>
        </div>
    );
};

export default LinhaVerticalMoldura;
