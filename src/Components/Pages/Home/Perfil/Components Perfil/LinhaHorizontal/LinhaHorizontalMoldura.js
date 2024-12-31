import "./LinhaHorizontalMoldura.css";

const LinhaHorizontalMoldura = ({ rotationLine = 'none', divWidth = '100%'}) => {

    const lineStyles = {
        width: `100%`,
        height: '100%',
        background: '#ffffff',
    };

    return (
        <div style={{ width: `${divWidth}`, height: '2px', transform: `${rotationLine}`, alignItems: 'flex-end', overflow:'visible' }}>
            <div style={lineStyles}></div>
        </div>
    );
};

export default LinhaHorizontalMoldura;
