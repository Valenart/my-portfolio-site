

const LinhaHorizontalMoldura = ({ rotationLine = 'none', divWidth = '100%', widthLine = "100%"}) => {

    const lineStyles = {
        width: widthLine,
        height: '100%',
        background: '#ffffff',
    };

    return (
        <div style={{ width: `${divWidth}`, height: '1px', transform: `${rotationLine}`, alignItems: 'flex-end', overflow:'visible' }}>
            <div style={lineStyles}></div>
        </div>
    );
};

export default LinhaHorizontalMoldura;
