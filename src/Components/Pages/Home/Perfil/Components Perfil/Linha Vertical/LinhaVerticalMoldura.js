import './LinhaVerticalMoldura.css';

const LinhaVerticalMoldura = ({ heightLine = 360, paddingCorretor = 'none' }) => {

    const lineStyles = {
        width: '2px',
        height: `360px`,
        background: '#ffffff',
    };

    return (
        <div style={{ width: '2px', height: '360px', paddingLeft: `${paddingCorretor}` }}>
            <div style={lineStyles}></div>
        </div>
    );
};

export default LinhaVerticalMoldura;
