

const LinhaVerticalMoldura = ({heightLine = '398px'}) => {

    const lineStyles = {
        width: '2px',
        height: heightLine,
        background: '#ffffff',
    };

    return (
        <div style={{ width: '2px', height: '360px' }}>
            <div style={lineStyles}></div>
        </div>
    );
};

export default LinhaVerticalMoldura;
