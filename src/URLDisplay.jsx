const URLDisplay = ({ url}) => {
    return (
        <div className="url-display">
        <p>
            <a href={url}>{url}</a>
            </p>
        </div>
    );
    };
    export default URLDisplay;
    